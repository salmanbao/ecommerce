import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesContainer from './../../containers/Categories/Categories';
import CategoriesScreen from './../../containers/Categories/CategoriesScreen';
import ProductDetailsContainer from './../../containers/Products/ProductDetails';

const Stack = createStackNavigator();

const CategoriesNavigator = () => (
  <Stack.Navigator headerMode='none' initialRouteName="popularCategories">
    <Stack.Screen
      name="popularCategories"
      component={CategoriesContainer}
      options={null}
    />
    <Stack.Screen
      name="categories"
      component={CategoriesScreen}
      options={null}
    />
    <Stack.Screen
      name="product_details"
      component={ProductDetailsContainer}
      options={null}
    />
  </Stack.Navigator>
);

export default CategoriesNavigator;
 