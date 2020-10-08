
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import Transition from '../utils/Transitions';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
  ...Transition.transitionBetweenScreenPresets,
};

const AppNavigator = ()=>{
  const screenOptions = {
    headerShown: false
  };
  
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen
          name="BottomTab"
          component={BottomTabNavigator}
          options={screenOptions}
        />
    </Stack.Navigator>
    </NavigationContainer>
  );
  
}

export default AppNavigator