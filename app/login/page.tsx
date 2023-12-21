'use client'
import React from 'react'
import { Button, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import styles from '../page.module.css'

const LoginPage = () => {
  const handleSubmit = () => {}
  return (
    <div className={styles.login__container}>
      <Grid container justifyContent='center'>
        <Grid item xs={10} sm={8} md={6} lg={4}>
          <Paper elevation={3} style={{ padding: ' 30px' }}>
            <Typography variant='h5' gutterBottom>
              Sign in
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label='Email'
                    variant='outlined'
                    size='small'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label='Password'
                    type='password'
                    variant='outlined'
                    fullWidth
                    size='small'
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant='contained'
                    color='primary'
                    type='submit'
                    fullWidth
                  >
                    Sign in
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='body2' gutterBottom>
                    Don't have an account?
                    <Link style={{ textDecoration: 'none' }} href={'/signup'}>
                      <span
                        style={{ marginLeft: '5px', textDecoration: 'none' }}
                      >
                        Sign up
                      </span>
                    </Link>
                  </Typography>
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
