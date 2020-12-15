import React, { useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import ProductCardComponent from './ProductCard';
import { connect } from 'react-redux';


function ViewMore() {
    return (
        <View style={styles.viewMoreRow}>
            <Text style={{ color: 'grey' }} onPress={() => { console.log('View More') }} >
                View More
            </Text>
        </View>
    );
}

function TopRankingsComponent({ categories}) {
    useEffect(() => {
        return ()=>{
        }
    }, [])
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
                    categories.map((top, index) => {
                        return (
                            <ProductCardComponent key={index} data={top} />
                        );
                    })
                }
            </View>
        </Card>
    );
}

function mapStateToProps(state) {
    const { top } = state.products;
    return {
        categories: top.slice(0, 3)
    };
}


export default connect(mapStateToProps, null)(TopRankingsComponent)



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