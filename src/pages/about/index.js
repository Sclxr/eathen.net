import Link from "next/link";
import Header from "../../components/header/header"; // adjust path if needed
import styles from "./about.module.css";

export default function About() {
  return (
    <main className={styles.main}>
      <Header />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.badge}>About Me</span>

              <h1 className={styles.title}>
                I’m Eathen — I build clean, modern websites for small businesses.
              </h1>

              <p className={styles.subtitle}>
                Most small business websites look dated, load slow, and don’t
                guide people to actually reach out. I focus on websites that
                look legit, feel premium, and turn visitors into customers.
              </p>

              <div className={styles.ctaRow}>
                <Link href="/contact" className={styles.primaryButton}>
                  Work With Me
                </Link>
                <Link href="/services" className={styles.secondaryButton}>
                  What I Offer
                </Link>
              </div>

              <div className={styles.quickFacts}>
                <div className={styles.fact}>
                  <span className={styles.factDot} />
                  Fast load times
                </div>
                <div className={styles.fact}>
                  <span className={styles.factDot} />
                  Mobile-first layouts
                </div>
                <div className={styles.fact}>
                  <span className={styles.factDot} />
                  SEO-ready structure
                </div>
              </div>
            </div>

            {/* Right side card */}
            <div className={styles.profileCard}>
              <div className={styles.profileTop}>
                <div className={styles.avatarWrap}>
                  <div className={styles.avatarRing} />
                  <div className={styles.avatar}>
                    {/* Optional: swap this for a real photo later */}
                    <span>E</span>
                  </div>
                </div>

                <div className={styles.profileMeta}>
                  <div className={styles.profileName}>Eathen</div>
                  <div className={styles.profileRole}>
                    Web Developer • Orlando, FL
                  </div>
                </div>
              </div>

              <div className={styles.profileBody}>
                <div className={styles.profileLine} />
                <div className={styles.profileLineSm} />

                <div className={styles.skillGrid}>
                  <div className={styles.skillPill}>Next.js</div>
                  <div className={styles.skillPill}>SEO</div>
                  <div className={styles.skillPill}>UI/UX</div>
                  <div className={styles.skillPill}>Responsive</div>
                  <div className={styles.skillPill}>Performance</div>
                  <div className={styles.skillPill}>Conversion</div>
                </div>

                <div className={styles.profileCta}>
                  <Link href="/contact" className={styles.cardButton}>
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>My approach</h2>
            <p className={styles.sectionSubtitle}>
              No fluff — just a clear site that builds trust and drives action.
            </p>
          </div>

          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>Design that builds trust</h3>
              <p>
                Your website is usually the first impression. I make sure it
                feels modern and credible so customers don’t bounce.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Simple structure that converts</h3>
              <p>
                Clear headline, clean sections, and a strong call-to-action so
                visitors know exactly what to do.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Built for mobile and speed</h3>
              <p>
                Most of your traffic is mobile. I optimize layout + performance
                so it loads fast and feels smooth.
              </p>
            </div>

            <div className={styles.card}>
              <h3>SEO-ready foundation</h3>
              <p>
                Clean headings, structured content, and a layout Google can
                understand — without overcomplicating it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PERSONAL */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.split}>
            <div>
              <h2 className={styles.sectionTitleLeft}>A little more personal</h2>
              <p className={styles.text}>
                I’m a developer who’s been building projects for a while, and I
                got into websites because I like making things that actually
                help people. Small businesses don’t need a huge “agency”
                experience — they need something clean that works.
              </p>
              <p className={styles.text}>
                If you want a site that looks high-end, loads fast, and makes it
                easy for customers to reach you, that’s exactly what I build.
              </p>
            </div>

            <div className={styles.miniGrid}>
              <div className={styles.miniCard}>
                <div className={styles.miniTitle}>What I care about</div>
                <div className={styles.miniText}>
                  Clean design, speed, and making the next step obvious.
                </div>
              </div>

              <div className={styles.miniCard}>
                <div className={styles.miniTitle}>What you get</div>
                <div className={styles.miniText}>
                  A website that feels premium and helps you get more leads.
                </div>
              </div>

              <div className={styles.miniCard}>
                <div className={styles.miniTitle}>Good fit for</div>
                <div className={styles.miniText}>
                  Detailing, barbers, realtors, restaurants, services, local
                  brands.
                </div>
              </div>

              <div className={styles.miniCard}>
                <div className={styles.miniTitle}>Not a good fit</div>
                <div className={styles.miniText}>
                  People who want a “cheap quick site” with no plan.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaStrip}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2>Want me to build yours?</h2>
            <p>
              Send what business you run + what you want customers to do (call,
              book, request a quote). I’ll recommend the right layout.
            </p>

            <div className={styles.ctaRowCenter}>
              <Link href="/contact" className={styles.ctaButton}>
                Get Started
              </Link>
              <Link href="/home" className={styles.textLink}>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
