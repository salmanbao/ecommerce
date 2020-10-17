import React from 'react';
import { SearchBar } from 'react-native-elements';
import { Platform, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

/*
https://reactnativeelements.com/docs/searchbar
*/
export default class SearchBarWithBackComponent extends React.Component {
    state = {
        search: '',
    };


    updateSearch = (search) => {
        this.setState({ search });
    };

    clearSearch = () => {
        this.setState({
            search: ''
        })
    }

    cancel = () => {
        console.log('On Cancel fired')
    }

    render() {
        const { search } = this.state;
        const { navigation } = this.props
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
                    onChangeText={this.updateSearch}
                    onClear={this.clearSearch}
                    onCancel={this.cancel}
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
}
const styles = StyleSheet.create({
    search: {
        display: "flex",
        flexDirection: 'row',
    }
})