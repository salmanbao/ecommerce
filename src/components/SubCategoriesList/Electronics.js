import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from '../../theme'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatGrid } from 'react-native-super-grid';
import ImageBlurLoading from 'react-native-image-blur-loading';
import {
    AUDIO_CABLES,
    AUDIO_VISUAL_EXTENDERS,
    ELECTRICAL_EQUIPMENT_AND_SUPPLIES,
    GOOGLE_PLAY_GIFT_CARD,
    HOME,
    ITUNE_GIFT_CARD,
    LIGHTS_AND_LIGHTING,
    MULTIMEDIA_SPEAKER,
    SECURITY_AND_SAFETY,
    SMART_WATCHES
} from './images'

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
            image: AUDIO_CABLES
        },
        {
            category: 'Audio Visual » Extenders',
            image: AUDIO_VISUAL_EXTENDERS
        },
        {
            category: 'Electrical Equipment & Supplies',
            image: ELECTRICAL_EQUIPMENT_AND_SUPPLIES
        },
        {
            category: 'Google Play Gift Cards',
            image: GOOGLE_PLAY_GIFT_CARD
        },
        {
            category: 'Home',
            image: HOME
        },
        {
            category: 'Itune Gift Card',
            image: ITUNE_GIFT_CARD
        },
        {
            category: 'Lights & Lighting',
            image: LIGHTS_AND_LIGHTING
        },
        {
            category: 'Multimedia Speaker',
            image: MULTIMEDIA_SPEAKER
        },
        {
            category: 'Security and Safety',
            image: SECURITY_AND_SAFETY
        },
        {
            category: 'Smart watches',
            image: SMART_WATCHES
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