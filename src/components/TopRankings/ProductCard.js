import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { View, Text, ImageBackground, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProductActions from '../../stores/Products/Actions';
import mapCategoriesToImages from './../CategoriesImages/CategoriesImages';

export default function ProductCardComponent({ data }) {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const [image, setImage] = useState((data.image != undefined) || (data.image != null) ? data['image']['src'] : mapCategoriesToImages('dummy'))

    const toProducts = () => {
        dispatch(ProductActions.categoryId(data.id))
        navigation.navigate('productsByCategories')
    }
    useEffect(() => {
        return () => {
            setImage('')
        }
    })
    return (
        <View style={styles.container}>
            <Pressable onPress={toProducts}>
                <ImageBackground source={{ uri: image, cache: 'force-cache' }} style={styles.image} borderRadius={8} />
                <Text style={styles.category}>
                    {data.name}
                </Text>
            </Pressable>
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