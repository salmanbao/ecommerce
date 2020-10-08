import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import ImageBlurLoading from 'react-native-image-blur-loading';

export default function CategoryCardComponent({ data }) {

    return (
        <View >
            <ImageBlurLoading
            borderRadius={8}
                source={{ uri: data.image,cache: 'force-cache' }}
                style={styles.image}
            />
            <View style={[styles.categoryTextBox, { backgroundColor: data.bgColor }]}>
                <Text ellipsizeMode='tail' numberOfLines={2} style={styles.category}>
                    {data.category}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'cover',
        height: 100,
    },
    categoryTextBox: {
        height: 35,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        top: -5,
    },
    category: {
        color: 'white',
        padding: 5,
        fontSize: 10,
        fontWeight: "bold",
        textAlign: 'center',

    }
}); 