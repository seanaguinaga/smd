import 'raf/polyfill'
import type { AppProps } from 'next/app'
import { DripsyProvider } from 'dripsy'

import theme from '@/app/dripsyTheme'

const App: React.FC = ({ Component, pageProps }: AppProps) => {
  return (
    <DripsyProvider theme={theme} ssr>
      <Component {...pageProps} />
    </DripsyProvider>
  )
}

export default App
