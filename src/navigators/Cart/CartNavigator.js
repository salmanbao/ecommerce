import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const CartNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="custom"
      options={null}
      component={null}
    />
    <Stack.Screen
      name="custom"
      options={null}
      component={null}
    />
  </Stack.Navigator>
);

export default CartNavigator;
