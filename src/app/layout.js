import './globals.css'
import { Inter, Roboto_Flex } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto_Flex({ subsets: ['latin'] })

export const metadata = {
  title: 'Lary Souza',
  description: 'Portfolio Profissional'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
