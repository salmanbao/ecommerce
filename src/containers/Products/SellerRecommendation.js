import React from 'react';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, ActivityIndicator, FlatList, Pressable } from 'react-native';
import { Image } from 'react-native-elements';



const SellerRecommendation = (props) => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => {
        return (
            <Pressable
                onPress={() => {
                    navigation.push('products', {
                        screen: 'product_details',
                        params: { data: item }
                    })
                }}
                style={{ display: 'flex', flexDirection: 'column' }}>
                <Image
                    resizeMode={'contain'}
                    source={{ uri: item.images[0]['src'], cache: 'force-cache' }}
                    style={{ width: 100, height: 100 }}
                    PlaceholderContent={<ActivityIndicator />}
                />
                <Text style={{ textAlign: 'center', marginTop: 3, fontSize: 12, color: 'grey' }}>
                    ر.ع {item.price}
                </Text>
            </Pressable>
        );
    }


    return (
        <View style={styles.row}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 16, fontWeight: '700' }}>Seller Recommendations</Text>
                <Text style={{ fontSize: 12, textDecorationLine: 'underline', color: '#85C1E9' }}>All Products</Text>
            </View>
            <FlatList
                data={props.products}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
            />
        </View>
    );
};

function mapStateToProps({ products }) {
    return { products: products['products'].slice(0, 5) }
}

export default connect(mapStateToProps, null)(SellerRecommendation)

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'column',
        marginHorizontal: 15,
        marginVertical: 15,
        backgroundColor: 'white',
    },

})