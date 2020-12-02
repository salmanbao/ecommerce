import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesContainer from './../../containers/Categories/Categories';
import ProductsNavigator from '../Products/ProductsNavigator'

const Stack = createStackNavigator();

const CategoriesNavigator = () => {
  return (
    <Stack.Navigator headerMode='none' initialRouteName="popularCategories">
      <Stack.Screen
        name="popularCategories"
        component={CategoriesContainer}
        options={null}
      />
    </Stack.Navigator>
  );
}

export default CategoriesNavigator;