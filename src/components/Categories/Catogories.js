import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import CategoryCardComponent from './CategoryCard';
import { FlatGrid } from 'react-native-super-grid';
import { connect } from 'react-redux';

function CategoriesComponent({ categories}) {
    React.useEffect(() => {
        return () => {
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

function mapStateToProps(state) {
    const { top } = state.products;
    return {
        categories: top.slice(1, 9)
    };
}


export default connect(mapStateToProps, null)(CategoriesComponent)



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