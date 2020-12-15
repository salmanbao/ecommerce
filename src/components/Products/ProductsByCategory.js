import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import ProductsByCategoryCardComponent from './ProductsByCategoryCard';
import { View, StyleSheet, Text, FlatList, ActivityIndicator, Dimensions } from 'react-native';
import ProductActions from '../../stores/Products/Actions';
import AntDesign from 'react-native-vector-icons/AntDesign';

function ProductsByCategoryComponent(props) {
    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        return () => {
            setPage(0);
            setLoadingMore(false);
            setRefreshing(false)
        }
    }, []);

    const renderItem = ({ item }) => {
        return (
            <ProductsByCategoryCardComponent data={item} />
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
        props.loadMore(props.categoryId, page + 1)
        setTimeout(() => {
            setLoadingMore(false)
        }, 5000)
    };

    const handleRefresh = () => {
        setPage(1)
        setRefreshing(true)
        props.loadMore(props.categoryId, 1)
        setTimeout(() => {
            setRefreshing(false)
        }, 5000)
    };

    return (
        <View style={{ height: '100%' }}>
            {props.products.length > 0 ?
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
                :
                <View style={{flex:1}}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                        <AntDesign
                            name='bars'
                            size={100}
                            color="#e6e6e6"
                        />
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{ color: '#bbbbbb' }}>No products added</Text>
                    </View>

                </View> 
            }
        </View>
    );
}

function mapStateToProps(state) {
    const { productsByCategory } = state.products;
    const { categoryId } = state.products;
    return {
        products: productsByCategory[categoryId] === undefined || productsByCategory[categoryId].length > 0  ? [] : productsByCategory[categoryId]
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadMore: (categoryId, page) => {
            dispatch(ProductActions.getProductsByCategory(categoryId, page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsByCategoryComponent)


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