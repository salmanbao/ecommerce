import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import ImageBlurLoading from 'react-native-image-blur-loading';
import { Colors } from '../../theme'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatGrid } from 'react-native-super-grid';
 

function SmartHomeCard({ data }) {

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


const SmartHome = (props) => {
    const [categories, setCategories] = React.useState([
        {
            category: 'Door Lock',
            image: 'https://www.smartify.in/wp-content/uploads/2019/07/Smart-Door-Lock-NFS04.png'
        },
        {
            category: 'LED Lights & Flashlights',
            image: 'https://w7.pngwing.com/pngs/1020/706/png-transparent-streamlight-inc-flashlight-tactical-light-lithium-ion-battery-flashlight-electronics-led-lamp-light.png'
        },
        {
            category: 'Smart Devices & Switches',
            image: 'https://www.leviton.com/en/images/lc/600x340+DS+image+2020+family.jpg'
        },
        {
            category: 'Smart Home Assistants & Voice Control',
            image: 'https://storage.googleapis.com/madebygoog/v1/home/chirp_device-front_on_1440_2x.png'
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
                        <SmartHomeCard data={item} />
                    )}
                />
            </View>
        </SafeAreaView>
    )

}

export default SmartHome;

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