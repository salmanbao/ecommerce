import { CheckBox, Button, Input } from 'react-native-elements';
import CartHeaderComponent from './CartHeader';
import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux';
import InputSpinner from 'react-native-input-spinner';
import ProductActions from '../../stores/Products/Actions';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, StyleSheet, StatusBar, ScrollView } from 'react-native';

const ProductConfirmation = ({ route, navigation, shipping_methods }) => {
    const dispatch = useDispatch()
    const [data, setData] = useState(route.params.product)
    const [methods, setChecked] = useState(shipping_methods)
    const [selected, setSelected] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const [flatRate, setFlatRate] = useState(0)

    useEffect(() => {
        return () => {
        }
    }, []);

    return (
        <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }} >
            <StatusBar translucent barStyle="dark-content" />
            <CartHeaderComponent withSearchBar={false} products={null} navigation={navigation} />

            <View style={{ display: 'flex', flexDirection: 'row', marginHorizontal: 10 }}>
                <Image
                    style={{ width: 100, height: 100 }}
                    resizeMode={'contain'}
                    source={{
                        uri: data['images'][0]['src'],
                    }}
                />
                <View style={{ flex: 1, flexDirection: 'column', paddingLeft: 5, marginTop: 15 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, marginLeft: 5 }}>
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

            <ScrollView>

                <View style={styles.row, { marginVertical: 10, marginHorizontal: 10 }}>
                    <Text style={{ color: 'grey', fontSize: 14 }}>Quantity</Text>
                    <InputSpinner
                        max={20}
                        min={1}
                        step={1}
                        width={80}
                        height={20}
                        colorMax={"#f50"}
                        colorMin={"#f50"}
                        buttonFontSize={14}
                        style={{ marginTop: 10, marginBottom: 20 }}
                        onChange={(num) => { setQuantity(num) }}
                    />
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>
                        Shipping
                    </Text>

                    <Text style={{ color: 'grey', marginTop: 5, textAlign: 'justify' }}>
                        To Oman via SalalahBazaar Standard Shipping Estimated Delivery: 7-14 days
                    </Text>

                    <View style={{ marginVertical: 10 }}>
                        {methods.length > 0 &&
                            methods.map((method, index) => (
                                    <CheckBox
                                        key={index}
                                        center
                                        title={

                                            <View style={{ flex: 1, padding: 5 }}>
                                                <Text style={{ fontWeight: '600' }}>
                                                    {method['title']}
                                                </Text>
                                                <Text style={{ color: 'grey' }}>
                                                    {method['description']}
                                                </Text>
                                                {(method['id'] === 'flat_rate') &&
                                                    <Input
                                                        style={{ height: 30 }}
                                                        keyboardType={'decimal-pad'}
                                                        onChangeText={text => setFlatRate(text)}
                                                        value={flatRate.toString()}
                                                    />
                                                }
                                            </View>

                                        }
                                        checkedColor='#f50'
                                        checked={method['checked']}
                                        onPress={() => {
                                            let copiedData = [...methods];
                                            let allUnchecked = copiedData.map(m => {
                                                return {
                                                    ...m,
                                                    checked: false
                                                }
                                            })
                                            allUnchecked[index]['checked'] = true
                                            setSelected(allUnchecked[index])
                                            setChecked(allUnchecked)
                                        }}
                                    />
                            ))
                        }
                    </View>

                </View>

            </ScrollView>

            <View style={styles.footer}>
                <Button
                    title="Continue"
                    titleStyle={{ color: 'white', fontWeight: 'bold' }}
                    buttonStyle={{ height: 50, width: '100%', borderRadius: 0, backgroundColor: 'red' }}
                    containerStyle={{ borderRadius: 0, width: '100%' }}
                    onPress={() => {
                        if (route.params.type === 'BUY_NOW') {
                            navigation.navigate('products', {
                                screen: 'confirm_order',
                                params: { product: data }
                            })
                        }
                        else {
                            dispatch(ProductActions.addToCart({
                                ...data,
                                shipping_method: selected,
                                quantity,
                                shipping_price: flatRate || 0
                            }))
                            navigation.goBack()
                        }
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

export default connect(mapStateToProps, null)(ProductConfirmation)

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