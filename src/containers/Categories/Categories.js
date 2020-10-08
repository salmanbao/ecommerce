import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBarWithBackComponent from './../../components/SearchBarWithBack/SearchBarWithBack';
import CategoriesSideListComponent from '../../components/CategoriesSideList/CategoriesSideList'

const CategoriesContainer = ({ navigation }) => {
  return (
    <SafeAreaView >
      <StatusBar translucent  barStyle="dark-content" />
      <SearchBarWithBackComponent navigation={navigation} />
      <View style={styles.lists}>
        <CategoriesSideListComponent />
      </View>
    </SafeAreaView>
  )

}

export default CategoriesContainer;

const styles = StyleSheet.create({
  lists: {
    display: 'flex',
    flexDirection: 'row'
  }
})