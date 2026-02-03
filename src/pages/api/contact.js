import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || '').trim());
}

// basic HTML escape to prevent someone injecting markup into your email
function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Ensure env is present
  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'Missing RESEND_API_KEY in env' });
  }

  const FROM = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
  const TO = process.env.CONTACT_TO_EMAIL || 'hello@eathen.net';

  const name = (req.body?.name || '').trim();
  const email = (req.body?.email || '').trim();
  const message = (req.body?.message || '').trim();

  // Validate inputs
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill out all fields.' });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Please enter a valid email.' });
  }

  // Optional: simple anti-spam (honeypot field)
  // If you add <input name="company" style={{display:'none'}} /> and it’s filled, treat as spam
  const honeypot = (req.body?.company || '').trim();
  if (honeypot) {
    return res.status(200).json({ success: true }); // silently succeed
  }

  try {
    await resend.emails.send({
      from: `Eathen <${FROM}>`,
      to: [TO],
      reply_to: email,
      subject: `New website inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2 style="margin: 0 0 12px;">New Contact Form Submission</h2>
          <p style="margin: 0 0 6px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin: 0 0 6px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p style="margin: 12px 0 6px;"><strong>Message:</strong></p>
          <div style="white-space: pre-wrap; padding: 12px; border: 1px solid #ddd; border-radius: 8px;">
            ${escapeHtml(message)}
          </div>
          <p style="margin: 14px 0 0; color: #666; font-size: 12px;">
            Sent from eathen.net contact form
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    return res.status(500).json({ error: 'Failed to send. Try again later.' });
  }
}
