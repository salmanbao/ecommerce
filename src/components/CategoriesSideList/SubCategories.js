import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { Colors } from '../../theme'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatGrid } from 'react-native-super-grid';
import ImageBlurLoading from 'react-native-image-blur-loading';
import { useNavigation } from '@react-navigation/native';
import ProductActions from '../../stores/Products/Actions';
import mapCategoriesToImages from './../CategoriesImages/CategoriesImages';

function SubCategoriesCard({ data }) {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const [image, setImage] = useState(data.image ? data['image']['src'] : mapCategoriesToImages('dummy'))
    useEffect(() => {
        return () => {
            setImage(null)
        }
    }, [])

    const toProducts = () => {
        dispatch(ProductActions.categoryId(data.id))
        navigation.navigate('products', {
            screen: 'productsByCategories'
        })
    }
    return (
        <Pressable onPress={toProducts}>
                <ImageBlurLoading
                    borderRadius={8}
                    source={{ uri: image, cache: 'force-cache' }}
                    style={CardStyles.image}
                />
                <View style={[CardStyles.categoryTextBox]}>
                    <Text ellipsizeMode='tail' numberOfLines={2} style={CardStyles.category}>
                        {data.name}
                    </Text>
                </View>
        </Pressable>
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

const SubCategories = (props) => {
    const [categories, setCategories] = (props.route.key === 'popular_categories')
        ? useState(props.popular_categories.slice(0, 9))
        : useState(props.sub_categories[props.route['id']])
    useEffect(() => {
        return () => {
            setCategories([])
        }
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.sub_container}>
                <FlatGrid
                    itemDimension={65}
                    data={categories}
                    style={styles.gridView}
                    spacing={5}
                    renderItem={({ item }) => (
                        <SubCategoriesCard data={item} />
                    )}
                />
            </View>
        </SafeAreaView>
    )
}


function mapStateToProps({ products }) {
    const { popular_categories } = products;
    const { sub_categories } = products;
    return {
        popular_categories,
        sub_categories
    };
}

export default connect(mapStateToProps, null)(SubCategories)


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