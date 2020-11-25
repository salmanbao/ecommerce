import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesNavigator from '../Categories/CategoriesNavigator'
import HomeContainer from '../../containers/Home/Home'
import Products from './../../containers/Products/ProductScreen';
import ProductDetailsContainer from './../../containers/Products/ProductDetails';


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
      name="product_details"
      component={ProductDetailsContainer}
      options={null}
    />
    <Stack.Screen
      name="productsByCategories"
      component={Products}
      options={null}
    />
  </Stack.Navigator>
);

export default HomeNavigator;
  