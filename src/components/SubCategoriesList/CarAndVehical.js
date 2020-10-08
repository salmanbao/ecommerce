import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import ImageBlurLoading from 'react-native-image-blur-loading';
import {  Colors } from '../../theme'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatGrid } from 'react-native-super-grid';


function CarAndVehicalCard({ data }) {

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

const CarAndVehical = (props) => {
    const [categories, setCategories] = React.useState([
        {
            category: 'Car Electrical Appliances',
            image: 'https://i.pinimg.com/236x/63/9b/98/639b989541362b58faf21a8852094fe0.jpg'
        },
        {
            category: 'GPS Tracker',
            image: 'https://cf.shopee.com.my/file/22815a7bb17aae9c6707d32c3b2b9ba8'
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
                    <CarAndVehicalCard data={item} />
                )}
            />
            </View>
        </SafeAreaView>
    )

}

export default CarAndVehical;

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