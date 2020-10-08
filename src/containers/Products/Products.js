import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBarWithBackComponent from './../../components/SearchBarWithBack/SearchBarWithBack';
import MatchingComponent from './../../components/Products/Matching';

const Products = ({ navigation }) => (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
        <SearchBarWithBackComponent navigation={navigation} />
        <View style={styles.lists}>
            <MatchingComponent />
        </View>
    </SafeAreaView>
)

export default Products;

const styles = StyleSheet.create({
    lists: {
        display: 'flex',
        flexDirection: 'row'
    }
})