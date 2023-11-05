'use client'

import { Chip, Box } from '@mui/material'
import React from 'react'
import { ShowLessProps } from '../interface'
import { useRouter } from 'next/navigation'
import { updateSearchParams } from '../utils'
import styles from '../page.module.css'

const ShowLess = ({ pageNumber }: ShowLessProps) => {
  const router = useRouter()

  const handleShowLess = () => {
    const newLimit = pageNumber * 10 - 10
    const newPathName = updateSearchParams('limit', `${newLimit}`)
    router.push(newPathName)
  }

  return (
    <div className={styles.show__more__container}>
      <Box textAlign='center'>
        <Chip
          sx={{ minWidth: '180px' }}
          label='Show less'
          color='secondary'
          onClick={handleShowLess}
        />
      </Box>
    </div>
  )
}

export default ShowLess
