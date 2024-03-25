import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/home';
import Saved from '../screens/saved/saved';
import Map from '../screens/map/map';
import Setting from '../screens/setting/setting';
import { HomeSvg, MapSvg, SavedSvg, SettingSvg } from '../assests';

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: 'black',
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
        position:'absolute',
        // bottom:20,
        padding:10,
        
      }
    }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ focused }) => {
          return (
            <>
           <HomeSvg height={23} width={23} fill={'white'} stroke={'white'}/>
           </>
          )
        }
      }} />
      <Tab.Screen name="Saved" component={Saved} options={{
        tabBarIcon: ({ focused }) => {
          return (
            <>
           <SavedSvg height={25} width={25} fill={'white'} stroke={'white'}/>
           </>
          )
        }
      }} />
      <Tab.Screen name="Map" component={Map} options={{
        tabBarIcon: ({ focused }) => {
          return (
            <>
           <MapSvg height={25} width={25} fill={'white'} stroke={'white'}/>
           </>
          )
        }
      }}/>
      <Tab.Screen name="Setting" component={Setting}options={{
        tabBarIcon: ({ focused }) => {
          return (
            <>
           <SettingSvg height={25} width={25} fill={'white'} stroke={'white'}/>
           </>
          )
        }
      }} />
    </Tab.Navigator>
  );
}

export default BottomNavigation 