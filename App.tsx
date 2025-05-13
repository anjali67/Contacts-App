import React from 'react'
import Navigation from './src/navigation'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <Provider store={store}>
       <Navigation/>
    </Provider>
  )
}