import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import CategoryCardComponent from './CategoryCard';
import { FlatGrid } from 'react-native-super-grid';

export default function CategoriesComponent() {
    React.useEffect(() => {
        return () => {
            setCategories([])
        }
    })
    const [categories, setCategories] = React.useState([
        {
            bgColor: '#f57576',
            category: 'Digital Storage',
            image: 'https://placeimg.com/640/480/any'
        },
        {
            bgColor: '#dc696a',
            category: 'For Audio & Visual Enthusiam',
            image: 'https://placeimg.com/640/480/any'
        },
        {
            bgColor: '#c45d5e',
            category: 'Wireless & Quick Charge',
            image: 'https://placeimg.com/640/480/any'
        },
        {
            bgColor: '#ab5152',
            category: 'Health Monitoring',
            image: 'https://placeimg.com/640/480/any'
        },
        {
            bgColor: '#934646',
            category: 'Shoes',
            image: 'https://placeimg.com/640/480/any'
        },
        {
            bgColor: '#7a3a3b',
            category: 'Garden',
            image: 'https://placeimg.com/640/480/any'
        },
        {
            bgColor: '#622e2f',
            category: 'Watches',
            image: 'https://placeimg.com/640/480/any'
        },
        {
            bgColor: '#492323',
            category: 'Home & Garden',
            image: 'https://placeimg.com/640/480/any'
        },
    ])
    return (
        <View>
            <Text style={styles.cardHeading}>
                Featured Categories
            </Text>
            <FlatGrid
                itemDimension={80}
                data={categories}
                style={styles.gridView}
                spacing={5}
                renderItem={({ item }) => (
                    <CategoryCardComponent data={item} />
                )}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    gridView: {
        flex: 1,
        marginHorizontal: 10
    },
    cardHeading: {
        marginTop: 10,
        marginLeft: 15,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 10,
        marginVertical: 5
    }
});