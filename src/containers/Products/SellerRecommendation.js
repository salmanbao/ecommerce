import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { StyleSheet, View, Text, ActivityIndicator, FlatList } from 'react-native';
import { Image } from 'react-native-elements';

const renderItem = ({ item }) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'column' }}>
            <Image
                resizeMode={'contain'}
                source={{ uri: item.images[0]['src'], cache: 'force-cache' }}
                style={{ width: 100, height: 100 }}
                PlaceholderContent={<ActivityIndicator />}
            />
            <Text style={{ textAlign: 'center', marginTop: 3, fontSize: 12, color: 'grey' }}>
                ر.ع {item.price}
            </Text>

        </View>
    );
}


const SellerRecommendation = (props) => {
    const [products, setProducts] = useState(props.products)
    useEffect(() => {
        return () => {
            setProducts([])
        }
    })

    return (
        <View style={styles.row}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 16, fontWeight: '700' }}>Seller Recommendations</Text>
                <Text style={{ fontSize: 12, textDecorationLine: 'underline', color: '#85C1E9' }}>All Products</Text>
            </View>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
            />
        </View>
    );
};

function mapStateToProps({ products }) {
    return { products: products['products'].slice(0, 5) }
}

export default connect(mapStateToProps)(SellerRecommendation)

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'column',
        marginHorizontal: 15,
        marginVertical: 15,
        backgroundColor: 'white',
    },

})