import React from "react";
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

export default function ProductCardComponent({ data }) {
    let type;
    if (data.increased > 0)
        type = `${data.increased} increased`;
    else if (data.interested > 0)
        type = `${data.interested} interested`;
    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: data.image,cache: 'force-cache' }} style={styles.image} borderRadius={8} />
            <Text style={styles.category}>
                {data.category}
            </Text>
            <Text style={styles.type}>
                {type}
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        resizeMode: 'center',
        height: 100,
        width: 100,
    },
    category: {
        padding: 5,
        textAlign: 'center',
        fontSize: 10,
        fontWeight: "bold",
    },
    type:{
        fontSize:8,
        textAlign:'center',
        color:'#f0a500'
    }
});