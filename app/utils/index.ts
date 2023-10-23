import { CarProps, FilterProps } from '../interface'

//** Fetching cars from an API*/
export const fetchCars = async (filters: FilterProps) => {
  const { manufacturer, model } = filters
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}`
  const headers = {
    'X-RapidAPI-Key': '985b125733msh533c515e3e69582p1cce0ajsn6afc34aec995',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
  const response = await fetch(url, { headers: headers })
  const data = await response.json()
  return data
}

//**Calculating the rent for one day */
export const calculateCarRentalCost = (city_mpg: number, year: number) => {
  // Calculate the base cost of the rental
  const basePricePerDay = 50 // Base rental price per day in dollars
  const mileageFactor = 0.1 // Additional rate per mile driven
  const ageFactor = 0.05 // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor
  const ageRate = (new Date().getFullYear() - year) * ageFactor

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

  return rentalRatePerDay.toFixed(0)
}

//** Generating an angle of images in modal dialog */
export const generateImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage')
  const { make, model, year } = car

  url.searchParams.append('customer', 'hrjavascript-mastery' || '')
  url.searchParams.append('make', make)
  url.searchParams.append('modelFamily', model.split(' ')[0])
  url.searchParams.append('zoomType', 'fullscreen')
  url.searchParams.append('modelYear', `${year}`)
  url.searchParams.append('angle', `${angle}`)

  return `${url}`
}
