import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import CartHeaderComponent from './CartHeader';
import HomeProductsComponent from '../../components/HomeProducts/HomeProducts';

import CartProductsCard from './CartProductsCard';
const CartContainer = ({ navigation, carts }) => {

    const [cartProducts, setCartProducts] = useState(carts)

    useEffect(() => {
        return () => {
        }
    }, []);

    return (
        <SafeAreaView style={{ backgroundColor: 'white' }} >
            <StatusBar translucent barStyle="dark-content" />
            <CartHeaderComponent withSearchBar={true} products={cartProducts} navigation={navigation} />
            <ScrollView>
                <View style={styles.row, { marginVertical: 10 }}>
                    {carts.length > 0 ?
                        carts.map((product, index) => (
                            <CartProductsCard
                                product={product}
                                onPress={(checked) => {
                                    const products = checked === false ? [...cartProducts, product] : cartProducts.filter((p) => { return p.id !== product.id });
                                    setCartProducts(products)
                                }}
                                key={index} />
                        )) :
                        <View >
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                <AntDesign
                                    name='shoppingcart'
                                    size={100}
                                    color="#e6e6e6"
                                />
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                <Text style={{ color:'#bbbbbb'}}>No item added to cart yet</Text>
                            </View>

                        </View>
                    }
                </View>
                <HomeProductsComponent />
            </ScrollView>
        </SafeAreaView>
    )

}

function mapStateToProps({ products }) {
    return { carts: products['cart'] }
}

export default connect(mapStateToProps, null)(CartContainer)



const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'grey'
    }
})