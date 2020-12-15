import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Products from './../../containers/Products/ProductScreen';
import ProductDetailsContainer from './../../containers/Products/ProductDetails';
import CartContainer from "../../containers/Cart/Cart";
import ProductConfirmation from '../../containers/Cart/ProductConfirmation';
import OrderConfirmation from '../../containers/Order/OrderContainer';
import AddShippingAddress from "../../containers/Order/AddShippingAddress";

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
            <Stack.Screen
                name="cart_products"
                component={CartContainer}
                options={null}
            />

            <Stack.Screen
                name="confirm_cart_product"
                component={ProductConfirmation}
                options={null}
            />

            <Stack.Screen
                name="confirm_order"
                component={OrderConfirmation}
                options={null}
            />

            <Stack.Screen
                name="add_shipping_address"
                component={AddShippingAddress}
                options={null}
            />

        </Stack.Navigator>
    );
}

export default ProductsNavigator;