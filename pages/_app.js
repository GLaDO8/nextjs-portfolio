import '@/styles/index.css'
import { ThemeProvider } from 'next-themes'
import PlausibleProvider from 'next-plausible'

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="shreyas.design">
      <ThemeProvider
        forcedTheme={Component.theme || undefined}
        attribute="class"
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </PlausibleProvider>
  )
}

export default MyApp
