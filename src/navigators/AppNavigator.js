
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Transition from '../utils/Transitions';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
  ...Transition.transitionBetweenScreenPresets,
};

const AppNavigator = () => {
  const screenOptions = {
    headerShown: false
  };
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="BottomTab"
            component={BottomTabNavigator}
            options={screenOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );

}

export default AppNavigator