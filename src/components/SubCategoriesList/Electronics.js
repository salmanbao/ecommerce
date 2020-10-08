import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from '../../theme'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatGrid } from 'react-native-super-grid';
import ImageBlurLoading from 'react-native-image-blur-loading';

function ElectronicsCard({ data }) {

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

const Electronics = (props) => {
    const [categories, setCategories] = React.useState([
        {
            category: 'Audio Cables',
            image: 'https://ae01.alicdn.com/kf/HLB14pG0NZfpK1RjSZFOq6y6nFXax/3-5mm-Female-Stereo-to-2-RCA-Male-Plug-Aux-Audio-Headphone-Jack-Converter-Adapter-Cable.jpg'
        },
        {
            category: 'Audio Visual » Extenders',
            image: 'https://www.serveredge.com/media/catalog/category/HD-EX-XX-HDBT_web_edited_1.jpg'
        },
        {
            category: 'Electrical Equipment & Supplies',
            image: 'https://ae01.alicdn.com/kf/HTB180E9JgHqK1RjSZFEq6AGMXXa9/SUSAN-735MP-600W-Ultrasonic-Inverter-Electrical-Equipment-Power-Supplies.jpg'
        },
        {
            category: 'Google Play Gift Cards',
            image: 'https://www.cellphoneage.com/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/g/o/google_store_10usd_recharge_card_1600x1600_1.jpg'
        },
        {
            category: 'Home',
            image: 'https://www.alfatah.com.pk/wp-content/uploads/2017/11/Home-Appliances-870x460-1.jpg'
        },
        {
            category: 'Itune Gift Card',
            image: 'https://www.qmart.pk/image/cache/cache/1001-2000/1215/additional/0e3d-itunes_gift_cards-0-1-550x550w.jpg'
        },
        {
            category: 'Lights & Lighting',
            image: 'https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/0d78c356-2642-468f-acde-b382d84f29a4'
        },
        {
            category: 'Multimedia Speaker',
            image: 'https://www.tejar.pk/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/b/o/bose_companion_2_series_iii_multimedia_speaker_system1_-_tejar.jpg'
        },
        {
            category: 'Security and Safety',
            image: 'https://placeimg.com/640/480/any'
        },
        {
            category: 'Smart watches',
            image: 'https://www.adorama.com/images/Large/lfid205l.jpg'
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
                        <ElectronicsCard data={item} />
                    )}
                />
            </View>
        </SafeAreaView>
    )

}

export default Electronics;

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