import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import ProductCardComponent from './ProductCard';
import createStore from '../../stores';
import ProductActions from '../../stores/Products/Actions';
import { useDispatch } from 'react-redux';

const { store } = createStore()

export default function HomeProductsComponent() {
    const dispatch = useDispatch()
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        fetchProducts(page)
    }, [page]);

    const fetchProducts = (page) => {
        setLoadingMore(true)
        dispatch(ProductActions.getAllProducts(page))
        let { products } = store.getState()
        setData([...data, ...products['products']])
        setLoadingMore(false)
    }

    const renderItem = ({ item }) => {
        return (
            <ProductCardComponent data={item} />
        );
    };

    const renderFooter = () => {
        if (loadingMore)
            return null

        return (
            <View
                style={{
                    position: 'relative',
                    width: '100%',
                    height: 20,
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    marginTop: 10,
                    marginBottom: 10,
                    borderColor: 'black'
                }}
            >
                <ActivityIndicator animating size="large" />
            </View>
        );
    };

    const handleLoadMore = () => {
        setPage(page + 1)
        setLoadingMore(true)
        fetchProducts(page)
    };

    const handleRefresh = () => {
        setPage(1)
        setRefreshing(true)
        fetchProducts(page)
    };

    return (
        <View>
            <Text style={styles.cardHeading}>
                More To Love
                  </Text>
            <FlatList
                data={data}
                style={styles.gridView}
                numColumns={2}
                horizontal={false}
                nestedScrollEnabled
                renderItem={renderItem}
                keyExtractor={(item, index) => String(index)}
                columnWrapperStyle={{
                    justifyContent: 'space-around',
                }}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}
                initialNumToRender={10}
                onRefresh={handleRefresh}
                refreshing={refreshing}
                ListFooterComponent={renderFooter}
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
        marginBottom: 10,
        marginLeft: 15,
        fontWeight: 'bold',
    },
});