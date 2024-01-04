'use client'
import React, { useState } from 'react'
import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Alert
} from '@mui/material'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'

const SignupPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!name || !email || !password) {
      alert('Please fill the blank')
    }

    try {
      const userExist = await fetch('/api/userExist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email
        })
      })

      const { user } = await userExist.json()

      if (user) {
        setError('This email exist')
        return
      }

      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      })
      if (response.ok) {
        const form = event.target as HTMLFormElement
        form.reset()
        router.push('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className={styles.signup__container}>
      <Grid container justifyContent='center'>
        <Grid item xs={10} sm={8} md={6} lg={4}>
          <Paper elevation={3} style={{ padding: ' 30px' }}>
            <Typography variant='h5' gutterBottom>
              Sign up
            </Typography>
            {error && (
              <Alert severity='error' sx={{ marginBottom: '10px' }}>
                {error}
              </Alert>
            )}
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label='Full name'
                    variant='outlined'
                    size='small'
                    fullWidth
                    onChange={e => setName(e.target.value)}
                    error={Boolean(error)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label='Email'
                    variant='outlined'
                    size='small'
                    fullWidth
                    onChange={e => setEmail(e.target.value)}
                    error={Boolean(error)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label='Password'
                    type='password'
                    variant='outlined'
                    fullWidth
                    size='small'
                    onChange={e => setPassword(e.target.value)}
                    error={Boolean(error)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant='contained'
                    color='primary'
                    type='submit'
                    fullWidth
                  >
                    Sign up
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

export default SignupPage
