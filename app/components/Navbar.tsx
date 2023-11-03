'use client'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../page.module.css'
import { Chip } from '@mui/material'

const Navbar = () => (
  <header className={styles.navbar__container}>
    <nav className={styles.navbar}>
      <Link href='/' className={styles.navbar_link}>
        <Image
          src='/4ydEzuq5aFVUjXdvHLripG-7eb7ed609239464291ac4b2f1dac2927-autoscout24redesign23-1100.png'
          alt='logo'
          width={118}
          height={40}
          className={styles.logo_for_navbar}
          style={{ objectFit: 'contain' }}
        />
      </Link>
      <div className={styles.navbar__chip}>
        <Chip label='Sign up' variant='outlined' sx={{ color: '#ffff' }} />
      </div>
    </nav>
  </header>
)

export default Navbar
