import React from "react";
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImageBlurLoading from 'react-native-image-blur-loading';
import ProductActions from '../../stores/Products/Actions';

export default function ProductCardComponent({ data}) {
    const dispatch = useDispatch()
    const navigation = useNavigation();
    if (data.id === undefined)
        return null
    return (
        <Pressable onPress={() => {
            dispatch(ProductActions.getReviewsByProduct(data.id))
            navigation.navigate('product_details', { data })
        }} style={{ backgroundColor: 'white', marginTop: 10, borderRadius: 8 }}>
            <ImageBlurLoading
                // borderRadius={8}
                source={{ uri: data.images[0]['src'], cache: 'force-cache' }}
                style={styles.image}
            />
            <View style={[styles.productTextBox]}>
                <Text ellipsizeMode='tail' numberOfLines={2} style={styles.product}>
                    {data.name}
                </Text>
                <Text style={styles.price}>
                    ر.ع {data.price}
                </Text>
                <View style={styles.TextBoxFooter}>
                    <Text style={styles.solds}>
                        {data.total_sales} Sold
                    </Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
        height: 250,
        width: 170,
        marginTop: 10
    },
    productTextBox: {
        backgroundColor: 'white',
        width: 170,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        top: -5,
    },
    product: {
        color: 'black',
        padding: 5,
        fontSize: 10,
        fontWeight: "normal",
        textAlign: 'left',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5
    },
    TextBoxFooter: {
        flex: 1,
        marginVertical: 3
    },
    solds: {
        marginHorizontal: 8,
        fontSize: 10,
        color: 'grey'
    }
}); 