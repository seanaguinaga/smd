import { activateKeepAwake } from 'expo-keep-awake'
import { registerRootComponent } from 'expo'

import App from 'mobile/App'

if (__DEV__) {
  activateKeepAwake()
}

registerRootComponent(App)
