import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Providers from './Providers'
import Navbar from '@/components/Navbar'
import SearchBar from '@/components/SearchBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My-idmb',
  description: 'this is my idmb clone made by abdelrahmansaad027',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Providers>
          <Header />
          <Navbar />
          <SearchBar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
