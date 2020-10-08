import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from '../../theme'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatGrid } from 'react-native-super-grid';
import ImageBlurLoading from 'react-native-image-blur-loading';


function HomeAppliancesCard({ data }) {

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


const HomeAppliances = (props) => {
    const [categories, setCategories] = React.useState([
        {
            category: 'Cleaning & Other Home Equipment',
            image: 'https://advicesacademy.com/wp-content/uploads/2018/04/Mop.jpg'
        },
        {
            category: 'Cookers',
            image: 'https://brain-images-ssl.cdn.dixons.com/1/6/10194261/u_10194261.jpg'
        },
        {
            category: 'Home Fragrances',
            image: 'https://cdn.shopify.com/s/files/1/1801/2877/products/home-fragrance-all-four-100-ml_800x.jpg?v=1492042945'
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
                        <HomeAppliancesCard data={item} />
                    )}
                />
            </View>
        </SafeAreaView>
    )

}

export default HomeAppliances;

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