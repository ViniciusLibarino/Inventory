import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';
import { SelectProvider } from './src/hooks/select';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" animated />
      <SelectProvider>
        <AppRoutes />
      </SelectProvider>
    </NavigationContainer>
  );
}
