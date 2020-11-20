import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import CategoryCardComponent from './CategoryCard';
import { FlatGrid } from 'react-native-super-grid';
import { useStore } from 'react-redux';

export default function CategoriesComponent() {
    const store = useStore()
    let { products } = store.getState()
    const [categories, setCategories] = React.useState(products['top'].slice(1, 9))
    React.useEffect(() => {
        return () => {
            setCategories([])
        }
    }, [])
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