import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Products from './../../containers/Products/ProductScreen';
import ProductDetailsContainer from './../../containers/Products/ProductDetails';

const Stack = createStackNavigator();

const ProductsNavigator = () => {
    return (
        <Stack.Navigator headerMode='none' initialRouteName="productsByCategories">
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

export default ProductsNavigator;