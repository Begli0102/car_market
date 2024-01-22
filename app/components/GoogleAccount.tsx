import React from 'react'
import Image from 'next/image'
import { Button, Paper, Box, Typography } from '@mui/material'
import GoogleLogo from '../../public/google-logo.png'
import styles from '../page.module.css'

const GoogleAccount = () => {
  return (
    <main className={styles.google_account}>
      <Box style={{ padding: '5px', margin: '10px auto' }}>
        <Button
          variant='contained'
          style={{
            backgroundColor: '#fff',
            color: '#757575',
            boxShadow: '0 3px 4px 0 rgba(0,0,0,.25)',
            gap: '10px',
            width: '100%'
          }}
        >
          <Image
            src={GoogleLogo}
            alt='logo'
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
            priority
          ></Image>
          <Typography variant='body2'>Sign in with Google</Typography>
        </Button>
      </Box>
    </main>
  )
}

export default GoogleAccount
