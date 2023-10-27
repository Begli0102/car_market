import { Grid, Typography } from '@mui/material'
import CarCard from './components/CarCard'
import CustomFilter from './components/CustomFilter'
import Headers from './components/Header'
import SearchBar from './components/SearchBar'
import ShowMore from './components/ShowMore'
import { HomeProps } from './interface'
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
      <Headers />
      <div className={styles.search__container}>
        <Grid justifyContent='center' container spacing={3}>
          <Grid item xs={12} md={8}>
            <SearchBar />
          </Grid>
          <Grid item xs={12} md={4}>
            <CustomFilter />
          </Grid>
        </Grid>
      </div>
      {!isDataEmpty ? (
        <div className={styles.result__container}>
          {allCars.map(car => (
            <CarCard car={car} />
          ))}
        </div>
      ) : (
        <div className={styles.error__container}>
          <Typography variant='body1'>Oops, no results</Typography>
        </div>
      )}
      <ShowMore
        pageNumber={(searchParams.limit || 10) / 10}
        isNext={(searchParams.limit || 10) > allCars.length}
      />
    </main>
  )
}
