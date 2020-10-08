import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import ImageBlurLoading from 'react-native-image-blur-loading';
import { Colors } from '../../theme'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatGrid } from 'react-native-super-grid';
 

function ToolsCard({ data }) {

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


const Tools = (props) => {
    const [categories, setCategories] = React.useState([
        {
            category: 'Measurement & Analysis Instruments',
            image: 'https://cdn11.bigcommerce.com/s-pmmwebtsv1/images/stencil/350x350/products/45236/103098/excel-xl830l-lcd-digital-voltmeter-ohmmeter-ammeter-ohm-multimeter-tester__46402.1523920851.jpg?c=2'
        },
        {
            category: 'Networking Tools',
            image: 'https://ae01.alicdn.com/kf/Hb3f3728b84e24e19b91e4ae7dbbcfea2J.jpg'
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
                        <ToolsCard data={item} />
                    )}
                />
            </View>
        </SafeAreaView>
    )

}

export default Tools;

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