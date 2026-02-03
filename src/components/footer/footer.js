import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.column}>
            <Link href="/home" className={styles.logoLink}>
              <img
                src="/E.png"
                alt="Eathen logo"
                className={styles.logoImage}
              />
            </Link>
            <p className={styles.tagline}>
              Building digital experiences that drive growth.
            </p>
          </div>

          {/* Company */}
          <div className={styles.column}>
            <h4>Company</h4>
            <Link href="/about">About</Link>
            <Link href="/home#services">Services</Link>
            <Link href="/home#contact">Contact</Link>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h4>Services</h4>
            <span>Web Design</span>
            <span>Development</span>
            <span>SEO</span>
          </div>

          {/* Connect */}
          <div className={styles.column}>
            <h4>Connect</h4>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Eathen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
