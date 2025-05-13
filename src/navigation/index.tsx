import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screen/SplashScreen';
import BottomTab from './bottomTab';

const Stack = createNativeStackNavigator();

export default function  RootStack() {
  return (
    <NavigationContainer>
     <Stack.Navigator  screenOptions={{headerShown:false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
    </NavigationContainer>
   
  );
}

