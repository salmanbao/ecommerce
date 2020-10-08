import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Timer from './Timer';
import ProductCardComponent from './ProductCard';

const deals = [
    {
        off: '-30%',
        sold: 24,
        price: 288.54,
        image: 'https://placeimg.com/640/480/any'
    },
    {
        off: '-30%',
        sold: 24,
        price: 288.54,
        image: 'https://placeimg.com/640/480/any'
    },
    {
        off: '-30%',
        sold: 24,
        price: 288.54,
        image: 'https://placeimg.com/640/480/any'
    },
];

export default function FlashDealsComponent() {
    return (
        <Card containerStyle={styles.card} >
            <View style={styles.cardHeader}>
                <View style={styles.iconWithText}>
                    <MaterialCommunityIcon
                        type='material-community'
                        reverse={true}
                        name='flash-circle'
                        size={18}
                        color="#f56a79"
                    />
                    <Text style={styles.cardHeading}>Flash Deals</Text>
                </View>
                <Timer />
            </View>
            <Text style={styles.lightText}>Hot now at up to 90% off</Text>
            <View style={styles.flashdeals}>
                {
                    deals.map((deal, index) => {
                        return (
                            <ProductCardComponent key={index} data={deal} />
                        );
                    })
                }
            </View>
        </Card>
    );
}


const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flex: 1,
        marginHorizontal: 8,
        marginVertical: 0,
        borderRadius: 10,
    },
    cardHeader: {
        flex: 1,
        flexDirection: 'row',
    },
    iconWithText: {
        display: 'flex',
        flexDirection: 'row'
    },
    cardHeading: {
        marginHorizontal: 5,
        paddingTop: 2,
        fontWeight: 'bold',
    },
    lightText: {
        fontWeight: '100'
    },
    flashdeals: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});