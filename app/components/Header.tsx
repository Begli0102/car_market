'use client'
import Image from 'next/image'
import styles from '../page.module.css'
import { Button } from '@/stories/Button'
import { Typography, Grid } from '@mui/material'
import headerImage from '../../public/hero.png'

const Headers = () => {
  const handleScroll = () => {}

  return (
    <div className={styles.header}>
      <Grid className={styles.header__item} container spacing={2}>
        <Grid item xs={12} md={8}>
          <div className={styles.header__left}>
            <Typography
              variant='h4'
              gutterBottom
              className={styles.header__title}
            >
              Find, book, rent a car—quick and super easy!
            </Typography>
            <Typography
              variant='h5'
              gutterBottom
              className={styles.header__subtitle}
            >
              Streamline your car rental experience with our effortless booking
              process.
            </Typography>
            <Button
              primary
              size='small'
              title='Explore Cars'
              onClick={handleScroll}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={styles.image__container}>
            {/* <div > */}
            <Image
              src={headerImage}
              layout='fill'
              alt='image'
              className={styles.image}
              // width={500}
              // height={400}
              style={{ objectFit: 'contain' }}
            />
            {/* </div> */}
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Headers
