import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DripsyProvider } from 'dripsy'
import { theme } from 'app/dripsyTheme'
import 'raf/polyfill'


function MyApp({ Component, pageProps }: AppProps) {
  return <DripsyProvider theme={theme} ssr>
    <Component {...pageProps} />
  </DripsyProvider>
}

export default MyApp
