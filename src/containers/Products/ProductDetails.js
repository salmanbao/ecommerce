import Coupon from './Coupon';
import { Shipping } from './Shipping';
import { SpecItem } from './specItems';
import { Seperator } from './seperator';
import Star from 'react-native-star-view';
import HTML from 'react-native-render-html';
import CustomerReview from './CustomerReview';
import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { SwipeablePanel } from 'rn-swipeable-panel';
import { SliderBox } from "react-native-image-slider-box";
import SellerRecommendation from './SellerRecommendation';
import ProductActions from '../../stores/Products/Actions';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Icon, withBadge, ListItem } from 'react-native-elements';
import HomeProductsComponent from '../../components/HomeProducts/HomeProducts';
import { Text, View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import SearchBarWithBackAndCartComponent from './../../components/SearchBarWithBackAndCart/SearchBarWithBackAndCart';


const ProductDetailsContainer = ({ route, navigation, wishes, auth, setCurrentRoute }) => {
  const [discountPercentage, setDiscount] = useState((((route.params.data.regular_price - route.params.data.sale_price) / route.params.data.regular_price) * 100).toFixed(2))
  const [swipeablePanelActive, setSipeablePanelActive] = useState(false)
  const [data, setData] = useState(route.params.data)
  const dispatch = useDispatch()
  const [list, setList] = useState([
    {
      name: 'Specifications'
    }
  ])
  const [ignoredStyles, setFonntFamily] = useState(['font-family'])

  useEffect(() => {
    setData(route.params.data)
    if (route.name !== undefined)
      setCurrentRoute(route.name)
    return () => {
      setCurrentRoute('')
      setDiscount(null);
      setSipeablePanelActive(false);
      setData(null);
      setList([]);
      setFonntFamily([])
    }
  }, [])

  const openPanel = () => {
    setSipeablePanelActive(true)
  };

  const closePanel = () => {
    setSipeablePanelActive(false)
  };
  const BadgedIcon = withBadge(wishes)(Icon)
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }} >
      <StatusBar translucent barStyle="dark-content" />
      <SearchBarWithBackAndCartComponent navigation={navigation} />
      <ScrollView>
        <SliderBox
          images={[...data.images.map(i => i.src)]}
          resizeMode={'contain'}
          dotColor={'#f56a79'}
          inactiveDotColor={'black'}
          sliderBoxHeight={400}
          ImageComponentStyle={styles.sliderImages}
        />
        <View style={styles.row, { marginVertical: 10, marginHorizontal: 15 }}>

          <View style={styles.row}>
            <Text style={styles.price}> ر.ع {data.regular_price}</Text>
            {data.on_sale &&
              <View>
                <Text style={styles.discountedPrice}> ر.ع{data.sale_price}</Text>
                <Text style={{ fontSize: 10, color: 'red', marginLeft: 5, marginTop: 5 }}>{discountPercentage}%</Text>
              </View>
            }

          </View>
          <View style={{ position: 'absolute', left: '80%' }}>
            <BadgedIcon
              type="feather"
              name="heart"
              size={38}
              color={'grey'}
              onPress={() => {
                dispatch(ProductActions.addToWishList(data))
              }}
            />
          </View>

        </View>

        <View style={styles.row}>
          <Star score={data.rating_count} style={styles.starStyle, { marginLeft: 15 }} />
          <Text style={{ marginTop: 8, marginLeft: 5, fontSize: 12, color: 'grey' }}>
            {data.rating_count} | {data.menu_order} orders
        </Text>
        </View>

        <View style={styles.row, { marginHorizontal: 15 }}>
          {
            list.map((l, i) => (
              <ListItem key={i} onPress={openPanel}>
                <ListItem.Content>
                  <ListItem.Title>{l.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            ))
          }
        </View>
        <Coupon />
        <Shipping product={data} />
        {/* <CustomerReview /> */}
        {/* <SellerRecommendation /> */}
        {/* <HomeProductsComponent /> */}
      </ScrollView>

      <View style={styles.footer}>

        <Button
          title="Add To Cart"
          titleStyle={{ color: '#f56a79', fontWeight: 'bold' }}
          buttonStyle={{ height: 50, width: '100%', borderRadius: 0, backgroundColor: '#f4d8d6' }}
          containerStyle={{ borderRadius: 0 }}
          onPress={() => {
            if (!auth['token'])
              navigation.navigate('auth', {
                screen: 'auth'
              })
            else {
              dispatch(ProductActions.getShippingMethods())
              navigation.navigate('products', {
                screen: 'confirm_cart_product',
                params: { type: 'ADD_TO_CART', product: data }
              })
            }
          }}
        />

        <Button
          title="Buy Now"
          titleStyle={{ fontWeight: 'bold' }}
          buttonStyle={{ height: 50, width: '100%', borderRadius: 0, backgroundColor: '#f56a79' }}
          containerStyle={{ borderRadius: 0 }}
          onPress={() => {
            if (!auth['token'])
              navigation.navigate('auth', {
                screen: 'auth',
                params: { next: 'confirm_cart_product', product: data, type: 'BUY_NOW'}
              })
            else
              navigation.navigate('products', {
                screen: 'confirm_cart_product',
                params: { type: 'BUY_NOW', product: data }
              })
          }}
        />
      </View>

      <SwipeablePanel
        fullWidth
        isActive={swipeablePanelActive}
        onClose={closePanel}
        onPressCloseButton={closePanel}
        showCloseButton={true}
      >
        <SpecItem title={'Specification'} isHeader />
        <Seperator />
        <HTML html={data.description} containerStyle={{ marginHorizontal: 10 }} ignoredStyles={ignoredStyles} />
      </SwipeablePanel>
    </SafeAreaView>
  )
}

function mapStateToProps({ products }) {
  const { wishlist, auth } = products;
  return {
    wishes: wishlist.length,
    auth
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentRoute: (route) => {
      dispatch(ProductActions.currentRoute(route))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsContainer)

const styles = StyleSheet.create({
  footer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 40,
    width: '100%'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  sliderImages: {
    zIndex: 1,
    resizeMode: 'contain',
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  discountedPrice: {
    fontSize: 10,
    color: 'grey',
    textDecorationLine: 'line-through'
  },
  starStyle: {
    height: 20,
  },
  configurationItem: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
})