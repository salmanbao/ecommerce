import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Seperator } from './seperator';
import { ListItem, Button } from 'react-native-elements';

export const Shipping = () => {
    return (
        <View style={{ display: 'flex', flexDirection: 'column' }}>
            <View style={{ height: 15, backgroundColor: '#fafafa' }} />
            <View style={styles.row}>
                <Text style={{ fontSize: 14, fontWeight: '600' }}>
                    Free Shipping
                    </Text>
                <Text style={{ color: 'grey', marginTop: 5 }}>
                    To Pakistan via Salalah Bazaar Standard Shipping
                    </Text>
            </View>
            <Seperator />
            <ListItem onPress={() => { console.log('Shipping clicked') }}>
                <ListItem.Content>
                    <ListItem.Title style={{ fontWeight: '600', fontSize: 14 }}>Service</ListItem.Title>
                    <ListItem.Subtitle style={{ color: 'grey', fontSize: 12, marginTop: 4 }}>90-day Buyer Protection</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            <View style={{ height: 15, backgroundColor: '#fafafa' }} />

        </View>
    );
};

const styles = StyleSheet.create({
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        display: 'flex',
        flexDirection: 'column',
        marginHorizontal: 15,
        marginVertical: 15,
        backgroundColor: 'white',
    },
})