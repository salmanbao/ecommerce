import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesContainer from './../../containers/Categories/Categories';
import Products from './../../containers/Products/ProductScreen';
import ProductDetailsContainer from './../../containers/Products/ProductDetails';

const Stack = createStackNavigator();

const CategoriesNavigator = () => {
  return (
    <Stack.Navigator headerMode='none' initialRouteName="popularCategories">
      <Stack.Screen
        name="popularCategories"
        component={CategoriesContainer}
        options={null}
      />
      <Stack.Screen
        name="productsByCategories"
        component={Products}
        options={null}
      />
      <Stack.Screen
        name="product_details"
        component={ProductDetailsContainer}
        options={null}
      />
    </Stack.Navigator>
  );
}

export default CategoriesNavigator;
