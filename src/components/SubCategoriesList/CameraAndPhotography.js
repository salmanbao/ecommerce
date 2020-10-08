import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import ImageBlurLoading from 'react-native-image-blur-loading';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatGrid } from 'react-native-super-grid';
import { Colors } from '../../theme'

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
            image: 'https://www.vippng.com/png/detail/41-419003_cctv-camera-images-png-cctv-cameras.png'
        },
        {
            category: 'Digital Cameras',
            image: 'https://www.bnwcollections.com/image/cache/catalog/canon-eos-r6-mirrorless-digital-camera-with-600mm-f-11-is-stm-lens-price-in-pakistan-img1-800x800-0-.jpg'
        },
        {
            category: 'Power Supply',
            image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5622/5622834_sd.jpg'
        },
        {
            category: 'Wifi Camera',
            image: 'https://www.symbios.pk/image/cache/data/i/intelipcamera_1-500x500.jpg'
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