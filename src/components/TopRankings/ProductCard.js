import React from "react";
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import mapCategoriesToImages from './../CategoriesImages/CategoriesImages';

export default function ProductCardComponent({ data }) {
    let image;
    if (data.image)
        image = data['image']['src']
    if (image === undefined)
        image = mapCategoriesToImages('dummy')
    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: image, cache: 'force-cache' }} style={styles.image} borderRadius={8} />
            <Text style={styles.category}>
                {data.name}
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
    }
});