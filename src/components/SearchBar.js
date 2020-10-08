import React from 'react';
import { SearchBar } from 'react-native-elements';
import { Platform } from 'react-native';

/*
https://reactnativeelements.com/docs/searchbar
*/
export default class SearchComponent extends React.Component {
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

        return (
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
                containerStyle={{marginHorizontal:10,marginVertical:5, borderRadius: 40, backgroundColor: 'white',height:30 }}
                inputContainerStyle={{ borderRadius: 40, backgroundColor: 'white' }}
                inputStyle={{ borderRadius: 40, backgroundColor: 'white' }}
            />
        );
    }
}