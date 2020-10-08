import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesContainer from './../../containers/Categories/Categories';
import Products from './../../containers/Products/Products';
const Stack = createStackNavigator();

const CategoriesNavigator = () => (
  <Stack.Navigator headerMode='none' initialRouteName="popularCategories">
    <Stack.Screen
      name="popularCategories"
      component={CategoriesContainer}
      options={null}
    />
    <Stack.Screen
      name="products"
      component={Products}
      options={null}
    />
  </Stack.Navigator>
);

export default CategoriesNavigator;
 