'use client'
import {
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  TextField,
  Grid,
  SelectChangeEvent,
  Button,
  Tooltip,
  Zoom
} from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { manufacturers } from '../consonants/index'
import styles from '../page.module.css'
import RestartAltIcon from '@mui/icons-material/RestartAlt'

interface IValues {
  manufacturer: string
  model: string
}

const SearchBar = () => {
  // const [manufacturer, setManufacturer] = useState<string>('')
  // const [model, setModel] = useState<string>('')

  const [values, setValues] = useState<IValues>({
    manufacturer: '',
    model: ''
  })

  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (values.manufacturer === '' || values.model === '') {
      return alert('Please fill the blank')
    }
    updateSearchParams(
      values.model.toLowerCase(),
      values.manufacturer.toLowerCase()
    )
  }

  const updateSearchParams = (model: string, manufacturer: string) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search)
    if (model) {
      searchParams.set('model', model)
    }
    if (values.manufacturer) {
      searchParams.set('manufacturer', values.manufacturer)
    }
    // Generate the new pathname with the updated search parameters
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathname)
  }

  // const handleChangeManufacturer = (event: SelectChangeEvent) => {
  //   setManufacturer(event.target.value as string)
  // }

  // const handleChangeModel = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setModel(event.target.value as string)
  // }
  const handleChangeValues = (e: any) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
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
        <Grid item xs={10} md={3}>
          <FormControl fullWidth>
            <InputLabel id='demo-controlled-open-select-label'>
              Manufacturer
            </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='manufacturer'
              value={values.manufacturer}
              name='manufacturer'
              label='Manufacturer'
              onChange={handleChangeValues}
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
        <Grid item xs={10} md={2}>
          <FormControl fullWidth required>
            <TextField
              label='Model'
              id='model'
              name='model'
              value={values.model}
              onChange={handleChangeValues}
              size='small'
            />
          </FormControl>
        </Grid>
        <Grid item xs={8} md={1}>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            onClick={handleSearch}
          >
            Search
          </Button>
        </Grid>
        <Grid item xs={2} md={1}>
          <Tooltip
            title='Reset'
            placement='bottom-end'
            TransitionComponent={Zoom}
            TransitionProps={{ timeout: 500 }}
          >
            <RestartAltIcon
              color='primary'
              sx={{ fontSize: '38px' }}
              onClick={handleResetParams}
            />
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  )
}

export default SearchBar
