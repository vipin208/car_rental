import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './src/navigation/stackNavigation'
import { Provider } from 'react-redux'
import { store } from './src/redux/store/store'
const App = () => {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  )
}

export default App