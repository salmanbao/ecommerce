import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
} from "react-native";
import { connect } from 'react-redux';
import { Helpers } from '../../theme'
import { Button, Input } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import ProductActions from '../../stores/Products/Actions';

const LoginComponent = ({ route, navigation, login_success, auth }) => {
    const dispatch = useDispatch()
    const [username, onChangeUsername] = useState('')
    const [password, onChangePassword] = useState('')

    const [usernameErr, setUsernameErr] = useState('')
    const [passwordErr, setPasswordErr] = useState('')

    if (auth['token'])
        navigation.navigate('products', { screen: route.params.next, product: route.params.product, type: route.params.type })

    return (
        <SafeAreaView style={[Helpers.fillRowCenter, { backgroundColor: 'white' }]}>
            <View style={styles.centeredView}>

                <Text
                    style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 50, color: '#ec524b' }}
                >
                    Sign In
                </Text>
                <Input
                    placeholder={'Username'}
                    textContentType={'username'}
                    errorMessage={(login_success['username']) ? login_success['message'] : usernameErr}
                    maxLength={25}
                    onChangeText={text => onChangeUsername(text)}
                />
                <Input
                    placeholder={'Password'}
                    textContentType={'password'}
                    errorMessage={(login_success['password']) ? login_success['message'] : passwordErr}
                    maxLength={255} secureTextEntry={true}
                    onChangeText={text => onChangePassword(text)}
                />
                <Button
                    title="Sign In"
                    loading={login_success['loading']}
                    buttonStyle={{ width: Dimensions.get('screen').width - 20, marginVertical: 5, backgroundColor: '#ec524b' }}
                    onPress={() => {
                        setUsernameErr('')
                        setPasswordErr('')
                        if (!username)
                            setUsernameErr('Username required')
                        else if (!password)
                            setPasswordErr('Password required')
                        else {
                            dispatch(ProductActions.loginUser({ username, password }))
                        }
                    }}
                />
                <View style={{ display: 'flex', flexDirection: 'row', marginVertical: 5 }}>
                    <Text>
                        Don't have an account?
                    </Text>
                    <Text
                        style={{ color: '#ec524b' }}
                        onPress={() => {
                            navigation.navigate('login')
                        }}
                    >
                        Register
                    </Text>
                </View>

            </View>
        </SafeAreaView>

    );
};

function mapStateToProps({ products }) {
    const { login_success, auth } = products;
    return {
        auth,
        login_success: login_success || { loading: false, username: false, password: false, success: false, message: '' }
    };
}
export default connect(mapStateToProps, null)(LoginComponent)


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
    },

});
