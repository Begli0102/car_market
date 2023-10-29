import React from 'react'

import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  IconButton
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
        <DialogTitle
          id='customized-dialog-title'
          sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <Image
            height='100'
            width='150'
            src={generateImageUrl(car)}
            alt='car model'
            objectFit='contain'
          />
          <Typography gutterBottom>{car.make.toUpperCase()} </Typography>
          <Typography gutterBottom> {car.model}</Typography>
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
            <div className={styles.image__container__item}>
              <Image
                src={generateImageUrl(car, '19')}
                alt='car model'
                width='140'
                height='100'
                priority
                className={styles.image}
              />
            </div>
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
