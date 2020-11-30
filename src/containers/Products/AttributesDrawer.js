import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import { SafeAreaView } from 'react-navigation'
import { Divider, Button } from 'react-native-elements';
import { RNChipView } from 'react-native-chip-view'
import { connect, useDispatch } from 'react-redux';
import {
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import ProductActions from '../../stores/Products/Actions';

function CustomDrawerContent(props) {
    const dispatch = useDispatch()
    const [min, onChangeMin] = useState('Min.')
    const [max, onChangeMax] = useState('Max')
    const [shipping, setShipping] = useState(false)

    useEffect(() => {
        return () => {
            onChangeMin('');
            onChangeMax('');
            setShipping(false);
        }
    },[])

    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <DrawerContentScrollView {...props}>
                <SafeAreaView style={{ marginHorizontal: '4%', marginVertical: '4%' }}>
                    <View>
                        <Text style={styles.heading}>
                            Categories
                    </Text>
                    </View>
                    <View style={{ marginVertical: '4%' }}>
                        <RNChipView
                            title={'Accessories'}
                            avatar={false}
                            titleStyle={{ fontSize: 14, fontWeight: '200', color: '#f56a79' }}
                            selectable={true}
                            selectableStyle={{
                                ...styles.selectableIconStyle,
                                top: 7,
                                left: 22,
                                height: 20,
                                width: 20
                            }}
                            borderRadius={5}
                            height={35}
                            containerStyle={{ ...styles.selectableContainerStyle, width: 150 }}
                        />
                    </View>
                    <Text>
                        <Divider style={{ backgroundColor: 'grey', opacity: 0.2, width: Dimensions.get('window').width - 200 }} />
                    </Text>
                    {
                        props.attributes.map(attribute =>
                            (
                                <View key={attribute.id}>
                                    <Text style={[styles.heading, { marginTop: 10, marginBottom: 10 }]}>{attribute.name}</Text>
                                    <View style={styles.row}>
                                        {
                                            attribute.terms.map(term =>
                                                (
                                                    <RNChipView
                                                        key={term.id}
                                                        title={term.name}
                                                        onPress={() => { props.filterByAttribute(term.id, props.categoryId) }}
                                                        avatar={false}
                                                        titleStyle={{ fontSize: 10 }, shipping ? { color: '#f56a79' } : { color: 'grey' }}
                                                        selectable={shipping ? true : false}
                                                        selectableStyle={shipping ? {
                                                            ...styles.selectableIconStyle,
                                                            top: 7,
                                                            left: 10,
                                                            height: 20,
                                                            width: 20
                                                        } : null}
                                                        cancelable={!shipping ? true : false}
                                                        cancelableStyle={!shipping ? {
                                                            ...styles.cancelableIconStyle,
                                                            top: 14,
                                                            left: 95,
                                                            height: 20,
                                                            width: 20,
                                                            position: 'absolute'
                                                        } : null}
                                                        borderRadius={5}
                                                        height={35}
                                                        containerStyle={shipping ? { ...styles.selectableContainerStyle, width: 125 } : { ...styles.cancelableContainerStyle, width: 125 }}
                                                    />
                                                )
                                            )
                                        }
                                    </View>
                                    <Text>
                                        <Divider style={{ backgroundColor: 'grey', opacity: 0.2, width: Dimensions.get('window').width - 200 }} />
                                    </Text>
                                </View>
                            )
                        )
                    }



                    <Text style={[styles.heading, { marginTop: 10, marginBottom: 10 }]}>
                        Price
                </Text>
                    <View style={styles.row}>
                        <TextInput
                            keyboardType='number-pad'
                            clearTextOnFocus={true}
                            textAlign={'center'}
                            style={{ height: 35, width: 125, borderColor: 'gray', borderWidth: 1, borderRadius: 5 }}
                            onChangeText={text => onChangeMin(text)}
                            value={min}
                        />
                        <TextInput
                            clearTextOnFocus={true}
                            keyboardType='number-pad'
                            textAlign={'center'}
                            style={{ height: 35, width: 125, borderColor: 'gray', borderWidth: 1, borderRadius: 5 }}
                            onChangeText={text => onChangeMax(text)}
                            value={max}
                        />
                    </View>

                </SafeAreaView>
            </DrawerContentScrollView>
            <View style={styles.bottomRow}>
                <Button
                    title="Reset"
                    buttonStyle={{ width: 150, backgroundColor: '#f0adad' }}
                />
                <Button
                    title="Done"
                    buttonStyle={{ width: 150, backgroundColor: '#f56a79', borderRadius: 0 }}
                />
            </View>
        </View>
    );
}

function mapStateToProps({ products }) {
    const { attributes } = products;
    const { categoryId } = products;
    return {
        attributes: attributes.length ? attributes : [],
        categoryId
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterByAttribute: (term_id, category_id) => {
            dispatch(ProductActions.filterByAttribute(term_id, category_id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawerContent)

const styles = StyleSheet.create({
    bottomRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    row: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    },
    containHeader: {
        paddingTop: '4%',
        paddingBottom: '4%'
    },
    heading: {
        fontSize: 16,
        fontWeight: '500'
    },
    selectableContainerStyle: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#f56a79',
        color: '#f56a79',
        marginBottom: 5
    },
    selectableIconStyle: {
        backgroundColor: '#f56a79',
        borderTopRightRadius: 0,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 0
    },
    cancelableContainerStyle: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'grey',
        color: 'grey',
        marginBottom: 5
    },
    cancelableIconStyle: {
        backgroundColor: 'grey',
        borderTopRightRadius: 0,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 0
    }
});

