import * as Linking from 'expo-linking'
import { LinkingOptions, NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'dripsy'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import About from 'ui/screens/About'
import Home from 'ui/screens/Home'

interface RootParmList {
  Home: undefined
  About: undefined
}
const prefix = Linking.createURL('/')
const linking: LinkingOptions<RootParmList> = {
  prefixes: [prefix],
  config: {
    screens: {
      Home: '/home',
      About: '/about',
    },
  },
}

const Stack = createNativeStackNavigator()
const RootNavigation: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer linking={linking}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default RootNavigation
