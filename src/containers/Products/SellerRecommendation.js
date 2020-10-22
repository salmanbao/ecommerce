import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator, FlatList } from 'react-native';
import { Image } from 'react-native-elements';
import { Seperator } from './seperator';
import { ACCESSORIES, AUDIO_CABLES, AUDIO_VISUAL_EXTENDERS, CCTV_CAMERAS, CAR_ELECTRICAL_APPLIANCES, COOKERS, CABLES_AND_ADAPTERS, CHARGER_AND_CABLES } from '../../components/SubCategoriesList/images';

const renderItem = ({ item }) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'column' }}>
            <Image
                resizeMode={'contain'}
                source={{ uri: item.image }}
                style={{ width: 100, height: 100 }}
                PlaceholderContent={<ActivityIndicator />}
            />
            <Text style={{ textAlign: 'center', marginTop: 3, fontSize: 12, color: 'grey' }}>
                {item.price}
            </Text>

        </View>
    );
}


export const SellerRecommendation = () => {
    const [products] = React.useState([
        {
            id: '1',
            image: ACCESSORIES,
            price: '1243.62 PKR'
        },
        {
            id: '2',
            image: AUDIO_CABLES,
            price: '1243.62 PKR'
        },
        {
            id: '3',
            image: AUDIO_VISUAL_EXTENDERS,
            price: '1243.62 PKR'
        },
        {
            id: '4',
            image: CCTV_CAMERAS,
            price: '1243.62 PKR'
        },
        {
            id: '5',
            image: CAR_ELECTRICAL_APPLIANCES,
            price: '1243.62 PKR'
        },
        {
            id: '6',
            image: COOKERS,
            price: '1243.62 PKR'
        },
        {
            id: '7',
            image: CABLES_AND_ADAPTERS,
            price: '1243.62 PKR'
        },
        {
            id: '8',
            image: CHARGER_AND_CABLES,
            price: '1243.62 PKR'
        },
    ])




    return (
        <View style={styles.row}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{fontSize:16,fontWeight:'700'}}>Seller Recommendations</Text>
                <Text style={{fontSize:12,textDecorationLine:'underline',color:'#85C1E9'}}>All Products</Text>
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

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'column',
        marginHorizontal: 15,
        marginVertical: 15,
        backgroundColor: 'white',
    },

})