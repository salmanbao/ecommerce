import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBarWithBackComponent from '../SearchBarWithBack/SearchBarWithBack';
import { useNavigation } from '@react-navigation/native';
import MatchingComponent from './Matching';
import ToggleViewComponent from './ToggleView';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import ProductsByCategoryComponent from './../Products/ProductsByCategory';
import { LinearGradient } from 'expo-linear-gradient';

export default function AllCategoriesComponent({ navigation }) {
    const route_navigation = useNavigation()
    
    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <SearchBarWithBackComponent navigation={route_navigation} />
            <View style={styles.lists}>
                <MatchingComponent />
                <ToggleViewComponent />
                <View style={styles.lists}>
                    <Button
                        type='clear'
                        onPress={() => { navigation.openDrawer() }}
                        buttonStyle={{ height: 30, marginTop: 4 }}
                        icon={
                            <FontAwesomeIcon name="filter" size={14} color="#f56a79" />
                        }
                        title="Filter"
                        titleStyle={styles.title}
                    />
                </View>
            </View>
            <LinearGradient
                colors={['white', '#f3f9fb']}>
                <ProductsByCategoryComponent />
            </LinearGradient>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    lists: {
        display: 'flex',
        flexDirection: 'row',
        zIndex: 1
    },
    title: {
        fontSize: 14,
        marginVertical: 0,
        marginHorizontal: 3,
        textDecorationLine: 'underline',
        color: '#f56a79'
    }
})
