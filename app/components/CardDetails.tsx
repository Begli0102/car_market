import React from 'react'

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
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
        fullWidth
      >
        <DialogTitle
          id='customized-dialog-title'
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Image
            height='100'
            width='150'
            src={generateImageUrl(car)}
            alt='car model'
            objectFit='contain'
          />
          <Typography gutterBottom>{car.make.toUpperCase()} </Typography>&nbsp;
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
          <div className={styles.card__images}>
            <Image
              height='100'
              width='150'
              src={generateImageUrl(car, '29')}
              alt='car model'
              objectFit='contain'
              priority
            />
            <Image
              height='100'
              width='150'
              src={generateImageUrl(car, '33')}
              alt='car model'
              priority
            />
            <Image
              height='100'
              width='150'
              src={generateImageUrl(car, '13')}
              alt='car model'
              priority
            />
          </div>
        </DialogContent>
        <DialogContent dividers>
          {Object.entries(car).map(([key, value]) => (
            <div className={styles.card__entries} key={key}>
              <Typography gutterBottom>{key.split('_').join(' ')}</Typography>
              <Typography gutterBottom textAlign='left'>
                {value}
              </Typography>
            </div>
          ))}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CardDetails
