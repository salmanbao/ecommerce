import React from 'react'
import { Text, StyleSheet, View } from 'react-native';
import { Colors } from '../../theme'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatGrid } from 'react-native-super-grid';
import ImageBlurLoading from 'react-native-image-blur-loading';
 

function PopularCategoriesCard({ data }) {

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


const PopularCategories = (props) => {
    const [categories, setCategories] = React.useState([
        {
            category: 'Accessories',
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
            category: 'Smart watchs',
            image: 'https://placeimg.com/640/480/any'
        },
        {
            category: 'WiFi Router',
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