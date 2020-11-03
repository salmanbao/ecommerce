import React from "react";
import { View, ImageBackground, Text, StyleSheet } from 'react-native'
import ProgressBarClassic from 'react-native-progress-bar-classic';

export default function ProductCardComponent({ data }) {
    const discountPercentage = (((data.regular_price-data.sale_price)/data.regular_price)* 100).toFixed(2)
    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: data.images[0].src, cache: 'force-cache' }} style={styles.image} borderRadius={8} >
                <Text style={styles.offPercentage}>{discountPercentage}%</Text>
            </ImageBackground>
            <View style={styles.progressBar}>
                <ProgressBarClassic solds={data.total_sales} progress={60} />
            </View>
            <View>
                <Text style={styles.price}>
                    PKR {data.sale_price}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    image: {
        resizeMode: 'contain',
        height: 100,
        width: 100,
    },
    offPercentage: {
        padding: 2,
        fontSize: 8,
        width: 35,
        color: 'white',
        fontWeight: "bold",
        backgroundColor: '#f56a79',
    },
    text: {
        color: "grey",
    },
    progressBar: {
        marginTop: 5,
    },
    price: {
        fontWeight: '700'
    }
});