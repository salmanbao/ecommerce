import { Input, Button } from 'react-native-elements';
import CartHeaderComponent from '../Cart/CartHeader';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StatusBar, ScrollView, Switch } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import ProductActions from '../../stores/Products/Actions';

const AddShippingAddress = ({ navigation, auth, saveShippingAddress }) => {
    const [name, setName] = useState('')
    const [country, setCountry] = useState('')
    const [province, setProvince] = useState('')
    const [city, setCity] = useState('')
    const [zipcode, setZipCode] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [countryCode, setCountryCode] = useState('PK')
    const [callCode, setCallCode] = useState('92')
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    useEffect(() => {
        return () => {
        }
    }, []);

    return (
        <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }} >
            <StatusBar translucent barStyle="dark-content" />
            <CartHeaderComponent withSearchBar={false} products={null} title="Add New Address" navigation={navigation} />
            <ScrollView>
                <View style={{ display: 'flex', flexDirection: 'column', marginHorizontal: 10 }}>
                    <Text style={{ color: 'grey' }}>Please enter your address in English characters as required by international logistics services.</Text>
                    <Input
                        placeholder='Contact Name'
                        style={{ marginTop: 5, fontSize: 14 }}
                        onChangeText={text => setName(text)}
                    />
                    <CountryPicker
                        withEmoji
                        withFilter
                        countryCode={countryCode}
                        withCountryNameButton
                        onSelect={(c) => {
                            setCountry(c.name)
                            setCountryCode(c.cca2)
                            setCallCode(c.callingCode[0])
                        }}
                        theme={{ fontSize: 14, onBackgroundTextColor: 'grey' }}
                        containerButtonStyle={{ borderBottomWidth: 1, borderBottomColor: 'grey', marginHorizontal: 8 }}
                    />
                    <Input
                        placeholder='State / Province / County'
                        keyboardType={'default'}
                        style={{ marginTop: 25, fontSize: 14 }}
                        onChangeText={text => setProvince(text)}
                    />
                    <Input
                        placeholder='City'
                        keyboardType={'default'}
                        style={{ marginTop: 5, fontSize: 14 }}
                        onChangeText={text => {
                            setCity(text)
                        }}
                    />
                    <Input
                        placeholder='Zip/Postal Code'
                        keyboardType={'number-pad'}
                        style={{ marginTop: 5, fontSize: 14 }}
                        onChangeText={text => setZipCode(text)}
                    />
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ width: '20%' }}>
                            <Input
                                placeholder='92'
                                value={callCode}
                                keyboardType={'phone-pad'}
                                editable={false}
                                style={{ marginTop: 5, fontSize: 14 }}
                            />
                        </View>
                        <View style={{ width: '80%' }}>
                            <Input
                                placeholder='Mobile'
                                keyboardType={'phone-pad'}
                                style={{ marginTop: 5, fontSize: 14 }}
                                onChangeText={text => setPhone(text)}
                            />
                        </View>
                    </View>
                    <Input
                        placeholder='Street address, P.O. box, etc.'
                        style={{ marginTop: 5, fontSize: 14 }}
                        onChangeText={text => setAddress(text)}
                    />

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: '500', padding: 5 }}>
                            Set as default shipping address
                        </Text>
                        <Switch
                            trackColor={{ false: "grey", true: "#f50" }}
                            ios_backgroundColor="white"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginVertical: 15 }}>
                        <Button
                            title="Save"
                            buttonStyle={{ backgroundColor: 'red' }}
                            containerStyle={{ width: '80%' }}
                            titleStyle={{ fontWeight: '600' }}
                            onPress={() => {
                                saveShippingAddress(
                                    {
                                        first_name: name,
                                        billing: {
                                            first_name: name,
                                            country: countryCode,
                                            state: province,
                                            city: city,
                                            address_1: address,
                                            postcode: zipcode,
                                            phone: `${callCode}${phone}`
                                        },
                                        shipping: {
                                            first_name: name,
                                            country: countryCode,
                                            state: province,
                                            city: city,
                                            address_1: address,
                                            postcode: zipcode,
                                            phone: `${callCode}${phone}`
                                        },
                                    }, auth['id'])
                            }}
                        />
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

function mapStateToProps({ products }) {
    const { auth } = products;
    return {
        auth
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveShippingAddress: (address, customerId) => {
            dispatch(ProductActions.saveShippingAddress(address, customerId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddShippingAddress)
