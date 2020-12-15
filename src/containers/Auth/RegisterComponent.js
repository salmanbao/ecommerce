import React from "react";
import {
    Text,
    View,
    Modal,
    StyleSheet,
    Dimensions,
    TouchableHighlight
} from "react-native";
import { connect } from 'react-redux';
import { Helpers } from '../../theme'
import { Button, Input } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import ProductActions from '../../stores/Products/Actions';



const RegisterComponent = ({ navigation, register_success }) => {
    const dispatch = useDispatch()

    const [username, onChangeUsername] = React.useState('')
    const [email, onChangeEmail] = React.useState('')
    const [password, onChangePassword] = React.useState('')
    const [confirm_password, onChangeNewPassword] = React.useState('')

    const [usernameErr, setUsernameErr] = React.useState('')
    const [emailErr, setEmailErr] = React.useState('')
    const [passwordErr, setPasswordErr] = React.useState('')
    const [confirm_passwordErr, setNewPasswordErr] = React.useState('')

    const validate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            setEmailErr('Invalid email address')
            return false;
        }
        else {
            onChangeEmail(text)
            setEmailErr('')
        }
    }

    const matchPasswords = (new_password) => {
        if (new_password !== password)
            setNewPasswordErr('Password not matched')
        else {
            setNewPasswordErr('')
            onChangeNewPassword(new_password)
        }
    }

    return (
        <SafeAreaView style={[Helpers.fillRowCenter, { backgroundColor: 'white' }]}>
            <View style={styles.centeredView}>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={register_success['success']}
                    onRequestClose={() => {
                        Alert.alert(register_success['message']);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>{register_success['message']}</Text>

                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#ec524b" }}
                                onPress={() => {
                                    dispatch(ProductActions.resetAllRegisterResponse())
                                }}
                            >
                                <Text style={styles.textStyle}>Close</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <Text
                    style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 50, color: '#ec524b' }}
                >
                    Register
                </Text>
                <Input
                    placeholder={'Username'}
                    textContentType={'username'}
                    errorMessage={(register_success['username']) ? register_success['message'] : usernameErr}
                    maxLength={25}
                    onChangeText={text => onChangeUsername(text)}
                />
                <Input
                    placeholder={'Email'}
                    textContentType={'emailAddress'}
                    errorMessage={(register_success['email']) ? register_success['message'] : emailErr}
                    maxLength={36}
                    onChangeText={text => validate(text)}
                />
                <Input
                    placeholder={'Password'}
                    textContentType={'password'}
                    errorMessage={passwordErr}
                    maxLength={255} secureTextEntry={true}
                    onChangeText={text => onChangePassword(text)}
                />
                <Input
                    placeholder={'Confirm Password'}
                    textContentType={'newPassword'}
                    errorMessage={confirm_passwordErr}
                    maxLength={255}
                    secureTextEntry={true}
                    onChangeText={text => matchPasswords(text)}
                />
                <Button
                    title="Register"
                    loading={register_success['loading']}
                    buttonStyle={{ width: Dimensions.get('screen').width - 20, marginVertical: 5, backgroundColor: '#ec524b' }}
                    onPress={() => {
                        setUsernameErr('')
                        setPasswordErr('')
                        if (!username)
                            setUsernameErr('Username required')
                        else if (!email)
                            setEmailErr('Email required')
                        else if (!password)
                            setPasswordErr('Password required')
                        else if (!confirm_password)
                            setNewPasswordErr('Confirm password')
                        else {
                            dispatch(ProductActions.registerUser({ username, email, password }))
                        }
                    }}
                />
                <View style={{ display: 'flex', flexDirection: 'row', marginVertical: 5 }}>
                    <Text>
                        Have an account?
                    </Text>
                    <Text
                        style={{ color: '#ec524b' }}
                        onPress={() => {
                            navigation.navigate('login')
                        }}
                    >
                        Sign In
                    </Text>
                </View>
                {/* <Text style={{ width: Dimensions.get('screen').width - 20, textAlign: 'justify', color:'grey'}}>
                    By registering for an Salalah Bazaar account, you agree that you have read and accepted out Salalah Bazaar Membership and Privacy Policy
                </Text> */}

            </View>
        </SafeAreaView>

    );
};

function mapStateToProps({ products }) {
    const { register_success } = products;
    return {
        register_success: register_success || { status: false, email: false, username: false, success: false, message: '' }
    };
}
export default connect(mapStateToProps, null)(RegisterComponent)


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
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
});
