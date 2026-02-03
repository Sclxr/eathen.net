import Link from 'next/link'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/home" className={styles.logo}>
          <img
            src="/E.png"
            alt="Eathen logo"
            className={styles.logoImage}
          />
        </Link>

        {/* Nav */}
        <nav className={styles.nav}>
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/home#contact">Contact</Link>
        </nav>

        {/* CTA */}
        <Link href="/home#contact" className={styles.ctaButton}>
          Get Started
        </Link>
      </div>
    </header>
  )
}
