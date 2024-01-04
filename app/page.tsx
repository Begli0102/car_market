import { Typography, Stack, Alert } from '@mui/material'
import { Suspense } from 'react'
import CarCard from './components/CarCard'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
// import ShowPagination from './components/Pagination'
import ShowLess from './components/ShowLess'
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
      {/* {allCars.length > 10 && (
        <ShowPagination limit={10} allCars={allCars.length} />
      )} */}
      <Header />
      <SearchBar />
      {!isDataEmpty ? (
        <div className={styles.result__container}>
          {allCars.map(car => (
            <Suspense fallback={<Loading />}>
              <CarCard car={car} />
            </Suspense>
          ))}
          <div className={styles.more_less_buttons}>
            {allCars.length >= 10 && (
              <ShowMore pageNumber={(searchParams.limit || 10) / 10} />
            )}
            {Number(searchParams?.limit) > 10 && allCars.length > 10 && (
              <ShowLess pageNumber={(searchParams.limit || 10) / 10} />
            )}
          </div>
        </div>
      ) : (
        <div className={styles.error__container}>
          <Stack sx={{ minWidth: '280px', minHeight: '100vh' }}>
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
    </main>
  )
}
