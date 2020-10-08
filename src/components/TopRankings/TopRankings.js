import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import ProductCardComponent from './ProductCard';

const topRankings = [
    {
        category: 'New - Artificial & Dried Flowers',
        increased: 243254,
        interested: 0,
        image: 'https://placeimg.com/640/480/any'
    },
    {
        category: 'Sport Quartz Wristwatches',
        increased: 247553,
        interested: 0,
        image: 'https://placeimg.com/640/480/any'
    },
    {
        category: 'Mobile Phone Chargers',
        increased: 0,
        interested: 43645,
        image: 'https://placeimg.com/640/480/any'
    },
];

function ViewMore() {
    return (
        <View style={styles.viewMoreRow}>
            <Text style={{color:'grey'}} onPress={()=>{console.log('View More')}} >
                View More
            </Text>
        </View>
    );
}

export default function TopRankingsComponent() {
    return (
        <Card containerStyle={styles.card} >
            <View style={styles.cardHeader}>
                <View style={styles.iconWithText}>
                    <Text style={styles.cardHeading}>Top Rankings</Text>
                </View>
            <ViewMore />
            </View>
            <View style={styles.topRankings}>
                {
                    topRankings.map((top, index) => {
                        return (
                            <ProductCardComponent key={index} data={top} />
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
        marginVertical: 10,
        borderRadius: 10,
    },
    cardHeader: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 8
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
    topRankings: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    viewMoreRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
});