// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InitialScreen } from './pages/Initial';
import { LoginScreen } from './pages/Login';
import { SignupScreen } from './pages/Signup';
import { OrderScreen } from './pages/Order';
import { ViewOrderScreen } from './pages/ViewOrder';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Initial'>
        <Stack.Screen name="Initial" component={InitialScreen} />
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Signup" component={SignupScreen}/>
        <Stack.Screen name="Order" component={OrderScreen}/>
        <Stack.Screen name="ViewOrder" component={ViewOrderScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;