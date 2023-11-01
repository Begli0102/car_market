import { Typography, Stack, Alert } from '@mui/material'
import { Suspense } from 'react'
import CarCard from './components/CarCard'
import ShowMore from './components/ShowMore'
import { HomeProps } from './interface'
import Loading from './loading'
import styles from './page.module.css'
import { fetchCars } from './utils'

export default async function Home ({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    model: searchParams.model || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10
  })

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

  return (
    <main className={styles.main}>
      {!isDataEmpty ? (
        <div className={styles.result__container}>
          {allCars.map(car => (
            <Suspense fallback={<Loading />}>
              <CarCard car={car} />
            </Suspense>
          ))}
        </div>
      ) : (
        <div className={styles.error__container}>
          <Stack sx={{ minWidth: '300px' }}>
            <Alert
              variant='filled'
              severity='warning'
              sx={{ alignItems: 'center' }}
            >
              <Typography variant='body2' gutterBottom>
                Oops, no results
              </Typography>
            </Alert>
          </Stack>
        </div>
      )}
      <ShowMore
        pageNumber={(searchParams.limit || 10) / 10}
        isNext={(searchParams.limit || 10) > allCars.length}
      />
    </main>
  )
}
