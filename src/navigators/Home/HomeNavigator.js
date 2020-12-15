import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesNavigator from '../Categories/CategoriesNavigator'
import ProductsNavigator from '../Products/ProductsNavigator'
import HomeContainer from '../../containers/Home/Home'
import AuthNavigator from '../Auth/AuthNavigator';

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator headerMode='none' initialRouteName="home">
    <Stack.Screen
      name="home"
      component={HomeContainer}
      options={null}
    />
    <Stack.Screen
      name="all_categories"
      component={CategoriesNavigator}
      options={null}
    />
    <Stack.Screen
      name="products"
      component={ProductsNavigator}
      options={null}
    />
    <Stack.Screen
      name="auth"
      component={AuthNavigator}
      options={null}
    />

  </Stack.Navigator>
);

export default HomeNavigator;
  