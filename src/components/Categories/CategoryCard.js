import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import ImageBlurLoading from 'react-native-image-blur-loading';
import mapCategoriesToImages from './../CategoriesImages/CategoriesImages';

export default function CategoryCardComponent({ data }) {
    let image;
    if (data.image)
        image = data['image']['src']
    if (image === undefined)
        image = mapCategoriesToImages('dummy')
    return (
        <View >
            <ImageBlurLoading
                borderRadius={8}
                source={{ uri: image, cache: 'force-cache' }}
                style={styles.image}
            />
            <View style={[styles.categoryTextBox, { backgroundColor: '#f57576' }]}>
                <Text ellipsizeMode='tail' numberOfLines={2} style={styles.category}>
                    {data.name}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
        backgroundColor: 'white',
        height: 100,
    },
    categoryTextBox: {
        height: 35,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        top: -20,
    },
    category: {
        color: 'white',
        padding: 5,
        fontSize: 10,
        fontWeight: "bold",
        textAlign: 'center',

    }
}); 