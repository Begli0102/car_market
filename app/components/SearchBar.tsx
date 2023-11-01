'use client'
import {
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  TextField,
  Grid,
  SelectChangeEvent,
  Button
} from '@mui/material'
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
    setManufacturer('')
    setModel('')
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

  const handleChangeManufacturer = (event: SelectChangeEvent) => {
    setManufacturer(event.target.value as string)
  }

  const handleChangeModel = (event: React.ChangeEvent<HTMLInputElement>) => {
    setModel(event.target.value as string)
  }

  return (
    <>
      <Grid justifyContent='center' container spacing={1}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth required>
            <InputLabel id='demo-controlled-open-select-label'>
              Select a car
            </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={manufacturer}
              label='Select a car'
              onChange={handleChangeManufacturer}
              size='small'
              error={!manufacturer ? true : false}
            >
              {manufacturers.map((manufacurer, index: number) => (
                <MenuItem key={index} value={manufacurer}>
                  {manufacurer}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth required>
            <TextField
              label='Model'
              value={model}
              onChange={handleChangeModel}
              size='small'
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={2}>
          <FormControl fullWidth required>
            <Button variant='contained' onClick={handleSearch}>
              Search
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    </>
  )
}

export default SearchBar
