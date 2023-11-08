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
import styles from '../page.module.css'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
// import { deleteSearchParams } from '../utils'

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState<string>('')
  const [model, setModel] = useState<string>('')

  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
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
    }
    if (manufacturer) {
      searchParams.set('manufacturer', manufacturer)
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

  const handleResetParams = () => {
    const searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('manufacturer')) {
      searchParams.delete('manufacturer')
    }
    if (searchParams.has('model')) {
      searchParams.delete('model')
    }
    if (searchParams.has('limit')) {
      searchParams.delete('limit')
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathname)
  }

  return (
    <div className={styles.search__container}>
      <Grid justifyContent='center' container spacing={1}>
        <Grid item xs={12} md={3}>
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
            >
              {manufacturers.map((manufacurer, index: number) => (
                <MenuItem key={index} value={manufacurer}>
                  {manufacurer}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={2}>
          <FormControl fullWidth required>
            <TextField
              label='Model'
              value={model}
              onChange={handleChangeModel}
              size='small'
            />
          </FormControl>
        </Grid>
        <Grid item xs={10} md={1}>
          <FormControl fullWidth required>
            <Button variant='contained' onClick={handleSearch}>
              Search
            </Button>
          </FormControl>
        </Grid>
        <Grid item xs={2} md={1}>
          <FormControl fullWidth required>
            <RestartAltIcon
              color='primary'
              sx={{ fontSize: '38px' }}
              onClick={handleResetParams}
            />
          </FormControl>
        </Grid>
      </Grid>
    </div>
  )
}

export default SearchBar
