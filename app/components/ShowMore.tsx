'use client'
import { Chip, Box } from '@mui/material'
import React from 'react'
import { ShowMoreProps } from '../interface'
import { useRouter } from 'next/navigation'
import { updateSearchParams } from '../utils'
import styles from '../page.module.css'

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter()

  const handleShowMore = () => {
    const newLimit = (pageNumber + 1) * 10
    const newPathName = updateSearchParams('limit', `${newLimit}`)
    router.push(newPathName)
  }
  return (
    <div className={styles.show__more__container}>
      <Box textAlign='center'>
        <Chip
          sx={{ minWidth: '280px' }}
          label='Show More'
          color='primary'
          onClick={handleShowMore}
          disabled={isNext}
        />
      </Box>
    </div>
  )
}

export default ShowMore
