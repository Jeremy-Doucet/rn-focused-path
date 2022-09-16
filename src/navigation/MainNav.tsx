import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '@/screens/Home';
import { Register } from '@/screens/Register';
import { LoginScreen } from '@/screens/Login';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  HomeScreen: {};
  Register: {};
  Login: {};
};

export function MainNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
