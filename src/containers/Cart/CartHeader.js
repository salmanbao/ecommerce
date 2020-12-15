import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-elements';
import ProductActions from '../../stores/Products/Actions';

function CartHeaderComponent({ navigation, carts, products, deleteFromCart, withSearchBar, title }) {

    useEffect(() => {
        return () => {
        }
    })

    return (
        <View style={styles.search}>
            <Button
                type='clear'
                onPress={() => { navigation.goBack() }}
                buttonStyle={styles.headerAlignment}
                icon={
                    <AntDesign
                        name='left'
                        size={30}
                        color="grey"
                    />
                }
            />

            { withSearchBar &&
                <>
                    <View>
                        <Text style={{ fontSize: 24, fontWeight: 'bold', padding: 30 }}>
                            Cart({carts})
                </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Button
                            type='clear'
                            onPress={() => {
                                deleteFromCart(products)
                            }}
                            buttonStyle={[styles.deleteBtn]}
                            icon={
                                <AntDesign
                                    name='delete'
                                    size={24}
                                    color="grey"
                                />
                            }
                        />
                    </View>
                </>
            }

            <>
                {
                    title &&
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: '400', padding: 30 }}>
                            {title}
                        </Text>
                    </View>
                }
            </>
        </View>
    );
}

function mapStateToProps({ products }) {
    return {
        carts: products['cart'].length
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteFromCart: (products) => dispatch(ProductActions.removeFromCart(products)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartHeaderComponent)

const styles = StyleSheet.create({
    search: {
        display: "flex",
        flexDirection: 'row',
        height: 80,
        borderBottomColor: '#7a7a7a'
    },
    headerAlignment: {
        height: 80,
        marginLeft: 5,
        marginTop: 5,
    },
    deleteBtn: {
        height: 80,
        marginRight: 5
    }
})