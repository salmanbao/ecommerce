import React from 'react'
import { Text, StyleSheet, View, Pressable } from 'react-native';
import { Colors } from '../../theme'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatGrid } from 'react-native-super-grid';
import ImageBlurLoading from 'react-native-image-blur-loading';
import { useNavigation } from '@react-navigation/native';
import {
    ACCESSORIES,
    CCTV_CAMERAS,
    WIFI_CAMERA,
    SMART_WATCHES,
    WIFI_ROUTER,
    COOKERS,
    CABLES_AND_ADAPTERS,
    EXTERNAL_DATA_STORAGE,
    SMART_DEVICES_AND_SWITCHES
} from './images'

function PopularCategoriesCard({ data }) {
        const navigation = useNavigation()
    return (
        <View>
            <Pressable
            onPress={()=>{navigation.navigate('categories')}}
            >
                <ImageBlurLoading
                    borderRadius={8}
                    source={{ uri: data.image, cache: 'force-cache' }}
                    style={CardStyles.image}
                />
                <View style={[CardStyles.categoryTextBox]}>
                    <Text ellipsizeMode='tail' numberOfLines={2} style={CardStyles.category}>
                        {data.category}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

const CardStyles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
        height: 90,
    },
    categoryTextBox: {
        height: 35,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        top: 0,
    },
    category: {
        color: 'black',
        padding: 5,
        fontSize: 10,
        fontWeight: "500",
        textAlign: 'center',

    }
});


const PopularCategories = (props) => {
    const [categories, setCategories] = React.useState([
        {
            category: 'Accessories',
            image: ACCESSORIES
        },
        {
            category: 'CCTV Cameras',
            image: CCTV_CAMERAS
        },
        {
            category: 'Wi-fi Camera',
            image: WIFI_CAMERA
        },
        {
            category: 'Smart watchs',
            image: SMART_WATCHES
        },
        {
            category: 'WiFi Router',
            image: WIFI_ROUTER
        },
        {
            category: 'Cookers',
            image: COOKERS
        },
        {
            category: 'Cables & Adapters',
            image: CABLES_AND_ADAPTERS
        },
        {
            category: 'External data storage',
            image: EXTERNAL_DATA_STORAGE
        },
        {
            category: 'Smart Devices & Switches',
            image: SMART_DEVICES_AND_SWITCHES
        }
    ])
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.sub_container}>
                <Text style={styles.heading}>Recommended Categories</Text>
                <FlatGrid
                    itemDimension={65}
                    data={categories}
                    style={styles.gridView}
                    spacing={5}
                    renderItem={({ item }) => (
                        <PopularCategoriesCard data={item} />
                    )}
                />
            </View>
        </SafeAreaView>
    )

}

export default PopularCategories;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.white,
    },
    sub_container: {
        marginHorizontal: 10
    },
    heading: {
        fontSize: 16,
        alignSelf: 'flex-start'
    },
    gridView: {
        flex: 1,
        marginTop: 10,
    },
})