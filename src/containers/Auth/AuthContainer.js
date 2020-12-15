import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    Dimensions,
    View
} from "react-native";
import * as Animatable from 'react-native-animatable';
import { Helpers } from '../../theme'
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import ProductActions from '../../stores/Products/Actions';

const LoginTitle = ({ route, navigation }) => {
    const dispatch = useDispatch()
    return (

        <View style={[Helpers.center]}>
            <Animatable.Text style={[styles.logo]} animation="fadeIn" iterationCount={1}>Salalah</Animatable.Text>
            <Animatable.Text style={[styles.logoBrand]} animation="fadeIn" >Bazaar</Animatable.Text>
            <View style={{ marginTop: '70%', width: '100%' }}>
                <Button
                    title="Register"
                    buttonStyle={{ width: Dimensions.get('screen').width - 20, marginVertical: 5, backgroundColor: '#ec524b' }}
                    onPress={() => {
                        navigation.navigate('register')
                    }}
                />
                <Button
                    title="Sign In"
                    type="outline"
                    titleStyle={{ color: '#ec524b' }}
                    buttonStyle={{ width: Dimensions.get('screen').width - 20, marginVertical: 5, backgroundColor: 'white', borderColor: '#ec524b' }}
                    onPress={() => {
                        dispatch(ProductActions.resetLoginResponse())
                        navigation.navigate('login', { product: route.params.product, next: route.params.next, type: route.params.type  }
                        )
                    }}
                />
            </View>
        </View>
    )
}

const AuthContainer = ({ route, navigation }) => {
    return (
        <SafeAreaView style={[Helpers.fillRowCenter, { backgroundColor: 'white' }]}>
            <View style={styles.centeredView}>
                <LoginTitle route={route} navigation={navigation} />
            </View>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    centeredView: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        fontSize: 36,
    },
    logoBrand: {
        color: '#dfac3d',
        fontSize: 22,
    }
});

export default AuthContainer;