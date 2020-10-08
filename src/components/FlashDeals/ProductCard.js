import React from "react";
import { View, ImageBackground, Text, StyleSheet } from 'react-native'
import ProgressBarClassic from 'react-native-progress-bar-classic';

export default function ProductCardComponent({ data }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: data.image,cache: 'force-cache' }} style={styles.image} borderRadius={8} >
                {/* <View > */}
                <Text style={styles.offPercentage}>{data.off}</Text>
                {/* </View> */}
            </ImageBackground>
            <View style={styles.progressBar}>
                <ProgressBarClassic solds={243} progress={60} />
            </View>
            <View>
                <Text style={styles.price}>
                    PKR {data.price}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    image: {
        resizeMode: 'center',
        height: 100,
        width: 100,
    },
    offPercentage: {
        padding: 2,
        fontSize: 10,
        width: 30,
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