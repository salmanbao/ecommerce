import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CartHeaderComponent from '../Cart/CartHeader';
import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux';
import ProductActions from '../../stores/Products/Actions';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, StyleSheet, StatusBar, ScrollView, TextInput } from 'react-native';

const OrderConfirmation = ({ route, navigation }) => {
    const [data, setData] = useState(route.params.product)
    useEffect(() => {
        return () => {
        }
    }, []);

    return (
        <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }} >
            <StatusBar translucent barStyle="dark-content" />
            <CartHeaderComponent withSearchBar={false} products={null} title="Order Confirmation" navigation={navigation} />
            <ScrollView>
                {/* Add New Shipping Address */}
                <View style={{ display: 'flex', flexDirection: 'row', marginHorizontal: 10, marginVertical: 5 }}>
                    <Button
                        title="Add New Address"
                        type="clear"
                        titleStyle={{ fontSize: 14, fontWeight: '600', textDecorationLine: 'underline', marginLeft: 10 }}
                        icon={
                            <Icon
                                name="map-marker"
                                size={15}
                                color="grey"
                            />
                        }
                        onPress={() => {
                            navigation.navigate('products', {
                                screen: 'add_shipping_address',
                                params: { product: data }
                            })
                        }}
                    />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', width: '100%', height: 10, backgroundColor: '#f1f1f1' }}></View>

                {/* Product Details */}

                <View style={{ display: 'flex', flexDirection: 'row', marginHorizontal: 10 }}>
                    <Image
                        style={{ width: 100, height: 100 }}
                        resizeMode={'contain'}
                        source={{
                            uri: data['images'][0]['src'],
                        }}
                    />
                    <View style={{ flex: 1, flexDirection: 'column', paddingLeft: 5, marginTop: 15 }}>
                        <Text style={{ fontSize: 16, marginLeft: 5 }}>
                            {data.name}
                        </Text>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            {data.on_sale &&
                                <View>
                                    <Text style={{ fontSize: 12, fontWeight: '800', color: 'white', backgroundColor: '#f50', padding: 3 }}>SALE</Text>
                                </View>
                            }
                            <Text style={{ fontWeight: 'bold', fontSize: 16, marginLeft: 5 }}>
                                {data.regular_price} ر.ع
                        </Text>
                        </View>

                        {data.on_sale &&
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Text style={{
                                    fontSize: 12,
                                    fontWeight: '500',
                                    color: 'white',
                                    backgroundColor: '#f50',
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    paddingLeft: 3,
                                    paddingRight: 3
                                }}>After discount: {data.regular_price} ر.ع</Text>
                            </View>
                        }

                    </View>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', width: '100%', height: 1, backgroundColor: '#f1f1f1' }}></View>

                <View style={{ display: 'flex', flexDirection: 'row', marginVertical: 25, marginHorizontal: 10, justifyContent: 'space-between' }}>
                    <Text style={{ color: 'grey' }}>
                        Message for the Seller
                    </Text>
                    <TextInput
                        placeholder={'Note to seller'}
                        style={{ borderColor: 'gray', height: 30, width: '50%' }}
                    // onChangeText={text => onChangeText(text)}
                    // value={value}
                    />
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', width: '100%', height: 1, backgroundColor: '#f1f1f1' }}></View>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 10 }}>
                    <Text style={{ color: 'grey' }}>Subtotal:</Text>
                    <Text style={{ color: 'grey' }}>34 ر.ع</Text>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, }}>
                    <Text style={{ color: 'grey' }}>Shipping fee:</Text>
                    <Text style={{ color: 'grey' }}>10 ر.ع</Text>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginBottom: 10 }}>
                    <Text>Total</Text>
                    <Text>44 ر.ع</Text>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', width: '100%', height: 10, backgroundColor: '#f1f1f1' }}></View>

                <View style={{ display: 'flex', flexDirection: 'row', marginHorizontal: 10, marginVertical: 10, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18, marginVertical: 5 }}>
                        Order Summary (1 item)
                    </Text>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', width: '100%', height: 1, backgroundColor: '#f1f1f1' }}></View>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 10 }}>
                    <Text style={{ color: 'grey' }} >Total</Text>
                    <Text style={{ color: 'grey' }}>44 ر.ع</Text>
                </View>


                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginBottom: 10 }}>
                    <Text>Total</Text>
                    <Text>44 ر.ع</Text>
                </View>

            </ScrollView>

            <View style={styles.footer}>
                <Button
                    title="Place Order"
                    titleStyle={{ color: 'white', fontWeight: 'bold' }}
                    buttonStyle={{ height: 50, width: '100%', borderRadius: 0, backgroundColor: 'red' }}
                    containerStyle={{ borderRadius: 0, width: '100%' }}
                    onPress={() => {
                        navigation.goBack()
                    }}
                />
            </View>


        </SafeAreaView>
    )
}

function mapStateToProps({ products }) {
    return {
        shipping_methods:
            (products['shipping_methods'] !== undefined || products['shipping_methods'].length > 0)
                ? products['shipping_methods'].map(m => { return { id: m['id'], title: m['title'], description: m['description'], checked: false } })
                : []
    }
}

export default connect(mapStateToProps, null)(OrderConfirmation)

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    footer: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
    },
})