import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { Platform, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

/*
https://reactnativeelements.com/docs/searchbar
*/
export default function SearchBarWithBackComponent({ navigation: { goBack } }) {

    const [search, setSearch] = useState('')

    const updateSearch = (search) => {
            setSearch(search) ;
        };

    const clearSearch = () => {
       setSearch('')
    }

    cancel = () => {
        console.log('On Cancel fired')
    }

    return (
        <View style={styles.search}>
            <Button
                type='clear'
                onPress={() => {
                    console.log('go back') 
                    goBack(null)
                 }}
                buttonStyle={{ height: 30, width: 30, borderRadius: 50, marginVertical: 5 }}
                icon={
                    <FontAwesomeIcon
                        type='font-awesome-5'
                        reverse={true}
                        name='arrow-left'
                        size={15}
                        color="grey"
                    />
                }
            />
            <SearchBar
                placeholder="shoes for women"
                onChangeText={updateSearch}
                onClear={clearSearch}
                onCancel={cancel}
                clearIcon={false}
                platform={Platform.OS}
                round={Platform.OS}
                showLoading={false}
                showCancel={true}
                value={search}
                cancelButtonProps={{ color: 'black' }}
                containerStyle={{ marginVertical: 5, borderRadius: 40, backgroundColor: 'white', height: 30, width: '90%' }}
                inputContainerStyle={{ borderRadius: 40, backgroundColor: 'white' }}
                inputStyle={{ borderRadius: 40, backgroundColor: 'white' }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    search: {
        display: "flex",
        flexDirection: 'row',
    }
})