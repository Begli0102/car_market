import React from 'react'
import Image from 'next/image'
import styles from '../page.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer__container}>
      <div>
        <div>
          <Image src='/logo.svg' alt='logo' width={118} height={18} />
          <p>
            Car hub 2023
            <br />
            All rights reserved &copy
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
