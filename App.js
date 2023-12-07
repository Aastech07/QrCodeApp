
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './Component/TabsNavigation';
import Details from './Component/Details';
import QrCodeScreen from './Component/QrCodeScreen';
import QrGenerate from './Component/QrGenerate';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="QrGenerate" component={QrGenerate} options={{ headerShown: true, headerTitleAlign: 'center' }} />
        <Stack.Screen name="QrCodeScreen" component={QrCodeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;