import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SliderBox } from "react-native-image-slider-box";
import SearchBarWithBackAndCartComponent from './../../components/SearchBarWithBackAndCart/SearchBarWithBackAndCart';
import { Icon, withBadge, ListItem } from 'react-native-elements';
import Star from 'react-native-star-view';
import { SwipeablePanel } from 'rn-swipeable-panel';
import HTML from 'react-native-render-html';
import { SpecItem } from './specItems';
import { Seperator } from './seperator';
import  Coupon  from './Coupon';
import { Shipping } from './Shipping';
import CustomerReview  from './CustomerReview';
import SellerRecommendation from './SellerRecommendation';
import HomeProductsComponent from '../../components/HomeProducts/HomeProducts';

const ProductDetailsContainer = ({ route, navigation }) => {
  const [discountPercentage, setDiscount] = useState((((route.params.data.regular_price - route.params.data.sale_price) / route.params.data.regular_price) * 100).toFixed(2))
  const [swipeablePanelActive, setSipeablePanelActive] = useState(false)
  const [data, setData] = useState(route.params.data)
  const [list, setList] = useState([
    {
      name: 'Specifications'
    }
  ])
  const [ignoredStyles, setFonntFamily] = useState(['font-family'])

  useEffect(() => {
    return () => {
      setDiscount(null);
      setSipeablePanelActive(false);
      setData([]);
      setList([]);
      setFonntFamily([])
    }
  })

  const openPanel = () => {
    setSipeablePanelActive(true)
  };

  const closePanel = () => {
    setSipeablePanelActive(false)
  };
  const BadgedIcon = withBadge(2)(Icon)
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
          <View style={{ position: 'absolute', left: '90%' }}>
            <BadgedIcon type="feather" name="heart" color={'grey'} />
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
        <Shipping />
        <CustomerReview />
        <SellerRecommendation />
        <HomeProductsComponent />
      </ScrollView>


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
        {/* <Specifications leftText={'Brand Name'} rightText={'FIGI'} />
        <Seperator />
        <Specifications leftText={'Biometrics Technology'} rightText={'Fingerprint Recognition'} />
        <Seperator />
        <Specifications leftText={'Front Camera Quantity'} rightText={'1'} /> */}

      </SwipeablePanel>
    </SafeAreaView>
  )

}

export default ProductDetailsContainer;

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  sliderImages: {
    zIndex: 1,
    resizeMode: 'contain',
    // backgroundColor:'white'
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