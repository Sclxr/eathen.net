import React from 'react'
import Head from 'next/head'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import styles from './home.module.css'

export default function Home() {
  const [sending, setSending] = React.useState(false)
  const [status, setStatus] = React.useState({ type: '', message: '' })

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      Head,
      null,
      React.createElement('title', null, 'Eathen - Websites for Small Businesses'),
      React.createElement('meta', {
        name: 'description',
        content:
          'We build clean, fast websites that help small businesses get more calls and customers. Design, development, and SEO foundations included.',
      }),
      React.createElement('meta', {
        name: 'keywords',
        content: 'web design, small business website, web development, seo, website redesign, landing page',
      }),
      React.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),

      // Open Graph
      React.createElement('meta', { property: 'og:type', content: 'website' }),
      React.createElement('meta', { property: 'og:title', content: 'Eathen - Websites for Small Businesses' }),
      React.createElement('meta', {
        property: 'og:description',
        content: 'Clean, fast websites that convert visitors into leads.',
      }),
      React.createElement('meta', { property: 'og:url', content: 'https://eathen.net' }),

      // Twitter
      React.createElement('meta', { name: 'twitter:card', content: 'summary_large_image' }),
      React.createElement('meta', { name: 'twitter:title', content: 'Eathen - Websites for Small Businesses' }),
      React.createElement('meta', {
        name: 'twitter:description',
        content: 'Clean, fast websites that convert visitors into leads.',
      }),

      React.createElement('link', { rel: 'canonical', href: 'https://eathen.net/home' })
    ),

    React.createElement(Header, null),

    React.createElement(
      'main',
      { className: styles.main },

      // HERO
      React.createElement(
        'section',
        { className: styles.hero },
        React.createElement(
          'div',
          { className: styles.heroInner },
          React.createElement(
            'div',
            { className: styles.heroContent },
            React.createElement('div', { className: styles.badge }, 'Web Design + Development'),
            React.createElement(
              'h1',
              { className: styles.heroTitle },
              'Websites that look premium',
              React.createElement('br', null),
              'and get you more leads.'
            ),
            React.createElement(
              'p',
              { className: styles.heroSubtitle },
              'If your business is solid, your website should prove it in 5 seconds. We build clean, fast sites that turn visits into calls, texts, and form submissions.'
            ),
            React.createElement(
              'div',
              { className: styles.heroCta },
              React.createElement('a', { className: styles.primaryButton, href: '#contact' }, 'Get a Free Quote')
            ),
            React.createElement(
              'div',
              { className: styles.heroProofRow },
              React.createElement(
                'div',
                { className: styles.proofItem },
                React.createElement('div', { className: styles.proofDot }),
                React.createElement('span', null, 'Mobile-first, fast load times')
              ),
              React.createElement(
                'div',
                { className: styles.proofItem },
                React.createElement('div', { className: styles.proofDot }),
                React.createElement('span', null, 'SEO foundations included')
              ),
              React.createElement(
                'div',
                { className: styles.proofItem },
                React.createElement('div', { className: styles.proofDot }),
                React.createElement('span', null, 'Built to convert, not just “look nice”')
              )
            )
          ),
          React.createElement(
            'div',
            { className: styles.heroVisual },
            React.createElement(
              'div',
              { className: styles.visualCard },
              React.createElement(
                'div',
                { className: styles.visualTop },
                React.createElement(
                  'div',
                  { className: styles.fakeBrowserDots },
                  React.createElement('span', null),
                  React.createElement('span', null),
                  React.createElement('span', null)
                ),
                React.createElement('div', { className: styles.fakeUrl }, 'eathen.net/your-business')
              ),
              React.createElement(
                'div',
                { className: styles.visualBody },
                React.createElement('div', { className: styles.visualLineLg }),
                React.createElement('div', { className: styles.visualLineMd }),
                React.createElement(
                  'div',
                  { className: styles.visualGrid },
                  React.createElement('div', { className: styles.visualBox }),
                  React.createElement('div', { className: styles.visualBox }),
                  React.createElement('div', { className: styles.visualBox })
                ),
                React.createElement('div', { className: styles.visualCtaPill }, 'Call / Text / Form → Leads')
              )
            )
          )
        )
      ),

      // VALUE / OFFER
      React.createElement(
        'section',
        { className: styles.value },
        React.createElement(
          'div',
          { className: styles.container },
          React.createElement('h2', { className: styles.sectionTitle }, 'What you get'),
          React.createElement(
            'p',
            { className: styles.sectionSubtitle },
            'No fake metrics. Just a site that makes people trust you and take action.'
          ),
          React.createElement(
            'div',
            { className: styles.valueGrid },
            React.createElement(
              'div',
              { className: styles.valueCard },
              React.createElement('h3', null, 'High-converting layout'),
              React.createElement(
                'p',
                null,
                'Clear headline, benefits, proof, and a strong call-to-action so visitors know exactly what to do.'
              )
            ),
            React.createElement(
              'div',
              { className: styles.valueCard },
              React.createElement('h3', null, 'Fast + responsive'),
              React.createElement(
                'p',
                null,
                'Built mobile-first with performance in mind so it feels premium and loads quick on phones.'
              )
            ),
            React.createElement(
              'div',
              { className: styles.valueCard },
              React.createElement('h3', null, 'SEO foundations'),
              React.createElement(
                'p',
                null,
                'Proper headings, metadata, clean structure, and technical basics that help you show up on Google.'
              )
            ),
            React.createElement(
              'div',
              { className: styles.valueCard },
              React.createElement('h3', null, 'Easy edits'),
              React.createElement(
                'p',
                null,
                'We keep it organized so adding a section, changing text, or swapping images is simple.'
              )
            )
          ),
          React.createElement(
            'div',
            { className: styles.valueCtaRow },
            React.createElement('a', { className: styles.primaryButton, href: '#contact' }, 'Get a Free Quote'),
            React.createElement('a', { className: styles.textLink, href: '#services' }, 'See what we offer →')
          )
        )
      ),

      // SERVICES
      React.createElement(
        'section',
        { className: styles.services, id: 'services' },
        React.createElement(
          'div',
          { className: styles.container },
          React.createElement(
            'div',
            { className: styles.servicesHeader },
            React.createElement('h2', { className: styles.sectionTitle }, 'Services'),
            React.createElement('p', { className: styles.sectionSubtitle }, 'Everything you need to look legit online')
          ),
          React.createElement(
            'div',
            { className: styles.servicesGrid },
            React.createElement(
              'div',
              { className: styles.serviceCard },
              React.createElement('div', { className: styles.serviceNumber }, '01'),
              React.createElement('h3', null, 'Web Design'),
              React.createElement('p', null, 'Modern, clean design with a layout built around trust + conversions.'),
              React.createElement('div', { className: styles.serviceArrow }, '→')
            ),
            React.createElement(
              'div',
              { className: styles.serviceCard },
              React.createElement('div', { className: styles.serviceNumber }, '02'),
              React.createElement('h3', null, 'Development'),
              React.createElement('p', null, 'Fast, responsive build with best practices and a structure that scales.'),
              React.createElement('div', { className: styles.serviceArrow }, '→')
            ),
            React.createElement(
              'div',
              { className: styles.serviceCard },
              React.createElement('div', { className: styles.serviceNumber }, '03'),
              React.createElement('h3', null, 'SEO Setup'),
              React.createElement('p', null, 'SEO basics so Google can understand your site and customers can find you.'),
              React.createElement('div', { className: styles.serviceArrow }, '→')
            ),
            React.createElement(
              'div',
              { className: styles.serviceCard },
              React.createElement('div', { className: styles.serviceNumber }, '04'),
              React.createElement('h3', null, 'Maintenance'),
              React.createElement('p', null, 'Optional monthly support for edits, updates, and keeping things running smooth.'),
              React.createElement('div', { className: styles.serviceArrow }, '→')
            )
          )
        )
      ),

      // PROCESS
      React.createElement(
        'section',
        { className: styles.process },
        React.createElement(
          'div',
          { className: styles.container },
          React.createElement('h2', { className: styles.sectionTitle }, 'How it works'),
          React.createElement('p', { className: styles.sectionSubtitle }, 'Simple process. Clear deliverables. No surprises.'),
          React.createElement(
            'div',
            { className: styles.processGrid },
            React.createElement(
              'div',
              { className: styles.processStep },
              React.createElement('div', { className: styles.processNumber }, '1'),
              React.createElement('h3', null, 'Quick call'),
              React.createElement('p', null, 'We learn what you do, who you want to attract, and what “success” means.')
            ),
            React.createElement(
              'div',
              { className: styles.processStep },
              React.createElement('div', { className: styles.processNumber }, '2'),
              React.createElement('h3', null, 'Design + copy'),
              React.createElement('p', null, 'We shape the layout and messaging so visitors instantly “get it.”')
            ),
            React.createElement(
              'div',
              { className: styles.processStep },
              React.createElement('div', { className: styles.processNumber }, '3'),
              React.createElement('h3', null, 'Build'),
              React.createElement('p', null, 'We develop the site fast, responsive, and organized for easy updates.')
            ),
            React.createElement(
              'div',
              { className: styles.processStep },
              React.createElement('div', { className: styles.processNumber }, '4'),
              React.createElement('h3', null, 'Launch'),
              React.createElement('p', null, 'We publish it, test everything, and you start collecting leads.')
            )
          )
        )
      ),

      // FAQ
      React.createElement(
        'section',
        { className: styles.faq },
        React.createElement(
          'div',
          { className: styles.container },
          React.createElement('h2', { className: styles.sectionTitle }, 'FAQ'),
          React.createElement(
            'div',
            { className: styles.faqGrid },
            React.createElement(
              'div',
              { className: styles.faqItem },
              React.createElement('h3', null, 'How long does it take?'),
              React.createElement('p', null, 'Usually 7–14 days depending on pages + how fast content/photos are ready.')
            ),
            React.createElement(
              'div',
              { className: styles.faqItem },
              React.createElement('h3', null, 'Do you do hosting/domains?'),
              React.createElement('p', null, 'Yep — we can help you set up hosting + domain, or work with what you already use.')
            ),
            React.createElement(
              'div',
              { className: styles.faqItem },
              React.createElement('h3', null, 'Can you redesign my current site?'),
              React.createElement('p', null, '100%. We can rebuild it modern and fix the layout to increase leads.')
            ),
            React.createElement(
              'div',
              { className: styles.faqItem },
              React.createElement('h3', null, 'What do you need from me?'),
              React.createElement(
                'p',
                null,
                'Your logo, services, photos (if you have them), and a quick call to get the details.'
              )
            )
          )
        )
      ),

      // CTA STRIP
      React.createElement(
        'section',
        { className: styles.ctaStrip },
        React.createElement(
          'div',
          { className: styles.container },
          React.createElement(
            'div',
            { className: styles.ctaContent },
            React.createElement('h2', null, 'Ready to get a site that actually converts?'),
            React.createElement('p', null, 'Tell us what you do and what you want your website to accomplish.'),
            React.createElement('a', { className: styles.ctaButton, href: '#contact' }, 'Get Started')
          )
        )
      ),

      // CONTACT
      React.createElement(
        'section',
        { className: styles.contact, id: 'contact' },
        React.createElement(
          'div',
          { className: styles.container },
          React.createElement('h2', { className: styles.sectionTitle }, 'Contact'),
          React.createElement('p', { className: styles.sectionSubtitle }, 'Send a quick message. We’ll reply with next steps.'),
          React.createElement(
            'div',
            { className: styles.contactGrid },
            React.createElement(
              'div',
              { className: styles.contactCard },
              React.createElement('h3', null, 'Quick details'),
              React.createElement(
                'p',
                null,
                'What business are you in? What services do you offer? Do you want more calls, bookings, or form leads?'
              ),
              React.createElement(
                'div',
                { className: styles.contactMini },
                React.createElement('div', { className: styles.contactMiniLabel }, 'Email'),
                React.createElement('a', { className: styles.textLink, href: 'mailto:hello@eathen.net' }, 'hello@eathen.net')
              ),
              React.createElement(
                'div',
                { className: styles.contactMini },
                React.createElement('div', { className: styles.contactMiniLabel }, 'Response time'),
                React.createElement('div', { className: styles.contactMiniValue }, 'Usually within 24 hours')
              )
            ),

            // FORM
            React.createElement(
              'form',
              {
                className: styles.formCard,
                onSubmit: async (e) => {
                  e.preventDefault()
                  if (sending) return

                  setSending(true)
                  setStatus({ type: '', message: '' })

                  const form = e.currentTarget
                  const payload = {
                    name: form.name.value,
                    email: form.email.value,
                    message: form.message.value,
                    company: form.company ? form.company.value : '',
                  }

                  try {
                    const r = await fetch('/api/lead', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(payload),
                    })

                    const data = await r.json().catch(() => ({}))

                    if (!r.ok) {
                      setStatus({ type: 'error', message: data.error || 'Failed to send. Try again.' })
                    } else {
                      setStatus({ type: 'success', message: 'Sent! I’ll get back to you shortly.' })
                      form.reset()
                    }
                  } catch {
                    setStatus({ type: 'error', message: 'Network error. Please try again.' })
                  } finally {
                    setSending(false)
                  }
                },
              },

              // hidden honeypot field (bots fill this, humans won’t)
              React.createElement('input', {
                type: 'text',
                name: 'company',
                tabIndex: -1,
                autoComplete: 'off',
                style: { display: 'none' },
              }),

              React.createElement(
                'div',
                { className: styles.formRow },
                React.createElement(
                  'div',
                  { className: styles.field },
                  React.createElement('label', { className: styles.label, htmlFor: 'name' }, 'Name'),
                  React.createElement('input', {
                    className: styles.input,
                    id: 'name',
                    name: 'name',
                    placeholder: 'Your name',
                    required: true,
                  })
                ),
                React.createElement(
                  'div',
                  { className: styles.field },
                  React.createElement('label', { className: styles.label, htmlFor: 'email' }, 'Email'),
                  React.createElement('input', {
                    className: styles.input,
                    id: 'email',
                    type: 'email',
                    name: 'email',
                    placeholder: 'you@example.com',
                    required: true,
                  })
                )
              ),
              React.createElement(
                'div',
                { className: styles.field },
                React.createElement('label', { className: styles.label, htmlFor: 'message' }, 'What do you need?'),
                React.createElement('textarea', {
                  className: styles.textarea,
                  id: 'message',
                  name: 'message',
                  placeholder: 'Tell us about your business and what you want the site to do…',
                  rows: 6,
                  required: true,
                })
              ),
              React.createElement(
                'div',
                { className: styles.formActions },
                React.createElement(
                  'button',
                  { className: styles.primaryButton, type: 'submit', disabled: sending },
                  sending ? 'Sending…' : 'Send Message'
                ),
                React.createElement(
                  'div',
                  { className: styles.formHint },
                  'Tip: if you already have a website, paste the link in the message.'
                )
              ),

              status.message
                ? React.createElement(
                    'div',
                    {
                      className: status.type === 'success' ? styles.formSuccess : styles.formError,
                      role: 'status',
                    },
                    status.message
                  )
                : null
            )
          )
        )
      )
    ),

    React.createElement(Footer, null)
  )
}
