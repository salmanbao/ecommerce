import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from '../../theme'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatGrid } from 'react-native-super-grid';
import ImageBlurLoading from 'react-native-image-blur-loading';
import {
    LAPTOP_CABLES_AND_ADAPTERS,
    CONNECTOR_AND_CONVERTER,
    DELL_LAPTOP,
    DESKTOP_AND_ACCESSORIES,
    EXTERNAL_DATA_STORAGE,
    HP_LAPTOP,
    MOUSE_AND_KEYBOARD,
    PRINTER_SCANNER_PROJECTOR
} from './images'

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
            image: LAPTOP_CABLES_AND_ADAPTERS
        },
        {
            category: 'Connecter & Converter',
            image: CONNECTOR_AND_CONVERTER
        },
        {
            category: 'DELL LAPTOP',
            image: DELL_LAPTOP
        },
        {
            category: 'Desktop and Accessories',
            image: DESKTOP_AND_ACCESSORIES
        },
        {
            category: 'External data storage',
            image: EXTERNAL_DATA_STORAGE
        },
        {
            category: 'HP LAPTOP',
            image: HP_LAPTOP
        },
        {
            category: 'Mouse & Keyboards',
            image: MOUSE_AND_KEYBOARD
        },
        {
            category: 'Printer/Scanner/Projector',
            image: PRINTER_SCANNER_PROJECTOR
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