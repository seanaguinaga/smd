import * as Linking from "expo-linking";
import { NavigationContainer, LinkingOptions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenOne from "app/screens/ScreenOne";
import ScreenTwo from "app/screens/ScreenTwo";
import { SafeAreaView } from 'dripsy'

interface RootParmList {
  ScreenOne: undefined;
  ScreenTwo: undefined;
}
const prefix = Linking.createURL("/");
const linking: LinkingOptions<RootParmList> = {
  prefixes: [prefix],
  config: {
    screens: {
      ScreenOne: "/screen-one",
      ScreenTwo: "/screen-two",
    },
  },
};

const Stack = createNativeStackNavigator();
export default function RootNavigation() {
  return (
    <SafeAreaView
      style={{ flex: 1 }}
    >
      <NavigationContainer linking={linking}>
        <Stack.Navigator initialRouteName="ScreenOne" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="ScreenOne" component={ScreenOne} />
          <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
