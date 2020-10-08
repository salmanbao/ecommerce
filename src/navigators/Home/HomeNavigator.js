import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesNavigator from '../Categories/CategoriesNavigator'
import HomeContainer from '../../containers/Home/Home'

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator headerMode='none' initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={HomeContainer}
      options={null}
    />
    <Stack.Screen
      name="categories"
      component={CategoriesNavigator}
      options={null}
    />
  </Stack.Navigator>
);

export default HomeNavigator;
 