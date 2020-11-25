import React, { useState, useEffect } from "react";
import { connect, useDispatch } from 'react-redux';
import ProductsByCategoryCardComponent from './ProductsByCategoryCard';
import { View, StyleSheet, FlatList, ActivityIndicator, Dimensions } from 'react-native';
import ProductActions from '../../stores/Products/Actions';

function ProductsByCategoryComponent(props) {
    const dispatch = useDispatch()
    const [data, setData] = useState(props.products);
    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        return () => {
            setData([]);
            setPage(0);
            setLoadingMore(false);
            setRefreshing(false)
        }
    }, [data]);

    const _fetchProducts = () => {
        dispatch(ProductActions.getProductsByCategory(props.categoryId, page))
    };

    const renderItem = ({ item }) => {
        return (
            <ProductsByCategoryCardComponent data={item} />
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
                    marginBottom: 110,
                    borderColor: 'black'
                }}
            >
                <ActivityIndicator animating size="large" />
            </View>
        );
    };

    const handleLoadMore = () => {
        setPage(page + 1)
        setLoadingMore(false)
        _fetchProducts()
        setLoadingMore(true)
    };

    const handleRefresh = () => {
        setPage(1)
        setRefreshing(true)
        _fetchProducts()
        setRefreshing(false)
    };

    return (
        <View style={{ height: Dimensions.get('window').height }}>
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

function mapStateToProps({ products }) {
    const { productsByCategory } = products;
    const { categoryId } = products;
    return {
        products: productsByCategory[categoryId] || []
    };
}

export default connect(mapStateToProps, null)(ProductsByCategoryComponent)


const styles = StyleSheet.create({
    gridView: {
        display: 'flex',
        flexDirection: 'column',
        marginHorizontal: 10,
        marginTop: 20,
        marginBottom: 150,
    },
    cardHeading: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 15,
        fontWeight: 'bold',
    },
});