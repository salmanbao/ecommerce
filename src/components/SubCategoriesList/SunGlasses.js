import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import ImageBlurLoading from 'react-native-image-blur-loading';
import { Colors } from '../../theme'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatGrid } from 'react-native-super-grid';
 

function SunGlassesCard({ data }) {

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


const SunGlasses = (props) => {
    const [categories, setCategories] = React.useState([
        {
            category: 'Mobile Charging & Cables',
            image: 'https://placeimg.com/640/480/any'
        },
        {
            category: 'Accessores',
            image: 'https://placeimg.com/640/480/any'
        },
        {
            category: 'CCTV Cameras',
            image: 'https://placeimg.com/640/480/any'
        },
        {
            category: 'Wi-fi Camera',
            image: 'https://placeimg.com/640/480/any'
        },
        {
            category: 'Car Electrical Appliances',
            image: 'https://placeimg.com/640/480/any'
        },
        {
            category: 'Wireless Bluetooth',
            image: 'https://placeimg.com/640/480/any'
        },
        {
            category: 'Cookers',
            image: 'https://placeimg.com/640/480/any'
        },
        {
            category: 'Cables & Adapters',
            image: 'https://placeimg.com/640/480/any'
        },
        {
            category: 'External data storage',
            image: 'https://placeimg.com/640/480/any'
        },
        {
            category: 'Smart Devices & Switches',
            image: 'https://placeimg.com/640/480/any'
        },
        {
            category: 'WIFI Router',
            image: 'https://placeimg.com/640/480/any'
        },
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
                        <SunGlassesCard data={item} />
                    )}
                />
            </View>
        </SafeAreaView>
    )

}

export default SunGlasses;

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