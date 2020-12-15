import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthContainer from '../../containers/Auth/AuthContainer';
import RegisterComponent from '../../containers/Auth/RegisterComponent';
import LoginComponent from '../../containers/Auth/LoginComponent';

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator headerMode='none' initialRouteName="auth">
            <Stack.Screen
                name="auth"
                component={AuthContainer}
                options={null}
            />
            <Stack.Screen
                name="register"
                component={RegisterComponent}
                options={null}
            />
            <Stack.Screen
                name="login"
                component={LoginComponent}
                options={null}
            />

        </Stack.Navigator>
    );
}

export default AuthNavigator;