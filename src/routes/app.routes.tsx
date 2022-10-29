import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../pages/Home';
import { Register } from '../pages/Register';
import { Details } from '../pages/Details';

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator initialRouteName='Home'>
      <Screen
        options={{
          headerShown: false,
        }}
        name='Home'
        component={Home}
      />
      <Screen
        options={{
          headerShown: false,
        }}
        name='Register'
        component={Register}
      />
      <Screen
        options={{
          headerShown: false,
        }}
        name='Details'
        component={Details}
      />
    </Navigator>
  )
}