import React from 'react'
import { StyleSheet, View,Text } from 'react-native';
import { Colors } from '../../theme'
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageBlurLoading from 'react-native-image-blur-loading';
import { FlatGrid } from 'react-native-super-grid';


function MobileAccessoriesCard({ data }) {

    return (
        <View >
            <ImageBlurLoading
                borderRadius={8}
                source={{ uri: data.image, cache: 'force-cache' }}
                style={cardStyles.image}
            />
            <View style={[cardStyles.categoryTextBox]}>
                <Text ellipsizeMode='tail' numberOfLines={2} style={cardStyles.category}>
                    {data.category}
                </Text>
            </View>
        </View>
    );
}
 
const cardStyles = StyleSheet.create({
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


const MobileAccessories = (props) => {
    const [categories, setCategories] = React.useState([
        {
            category: 'Accessores',
            image: 'https://image.made-in-china.com/2f0j00raRUIEPHBCqp/Best-Price-Factory-Clear-Stock-Wholesale-Mobile-Phone-Accessories-for-Samsung-Android-Mobile.jpg'
        },
        {
            category: 'Lava',
            image: 'https://seekvectorlogo.net/wp-content/uploads/2019/02/lava-international-vector-logo.png'
        },
        {
            category: 'HONOR',
            image: 'https://www.gizmochina.com/wp-content/uploads/2018/12/New-Honor-Logo.jpg'
        },
        {
            category: 'Huawei',
            image: 'https://1000logos.net/wp-content/uploads/2019/07/Huawei-Logo-2018%E2%80%93present.jpg'
        },
        {
            category: 'Lava Mobile',
            image: 'https://etimg.etb2bimg.com/photo/77458356.cms'
        },
        {
            category: 'Mobile Charging & Cables',
            image: 'https://m.media-amazon.com/images/I/31JhE7tZQzL.jpg'
        },
        {
            category: 'OPPO Mobile',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/OPPO_LOGO_2019.png/1024px-OPPO_LOGO_2019.png'
        },
        {
            category: 'Ravoz Smart Phone',
            image: 'https://cdn11.bigcommerce.com/s-podjif72xf/images/stencil/1280x1280/products/15331/10805/6923205016260__63578.1600358600.jpg?c=2'
        },
        {
            category: 'Samsung Galaxy',
            image: 'https://logosvector.net/wp-content/uploads/2011/05/samsung-galaxy-s-logo-vector.jpg'
        },
        {
            category: 'SELFIE STICK',
            image: 'https://technolobby.org/wp-content/uploads/2019/01/mpow-selfie-stick.jpeg'
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
                        <MobileAccessoriesCard data={item} />
                    )}
                />
            </View>
        </SafeAreaView>
    )

}

export default MobileAccessories;

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