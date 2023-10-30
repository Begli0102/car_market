import React from 'react'

import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  IconButton,
  Grid,
  Divider
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Image from 'next/image'
import { CarProps } from '../interface'
import styles from '../page.module.css'
import { generateImageUrl } from '../utils'

interface ICars {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  car: CarProps
}

const CardDetails = ({ isOpen, setIsOpen, car }: ICars) => {
  const handleCloseDialog = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleCloseDialog}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='customized-dialog-title'>
          <Grid
            container
            spacing={3}
            justifyContent='center'
            alignItems='center'

            // sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Grid item xs={12} md={3}>
              <Image
                height='90'
                width='140'
                src={generateImageUrl(car)}
                alt='car model'
                style={{ objectFit: 'contain' }}
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <Typography mt={1} variant='body2'>
                {car.make.toUpperCase()} {car.model}
              </Typography>
            </Grid>
          </Grid>
        </DialogTitle>
        <IconButton
          aria-label='close'
          onClick={handleCloseDialog}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div className={styles.image__container}>
            <div className={styles.image__container__item}>
              <Image
                src={generateImageUrl(car, '29')}
                alt='car model'
                width='140'
                height='100'
                priority
                className={styles.image}
              />
            </div>
            <Divider orientation='vertical' flexItem></Divider>
            <div className={styles.image__container__item}>
              <Image
                src={generateImageUrl(car, '23')}
                alt='car model'
                width='140'
                height='100'
                priority
                className={styles.image}
              />
            </div>
            <Divider orientation='vertical' flexItem></Divider>
            <div className={styles.image__container__item}>
              <Image
                src={generateImageUrl(car, '13')}
                alt='car model'
                width='140'
                height='100'
                priority
                className={styles.image}
              />
            </div>
          </div>
        </DialogContent>
        <DialogContent dividers>
          {Object.entries(car).map(([key, value]) => (
            <div className={styles.card__entries} key={key}>
              <Typography gutterBottom>{key.split('_').join(' ')}</Typography>
              <Typography gutterBottom>{value}</Typography>
            </div>
          ))}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CardDetails
