import { FormControl, TextField } from '@mui/material'
import React from 'react'

const CustomFilter = () => {
  return (
    <FormControl fullWidth defaultValue='' required>
      <TextField id='outlined-basic' label='Outlined' variant='outlined' />
    </FormControl>
  )
}

export default CustomFilter
