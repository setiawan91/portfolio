import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Inter } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider attribute='class'>
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  </ThemeProvider>
  )
}

export default MyApp