import React from 'react'
import { Text, StyleSheet, View } from 'react-native';
import { Colors } from '../../theme'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatGrid } from 'react-native-super-grid';
import ImageBlurLoading from 'react-native-image-blur-loading';
import {
    MOBILE_CHARGING_AND_CABLES,
    ACCESSORIES,
    CCTV_CAMERAS,
    WIFI_CAMERA,
    CAR_ELECTRICAL_APPLIANCES,
    WIRELESS_BLUETOOTH,
    COOKERS,
    CABLES_AND_ADAPTERS,
} from './images';


function ClassicToysCard({ data }) {

    return (
        <View >
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
const ClassicToys = (props) => {
    const [categories, setCategories] = React.useState([
        {
            category: 'Mobile Charging & Cables',
            image: MOBILE_CHARGING_AND_CABLES
        },
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
            category: 'Car Electrical Appliances',
            image: CAR_ELECTRICAL_APPLIANCES
        },
        {
            category: 'Wireless Bluetooth',
            image: WIRELESS_BLUETOOTH
        },
        {
            category: 'Cookers',
            image: COOKERS
        },
        {
            category: 'Cables & Adapters',
            image: CABLES_AND_ADAPTERS
        }
    ])
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.sub_container}>
                <FlatGrid
                    itemDimension={65}
                    data={categories}
                    style={styles.gridView}
                    spacing={5}
                    renderItem={({ item }) => (
                        <ClassicToysCard data={item} />
                    )}
                />
            </View>
        </SafeAreaView>
    )

}

export default ClassicToys;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.white,
    },
    sub_container: {
        marginHorizontal: 10
    },
    gridView: {
        flex: 1,
        marginTop: 10,
    },
})