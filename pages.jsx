import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './components/auth';
const Pages = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator >
                <Stack.Screen name="Login" component={Login} options={{ headerShown:false }}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Pages

