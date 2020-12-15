import React, {  useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from 'react-native';
import ImageBlurLoading from 'react-native-image-blur-loading';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import ProductActions from '../../stores/Products/Actions';
import mapCategoriesToImages from './../CategoriesImages/CategoriesImages';

export default function CategoryCardComponent({ data }) {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const toProducts = () => {
        dispatch(ProductActions.categoryId(data.id))
        navigation.navigate('products', {
            screen: 'productsByCategories'
        })
    }
    useEffect(() => {
        return () => {
        }
    },[])
    return (
        <View >
            <Pressable onPress={toProducts}>
                <ImageBlurLoading
                    borderRadius={8}
                    source={{ uri: (data.image != undefined) || (data.image != null) ? data['image']['src'] : mapCategoriesToImages('dummy'), cache: 'force-cache' }}
                    style={styles.image}
                />
                <View style={[styles.categoryTextBox, { backgroundColor: '#f57576' }]}>
                    <Text ellipsizeMode='tail' numberOfLines={2} style={styles.category}>
                        {data.name}
                    </Text>
                </View>
            </Pressable>
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