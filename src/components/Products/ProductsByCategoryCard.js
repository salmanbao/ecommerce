import React, { useState ,useEffect} from "react";
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import ImageBlurLoading from 'react-native-image-blur-loading';
import { Icon, Overlay } from 'react-native-elements';
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from '@react-navigation/native';
import ProductActions from '../../stores/Products/Actions';

export default function ProductsByCategoryCardComponent({ data }) {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [visible, setVisible] = useState(false);
    const [discountPercentage,setDiscount] = useState((((data.regular_price - data.sale_price) / data.regular_price) * 100).toFixed(2))


    useEffect(()=>{
        return ()=>{
            setVisible(false);
            setDiscount(null)
        }
    })
    const toggleOverlay = () => {
        setVisible(!visible);
    };

    const navigateToDetails = () => {
        dispatch(ProductActions.getProductsByCategory(data.id, 1))
        dispatch(ProductActions.getReviewsByProduct(data.id))
        navigation.navigate('product_details', { data })
    }

    return (
        <Pressable onPress={navigateToDetails}>
            <View style={{ backgroundColor: 'white', marginTop: 10, borderRadius: 8 }}>
                <ImageBlurLoading
                    source={{ uri: data.images[0].src, cache: 'force-cache' }}
                    style={styles.image}
                />
                <View style={[styles.productTextBox]}>
                    <Text ellipsizeMode='tail' numberOfLines={1} style={styles.product}>
                        {data.name}
                    </Text>
                    <Text style={styles.price}>
                        ر.ع {data.price}
                    </Text>
                    {data.on_sale &&
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={styles.discountedPrice}>
                                ر.ع {data.regular_price}
                            </Text>
                            <Text style={{ color: 'red', fontSize: 10, marginVertical: 5 }}>
                                {discountPercentage}%
                                </Text>
                        </View>
                    }

                    <View style={{ display: 'flex', flexDirection: 'row', marginHorizontal: 8 }}>
                        <View style={styles.TextBoxFooter}>
                            <Icon
                                name='star'
                                type='font-awesome'
                                color='#f56a79'
                                size={10}
                            />
                            <Text style={styles.solds}>
                                {data.rating_count} | {data.total_sales} Sold
                    </Text>
                        </View>
                        <Icon
                            name='ellipsis-h'
                            type='font-awesome'
                            color='#f50'
                            size={16}
                            onPress={toggleOverlay} />
                        <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={styles.modelStyle}>
                            <SliderBox
                                images={[...data.images.map(i => i.src)]}
                                resizeMode={'contain'}
                                ImageComponentStyle={styles.modelImage}
                            />
                            <View style={styles.modelFooterActions}>
                                <View>
                                    <Icon
                                        raised
                                        name='ios-eye'
                                        type='ionicon'
                                        color='#f50'
                                        size={16}
                                    />
                                    <Text ellipsizeMode='tail' numberOfLines={2} style={{ fontSize: 10, color: 'black', width: 60 }}>
                                        View Details
                                </Text>
                                </View>

                                <View>
                                    <Icon
                                        raised
                                        name='heart-o'
                                        type='font-awesome'
                                        color='#f50'
                                        size={16}
                                    />
                                    <Text ellipsizeMode='tail' numberOfLines={2} style={{ fontSize: 10, color: 'black', width: 60 }}>
                                        Add to wish list
                                </Text>
                                </View>

                                <View>
                                    <Icon
                                        raised
                                        name='pie-chart'
                                        type='font-awesome  '
                                        color='#f50'
                                        size={16}
                                    />
                                    <Text ellipsizeMode='tail' numberOfLines={2} style={{ fontSize: 10, color: 'black', width: 60 }}>
                                        Similar Products
                                </Text>
                                </View>

                            </View>
                        </Overlay>
                    </View>

                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
        height: 350,
        marginTop: 8
    },
    productTextBox: {
        backgroundColor: 'white',
        width: 170,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        top: -5,
    },
    product: {
        color: 'black',
        padding: 5,
        fontSize: 10,
        fontWeight: "normal",
        textAlign: 'left',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5
    },
    discountedPrice: {
        fontSize: 10,
        color: 'grey',
        padding: 5,
        textDecorationLine: 'line-through'
    },
    TextBoxFooter: {
        flex: 1,
        flexDirection: 'row',
    },
    solds: {
        marginHorizontal: 8,
        fontSize: 10,
        color: 'grey'
    },
    modelImage: {
        height: 300,
        marginTop: 8,
    },
    modelStyle: {
        height: 400,
        borderRadius: 10
    },
    modelFooterActions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 20,
        top: -70
    }
}); 