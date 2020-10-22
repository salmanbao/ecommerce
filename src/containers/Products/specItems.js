import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { material } from 'react-native-typography';

export const SpecItem = ({
    title,
    item,
    isHeader,
    isLast,
    isRed,
    onPress,
}) => {
    return (
        <TouchableOpacity
            onPress={
                onPress
                    ? () => onPress(item)
                    : () => {
                        return false;
                    }
            }
            activeOpacity={isHeader ? 1.0 : 0.6}
            style={[
                Styles.itemContainer,
                { borderTopWidth: isHeader ? 0 : 1, borderBottomWidth: isLast ? 1 : 0 },
            ]}>
            <View
                style={[
                    Styles.item,
                    { justifyContent: isHeader ? 'center' : 'flex-start' },
                ]}>
                <Text
                    style={[
                        isHeader
                            ? {
                                ...material.headline,
                            }
                            : {
                                ...material.subheading,
                            },
                        {
                            color: isRed ? 'red' : 'black',
                            fontSize:18
                        },
                    ]}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export const Specifications = ({leftText,rightText})=>{


    return (
        <View style={Styles.row}>
            <Text 
            numberOfLines={2}
            style={Styles.leftText}>
                {leftText}
            </Text>
            
            <Text style={Styles.rightText}>
                {rightText}
            </Text>
        </View>
    );

}

const Styles = StyleSheet.create({
    itemContainer: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderTopColor: '#e6eced',
        borderBottomColor: '#e6eced',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    row:{
        flex:1,
        flexDirection:'row',
        marginHorizontal:15
    },
    leftText:{
        color:'grey',
        width:'35%'
    },
    rightText:{
        width:'70%'
    }
});