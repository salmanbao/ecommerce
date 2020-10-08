import React from 'react'
import { Text, StyleSheet,View } from 'react-native'; 
import {  Colors } from '../../theme'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatGrid } from 'react-native-super-grid';
import ImageBlurLoading from 'react-native-image-blur-loading';

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
            image: 'https://m.media-amazon.com/images/I/31JhE7tZQzL.jpg'
        },
        {
            category: 'Accessores',
            image: 'https://image.made-in-china.com/2f0j00raRUIEPHBCqp/Best-Price-Factory-Clear-Stock-Wholesale-Mobile-Phone-Accessories-for-Samsung-Android-Mobile.jpg'
        },
        {
            category: 'CCTV Cameras',
            image: 'https://www.vippng.com/png/detail/41-419003_cctv-camera-images-png-cctv-cameras.png'
        },
        {
            category: 'Wi-fi Camera',
            image: 'https://www.symbios.pk/image/cache/data/i/intelipcamera_1-500x500.jpg'
        },
        {
            category: 'Car Electrical Appliances',
            image: 'https://ae01.alicdn.com/kf/HTB1wnOWXyHrK1Rjy0Flq6AsaFXa1.jpg'
        },
        {
            category: 'Wireless Bluetooth',
            image: 'https://jinnieworld.net/wp-content/uploads/2019/03/I9-TWS.jpeg'
        },
        {
            category: 'Cookers',
            image: 'https://brain-images-ssl.cdn.dixons.com/1/6/10194261/u_10194261.jpg'
        },
        {
            category: 'Cables & Adapters',
            image: 'https://media.startech.com/cms/startech.com/media/images/display-adapter/display-adapter-cables-1.png'
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
    sub_container:{
        marginHorizontal:10
    },
    gridView: {
        flex: 1,
        marginTop:10,
    },
})