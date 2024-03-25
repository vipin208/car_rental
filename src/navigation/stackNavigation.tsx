
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BottomNavigation from './bottomTabNavigation';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
    </Stack.Navigator>
  )
}

export default StackNavigation