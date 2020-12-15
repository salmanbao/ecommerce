import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import ProductCardComponent from './ProductCard';
import ProductActions from '../../stores/Products/Actions';


function HomeProductsComponent(props) {
    const [page, setPage] = useState(2);
    const [loadingMore, setLoadingMore] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        return () => {
            setPage(0)
            setLoadingMore(false)
            setRefreshing(false)
            props.loadMore(1)
        }
    }, []);

    const renderItem = ({ item }) => {
        return (
            <ProductCardComponent data={item} />
        );
    };

    const renderFooter = () => {
        return (
            <ActivityIndicator animating={loadingMore} size="large" />
        );
    };

    const handleLoadMore = () => {
        setPage(prevPage => (prevPage + 1))
        setLoadingMore(true)
        props.loadMore(page+1)
        setTimeout(() => {
            setLoadingMore(false)
        }, 5000)
    };

    const handleRefresh = () => {
        setPage(1)
        setRefreshing(true)
        props.loadMore(1)
        setTimeout(() => {
            setRefreshing(false)
        }, 5000)
    };

    return (
        <View>
            <Text style={styles.cardHeading}>
                More To Love
                  </Text>
            <FlatList
                data={props.products}
                style={styles.gridView}
                numColumns={2}
                horizontal={false}
                nestedScrollEnabled
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
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

function mapStateToProps(state) {
    const { products } = state.products;
    return {
        products: products.length > 0 ? products : []
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadMore: (page) => {
            dispatch(ProductActions.getAllProducts(page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeProductsComponent)



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