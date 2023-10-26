'use client'
import { Autocomplete, FormControl, TextField, Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { manufacturers } from '../consonants/index'

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState<string>('')
  const [model, setModel] = useState<string>('')

  const router = useRouter()

  const handleSearch = (e: any) => {
    e.preventDefault()
    if (manufacturer === '' || model === '') {
      return alert('Please fill the blank')
    }
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
  }

  const updateSearchParams = (model: string, manufacturer: string) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search)
    if (model) {
      searchParams.set('model', model)
    } else {
      searchParams.delete('model')
    }
    if (manufacturer) {
      searchParams.set('manufacturer', manufacturer)
    } else {
      searchParams.delete('manufacturer')
    }
    // Generate the new pathname with the updated search parameters
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathname)
  }
  return (
    <>
      <FormControl fullWidth required>
        <Grid justifyContent='center' container spacing={1}>
          <Grid item xs={12} md={6}>
            <Autocomplete
              disablePortal
              id='combo-box-demo'
              options={manufacturers}
              renderInput={params => (
                <TextField {...params} label='Manufacturer' size='small' />
              )}
              value={manufacturer}
              onInputChange={(event: any, newValue: string) => {
                setManufacturer(newValue)
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label='Model'
              value={model}
              onChange={(event: any) => setModel(event.target.value)}
              size='small'
            />
            <SearchIcon onClick={handleSearch} />
          </Grid>
        </Grid>
      </FormControl>
    </>
  )
}

export default SearchBar
