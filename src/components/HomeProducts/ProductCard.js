import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import ImageBlurLoading from 'react-native-image-blur-loading';

export default function ProductCardComponent({ data }) {

    return (
        <View style={{backgroundColor:'white',marginTop:10, borderRadius:8}}>
            <ImageBlurLoading
                // borderRadius={8}
                source={{ uri: data.image_url,cache: 'force-cache' }}
                style={styles.image}
            />
            <View style={[styles.productTextBox]}>
                <Text ellipsizeMode='tail' numberOfLines={2} style={styles.product}>
                    {data.name}
                </Text>
                <Text style={styles.price}>
                    PKR {data.price}
                </Text>
                <View style={styles.TextBoxFooter}>
                    <Text style={styles.solds}>
                        {data.solds} Sold
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
        height: 250,
        width: 170,
        marginTop:10
    },
    productTextBox: {
        backgroundColor: 'white',
        // height: 60,
        width:170,
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
        marginVertical:3
    },
    solds: {
        marginHorizontal: 8,
        fontSize: 10,
        color: 'grey'
    }
}); 