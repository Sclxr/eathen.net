function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || '').trim());
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const webhook = process.env.DISCORD_WEBHOOK_URL;
  if (!webhook) return res.status(500).json({ error: 'Missing DISCORD_WEBHOOK_URL' });

  const name = (req.body?.name || '').trim();
  const email = (req.body?.email || '').trim();
  const message = (req.body?.message || '').trim();

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  // optional honeypot
  const company = (req.body?.company || '').trim();
  if (company) return res.status(200).json({ success: true });

  const payload = {
    username: 'Eathen Leads',
    embeds: [
      {
        title: 'New Website Lead',
        fields: [
          { name: 'Name', value: name.slice(0, 256), inline: true },
          { name: 'Email', value: email.slice(0, 256), inline: true },
          { name: 'Message', value: message.slice(0, 1024) || '(empty)' },
        ],
      },
    ],
  };

  try {
    const r = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!r.ok) {
      const text = await r.text().catch(() => '');
      return res.status(500).json({ error: 'Discord webhook failed', details: text });
    }

    return res.status(200).json({ success: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Request failed' });
  }
}
