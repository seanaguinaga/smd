import { DripsyProvider } from 'dripsy'

import { theme } from 'app/dripsyTheme'

import Navigation from "./navigation";

export default function App() {
  return (
    <DripsyProvider theme={theme}>
      <Navigation />
    </DripsyProvider>
  )
}
