import './globals.css'
import { Metadata } from 'next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Poppins } from 'next/font/google'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import { AuthProvider } from './providers';

export const metadata: Metadata = {
  title: 'Car Market',
  description: 'The best cars are found here'
}

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
})

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Navbar />
        <Header />
        <SearchBar />
        <AuthProvider>{children}</AuthProvider>
        <Footer />
      </body>
    </html>
  )
}
