import { DripsyProvider } from 'dripsy'

import Navigation from 'mobile/navigation'
import theme from 'ui/dripsyTheme'

const App: React.FC = () => {
  return (
    <DripsyProvider theme={theme}>
      <Navigation />
    </DripsyProvider>
  )
}

export default App
