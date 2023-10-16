'use client'
import { Autocomplete, FormControl, TextField, Grid } from '@mui/material'
import React, { useState } from 'react'
import styles from '../page.module.css'
import { manufacturers } from '../consonants/index'
import Image from 'next/image'

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState<string | null>('')
  const [inputValue, setInputValue] = useState<string>('')
  const [model, setModel] = useState<string>('')

  // const handleChange = (event: any) => {
  //   const newValue = event.target.value
  //   setInputValue(newValue)
  // }

  return (
    <>
      <FormControl fullWidth defaultValue='' required>
        <Grid justifyContent='center' container spacing={1}>
          <Grid item xs={12} md={6}>
            <Autocomplete
              disablePortal
              id='combo-box-demo'
              options={manufacturers}
              sx={{ maxWidth: 250 }}
              renderInput={params => (
                <TextField {...params} label='Manufacturer' />
              )}
              value={manufacturer}
              onChange={(event: any, newValue: string | null) => {
                setManufacturer(newValue)
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue)
              }}
            />
            <Image
              src={'/magnifying-glass.svg'}
              alt={'magnifying glass'}
              width={40}
              height={40}
              className='object-contain'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Autocomplete
              disablePortal
              id='combo-box-demo'
              options={manufacturers}
              // sx={{ maxWidth: 250 }}
              renderInput={params => (
                <TextField {...params} label='Manufacturer' />
              )}
              value={manufacturer}
              onChange={(event: any, newValue: string | null) => {
                setManufacturer(newValue)
              }}
              inputValue={model}
              onInputChange={(event, newInputValue) => {
                setModel(newInputValue)
              }}
            />
            <Image
              src={'/magnifying-glass.svg'}
              alt={'magnifying glass'}
              width={40}
              height={40}
              className='object-contain'
            />
          </Grid>
        </Grid>
      </FormControl>
    </>
  )
}

export default SearchBar
