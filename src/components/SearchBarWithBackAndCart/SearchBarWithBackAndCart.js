import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, View } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import { Icon, withBadge, Button, SearchBar } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';

/*
https://reactnativeelements.com/docs/searchbar
*/
function SearchBarWithBackAndCartComponent({ navigation,carts}) {
    // const navigation = useNavigation()
    const [search, setSearch] = useState('')
    const [menu, setMenu] = useState(false)
    const BadgedIcon = withBadge(carts)(Icon)

    useEffect(() => {
        return () => {
            setSearch('');
            setMenu(false)
        }
    })
    return (
        <View style={styles.search}>
            <Button
                type='clear'
                onPress={() => { navigation.goBack() }}
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
                onChangeText={(search) => setSearch(search)}
                onClear={() => setSearch('')}
                onCancel={() => { console.log('On Cancel Fired') }}
                clearIcon={false}
                platform={Platform.OS}
                round={Platform.OS}
                showLoading={false}
                showCancel={true}
                value={search}
                cancelButtonProps={{ color: 'black' }}
                containerStyle={{ marginVertical: 5, borderRadius: 40, backgroundColor: 'white', height: 30, width: '60%' }}
                inputContainerStyle={{ borderRadius: 40, backgroundColor: 'white' }}
                inputStyle={{ borderRadius: 40, backgroundColor: 'white' }}
            />

            <BadgedIcon
             type="ionicon"
              name="ios-cart" 
              color={'#f50'} 
              containerStyle={{ marginVertical: 8, marginLeft: 5 }}
                onPress={() => {
                    navigation.navigate('cart_products')
                }
            }
                />

            <Icon
                name='share-outline'
                type='material-community'
                color='#f50'
                style={{ marginVertical: 8, marginLeft: 5 }}
                onPress={() => console.log('hello')} />

            <DropDownPicker
                isVisible={menu}
                items={[
                    { label: 'Messages', value: 'messages', icon: () => <Icon name="chat-bubble" size={18} color="#f56a79" /> },
                    { label: 'Home', value: 'home', icon: () => <Icon name="home" size={18} color="#f56a79" /> },
                    { label: 'Wish List', value: 'wish_list', icon: () => <Icon type="octicon" name="heart" size={18} color="#f56a79" /> },
                    { label: 'Account', value: 'account', icon: () => <Icon name="person" size={18} color="#f56a79" /> },
                ]}
                selectedLabelStyle={{
                    color: '#f56a79',
                    display: 'none',
                }}
                customArrowUp={() =>
                    <Icon
                        name='kebab-horizontal'
                        type='octicon'
                        color='#f50'
                    />}
                customArrowDown={() =>
                    <Icon
                        name='kebab-horizontal'
                        type='octicon'
                        color='#f50'
                        size={22}
                        style={{ padding: 0 }}
                    />}
                customTickIcon={() => <Feather name="check" size={15} color="#f56a79" />}
                activeLabelStyle={{ color: '#f56a79' }}
                style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{ backgroundColor: '#fafafa', width: 150, right: 10 }}
            // onChangeItem={item => { setCountry(item.value) }}
            />
        </View>
    );
}

function mapStateToProps({ products }) {
    return { carts: products['cart'].length }
}

export default connect(mapStateToProps, null)(SearchBarWithBackAndCartComponent)

const styles = StyleSheet.create({
    search: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})