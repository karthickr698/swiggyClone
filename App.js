import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

import {Restaurant} from './screens'
import Tabs from './navigation/Tabs'

const Stack=createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          {
            headerShown:false
          }
        }
        initialRouteName={'Home'}
      >
        <Stack.Screen name='Home' component={Tabs} />
        <Stack.Screen name='Restaurant' component={Restaurant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}