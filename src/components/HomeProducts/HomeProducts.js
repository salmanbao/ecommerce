import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import ProductCardComponent from './ProductCard';

export default function HomeProductsComponent() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        _fetchAllBeers()
    }, []);

    const _fetchAllBeers = () => {
        const URL = `https://api.punkapi.com/v2/beers?page=${page}&per_page=5`;
        fetch(URL)
            .then(res => res.json())
            .then(_data => {
                if (page === 1)
                    setData(_data)
                else
                    setData([...data, ..._data])
                setLoading(false)
            })
    };

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
        setLoading(true)
        setLoadingMore(true)
        _fetchAllBeers()
    };

    const handleRefresh = () => {
        setPage(1)
        setRefreshing(true)
        _fetchAllBeers()
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
                keyExtractor={(item) => item.id.toString()}
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