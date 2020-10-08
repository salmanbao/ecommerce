import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import ImageBlurLoading from 'react-native-image-blur-loading';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatGrid } from 'react-native-super-grid';
import { Colors } from '../../theme'
import {
    CCTV_CAMERAS,
    DIGITAL_CAMERAS,
    POWER_SUPPLY,
    WIFI_CAMERA
} from './images'
function CameraAndPhotographyCard({ data }) {
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


const CameraAndPhotography = (props) => {
    const [categories, setCategories] = React.useState([
        {
            category: 'CCTV Cameras',
            image: CCTV_CAMERAS
        },
        {
            category: 'Digital Cameras',
            image: DIGITAL_CAMERAS
        },
        {
            category: 'Power Supply',
            image: POWER_SUPPLY
        },
        {
            category: 'Wifi Camera',
            image: WIFI_CAMERA
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
                        <CameraAndPhotographyCard data={item} />
                    )}
                />
            </View>
        </SafeAreaView>
    )

}

export default CameraAndPhotography;

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