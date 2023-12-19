'use client'
import React from 'react'
import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography
} from '@mui/material'
import styles from '../page.module.css'

const LoginPage = () => {
  const handleSubmit = () => {}
  return (
    <div className={styles.login__container}>
      <Grid container justifyContent='center'>
        <Grid item xs={10} sm={8} md={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant='h5' gutterBottom>
              Login
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField label='Email' variant='outlined' fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label='Password'
                    type='password'
                    variant='outlined'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant='contained'
                    color='primary'
                    type='submit'
                    fullWidth
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default LoginPage
