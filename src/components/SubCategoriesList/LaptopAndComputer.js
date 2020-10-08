import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from '../../theme'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatGrid } from 'react-native-super-grid';
import ImageBlurLoading from 'react-native-image-blur-loading';


function LaptopAndComputerCard({ data }) {

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


const LaptopAndComputer = (props) => {
    const [categories, setCategories] = React.useState([
        {
            category: 'Cables & Adapters',
            image: 'https://cdn.shopify.com/s/files/1/0075/5302/4066/products/ACH225EU_MAIN1_600x.jpg?v=1589562927'
        },
        {
            category: 'Connecter & Converter',
            image: 'https://images-na.ssl-images-amazon.com/images/I/51Cz0fZlPDL._AC_SL1000_.jpg'
        },
        {
            category: 'DELL LAPTOP',
            image: 'https://alaqsa.com.pk/wp-content/uploads/2020/02/Dell-Inspiron-3593.jpg'
        },
        {
            category: 'Desktop and Accessories',
            image: 'https://media.officedepot.com/image/upload/f_auto,q_auto/coremedia/resource/blob/128100/1acd9507437ad0e239e8d9e98856e144/desktops-data.jpg'
        },
        {
            category: 'External data storage',
            image: 'https://www.macworld.co.uk/cmsdata/slideshow/3579792/best_external_storage_ixpand_flash_drive_1200.jpg'
        },
        {
            category: 'HP LAPTOP',
            image: 'https://5.imimg.com/data5/JM/PC/MY-26541044/hp-pavilion-x360-14m-ba013dx-500x500.jpg'
        },
        {
            category: 'Mouse & Keyboards',
            image: 'https://www.kindpng.com/picc/m/269-2695644_keyboard-and-mouse-png-bloody-q1100-transparent-png.png'
        },
        {
            category: 'Printer/Scanner/Projector',
            image: 'https://i.pinimg.com/originals/16/7f/3f/167f3fe7ae20a9227f701c41bef39db0.jpg'
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
                        <LaptopAndComputerCard data={item} />
                    )}
                />
            </View>
        </SafeAreaView>
    )

}

export default LaptopAndComputer;

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