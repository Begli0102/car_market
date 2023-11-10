'use client'
import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const ShowPagination = ({ limit, allCars, setCars }: any) => {
  const [page, setPage] = useState(1)
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return (
    <Stack>
      <Pagination
        count={Math.ceil(allCars / limit)}
        page={page}
        onChange={handleChange}
        color='primary'
      />
    </Stack>
  )
}

export default ShowPagination
