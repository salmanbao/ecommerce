import React from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import { SafeAreaView } from 'react-navigation'
import { Divider, Button } from 'react-native-elements';
import { RNChipView } from 'react-native-chip-view'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import AllCategoriesComponent from '../../components/Categories/AllCategories'

function CustomDrawerContent(props) {
    const [min, onChangeMin] = React.useState('Min.')
    const [max, onChangeMax] = React.useState('Max')
    const [shipping, setShipping] = React.useState(false)
    const [rating, setRating] = React.useState(false)
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
                            titleStyle={[{ fontSize: 14, fontWeight: '200' }, { color: '#f56a79' }]}
                            selectable={true}
                            selectableStyle={[styles.selectableIconStyle, {
                                top: 7,
                                left: 22,
                                height: 20,
                                width: 20
                            }]}
                            borderRadius={5}
                            height={35}
                            containerStyle={[styles.selectableContainerStyle, { width: 150 }]}
                        />
                    </View>
                    <Text>
                        <Divider style={{ backgroundColor: 'grey', opacity: 0.2, width: Dimensions.get('window').width - 200 }} />
                    </Text>
                    <Text style={[styles.heading, { marginTop: 10, marginBottom: 10 }]}>
                        Special Services And Ratings
                </Text>
                    <View style={styles.row}>
                        <RNChipView
                            title={'Accessories'}
                            onPress={() => {
                                setShipping(!shipping);
                            }}
                            avatar={false}
                            titleStyle={[{ fontSize: 14, fontWeight: '200' }, shipping ? { color: '#f56a79' } : { color: 'grey' }]}
                            selectable={shipping ? true : false}
                            selectableStyle={shipping ? [styles.selectableIconStyle, {
                                top: 7,
                                left: 10,
                                height: 20,
                                width: 20
                            }] : null}
                            cancelable={!shipping ? true : false}
                            cancelableStyle={!shipping ? [styles.cancelableIconStyle, {
                                top: 7,
                                left: 10,
                                height: 20,
                                width: 20,
                            }] : null}
                            borderRadius={5}
                            height={35}
                            containerStyle={shipping ? [styles.selectableContainerStyle, { width: 125 }] : [styles.cancelableContainerStyle, { width: 125 }]}
                        />

                        <RNChipView
                            title={'Rating'}
                            onPress={() => {
                                setRating(!rating);
                            }}
                            avatar={false}
                            titleStyle={[{ fontSize: 14, fontWeight: '200' }, rating ? { color: '#f56a79' } : { color: 'grey' }]}
                            selectable={rating ? true : false}
                            selectableStyle={rating ? [styles.selectableIconStyle, {
                                top: 7,
                                left: 26,
                                height: 20,
                                width: 20
                            }] : null}
                            cancelable={!rating ? true : false}
                            cancelableStyle={!rating ? [styles.cancelableIconStyle, {
                                top: 7,
                                left: 26,
                                height: 20,
                                width: 20,
                            }] : null}
                            borderRadius={5}
                            height={35}
                            containerStyle={rating ? [styles.selectableContainerStyle, { width: 125 }] : [styles.cancelableContainerStyle, { width: 125 }]}
                        />
                    </View>
                    <Text>
                        <Divider style={{ backgroundColor: 'grey', opacity: 0.2, width: Dimensions.get('window').width - 200 }} />
                    </Text>
                    <Text style={styles.heading}>
                        Brands
                </Text>
                    <View style={{ marginTop: 10 }}>
                        <View style={styles.row}>
                            <RNChipView
                                title={"Dell"}
                                onPress={() => {
                                    setBrands(!shipping);
                                }}
                                avatar={false}
                                titleStyle={[{ fontSize: 10, fontWeight: '500', textAlign: 'center' }, shipping ? { color: '#f56a79' } : { color: 'grey' }]}
                                selectable={shipping ? true : false}
                                selectableStyle={shipping ? [styles.selectableIconStyle, {
                                    top: 9,
                                    left: -7,
                                    height: 15,
                                    width: 20
                                }] : null}
                                subContentContainerStyle={{ marginLeft: '25%', width: 50 }}
                                cancelable={!shipping ? true : false}
                                cancelableStyle={!shipping ? [styles.cancelableIconStyle, {
                                    top: 9,
                                    left: -7,
                                    height: 15,
                                    width: 20,
                                }] : null}
                                borderRadius={5}
                                height={35}
                                ellipsizeMode={'tail'}
                                containerStyle={shipping ? [styles.selectableContainerStyle, { width: 75 }] : [styles.cancelableContainerStyle, { width: 75 }]}
                            />
                            <RNChipView
                                title={'INTEL'}
                                onPress={() => {
                                    setShipping(!shipping);
                                }}
                                avatar={false}
                                titleStyle={[{ fontSize: 10, fontWeight: '500', textAlign: 'center' }, shipping ? { color: '#f56a79' } : { color: 'grey' }]}
                                selectable={shipping ? true : false}
                                selectableStyle={shipping ? [styles.selectableIconStyle, {
                                    top: 9,
                                    left: -7,
                                    height: 15,
                                    width: 20
                                }] : null}
                                subContentContainerStyle={{ marginLeft: '25%', width: 50 }}
                                cancelable={!shipping ? true : false}
                                cancelableStyle={!shipping ? [styles.cancelableIconStyle, {
                                    top: 9,
                                    left: -7,
                                    height: 15,
                                    width: 20,
                                }] : null}
                                borderRadius={5}
                                ellipsizeMode={'tail'}
                                height={35}
                                containerStyle={shipping ? [styles.selectableContainerStyle, { width: 75 }] : [styles.cancelableContainerStyle, { width: 75 }]}
                            />
                            <RNChipView
                                title={'IBM'}
                                onPress={() => {
                                    setShipping(!shipping);
                                }}
                                avatar={false}
                                titleStyle={[{ fontSize: 10, fontWeight: '500' }, shipping ? { color: '#f56a79' } : { color: 'grey' }]}
                                selectable={shipping ? true : false}
                                selectableStyle={shipping ? [styles.selectableIconStyle, {
                                    top: 9,
                                    left: -7,
                                    height: 15,
                                    width: 20
                                }] : null}
                                subContentContainerStyle={{ marginLeft: '25%', width: 50 }}
                                cancelable={!shipping ? true : false}
                                cancelableStyle={!shipping ? [styles.cancelableIconStyle, {
                                    top: 9,
                                    left: -7,
                                    height: 15,
                                    width: 20,
                                }] : null}
                                borderRadius={5}
                                height={35}
                                ellipsizeMode='tail'
                                containerStyle={shipping ? [styles.selectableContainerStyle, { width: 75 }] : [styles.cancelableContainerStyle, { width: 75 }]}
                            />
                        </View>
                        <View style={styles.row}>
                            <RNChipView
                                title={'HP'}
                                onPress={() => {
                                    setShipping(!shipping);
                                }}
                                avatar={false}
                                titleStyle={[{ fontSize: 8, fontWeight: '500' }, shipping ? { color: '#f56a79' } : { color: 'grey' }]}
                                selectable={shipping ? true : false}
                                selectableStyle={shipping ? [styles.selectableIconStyle, {
                                    top: 9,
                                    left: -7,
                                    height: 15,
                                    width: 20
                                }] : null}
                                subContentContainerStyle={{ marginLeft: '25%', width: 50 }}
                                cancelable={!shipping ? true : false}
                                cancelableStyle={!shipping ? [styles.cancelableIconStyle, {
                                    top: 9,
                                    left: -7,
                                    height: 15,
                                    width: 20,
                                }] : null}
                                borderRadius={5}
                                ellipsizeMode={'tail'}
                                height={35}
                                containerStyle={shipping ? [styles.selectableContainerStyle, { width: 75 }] : [styles.cancelableContainerStyle, { width: 75 }]}
                            />
                            <RNChipView
                                title={'ASUS'}
                                onPress={() => {
                                    setShipping(!shipping);
                                }}
                                avatar={false}
                                titleStyle={[{ fontSize: 10, fontWeight: '500', textAlign: 'center' }, shipping ? { color: '#f56a79' } : { color: 'grey' }]}
                                selectable={shipping ? true : false}
                                selectableStyle={shipping ? [styles.selectableIconStyle, {
                                    top: 9,
                                    left: -7,
                                    height: 15,
                                    width: 20
                                }] : null}
                                subContentContainerStyle={{ marginLeft: '25%', width: 50 }}
                                cancelable={!shipping ? true : false}
                                cancelableStyle={!shipping ? [styles.cancelableIconStyle, {
                                    top: 9,
                                    left: -7,
                                    height: 15,
                                    width: 20,
                                }] : null}
                                borderRadius={5}
                                ellipsizeMode={'tail'}
                                height={35}
                                containerStyle={shipping ? [styles.selectableContainerStyle, { width: 75 }] : [styles.cancelableContainerStyle, { width: 75 }]}
                            />
                            <RNChipView
                                title={'APPLE'}
                                onPress={() => {
                                    setShipping(!shipping);
                                }}
                                avatar={false}
                                titleStyle={[{ fontSize: 10, fontWeight: '500' }, shipping ? { color: '#f56a79' } : { color: 'grey' }]}
                                selectable={shipping ? true : false}
                                selectableStyle={shipping ? [styles.selectableIconStyle, {
                                    top: 9,
                                    left: -7,
                                    height: 15,
                                    width: 20
                                }] : null}
                                subContentContainerStyle={{ marginLeft: '25%', width: 50 }}
                                cancelable={!shipping ? true : false}
                                cancelableStyle={!shipping ? [styles.cancelableIconStyle, {
                                    top: 9,
                                    left: -7,
                                    height: 15,
                                    width: 20,
                                }] : null}
                                borderRadius={5}
                                height={35}
                                ellipsizeMode='tail'
                                containerStyle={shipping ? [styles.selectableContainerStyle, { width: 75 }] : [styles.cancelableContainerStyle, { width: 75 }]}
                            />
                        </View>
                    </View>
                    <Text>
                        <Divider style={{ backgroundColor: 'grey', opacity: 0.2, width: Dimensions.get('window').width - 200 }} />
                    </Text>
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

const styles = StyleSheet.create({
    bottomRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    row: {
        display: 'flex',
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
        color: '#f56a79'
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
        color: 'grey'
    },
    cancelableIconStyle: {
        backgroundColor: 'grey',
        borderTopRightRadius: 0,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 0
    }


});


const Drawer = createDrawerNavigator();

const Products = ({ navigation }) => (

    <Drawer.Navigator initialRouteName="categories" headerMode="none" drawerPosition={"right"} Options={{ title: 'Hack' }} drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="categories" component={AllCategoriesComponent} />
    </Drawer.Navigator>
)

export default Products;

