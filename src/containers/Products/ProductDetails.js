import React, { useState } from 'react'
import { Text, View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SliderBox } from "react-native-image-slider-box";
import SearchBarWithBackAndCartComponent from './../../components/SearchBarWithBackAndCart/SearchBarWithBackAndCart';
import { Icon, withBadge, ListItem } from 'react-native-elements';
import Star from 'react-native-star-view';
import { SwipeablePanel } from 'rn-swipeable-panel';
import { SpecItem } from './specItems';

const ProductDetailsContainer = ({ route, navigation }) => {
  const [swipeablePanelActive, setSipeablePanelActive] = useState(false)
  const [data, setData] = useState(route.params.data)
  const [rating, setRating] = useState(3.5)
  const [list, setList] = useState([
    {
      name: 'Specifications',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Item description',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    }
  ])

  console.log(route)
  openPanel = () => {
    setSipeablePanelActive(true)
  };

  closePanel = () => {
    setSipeablePanelActive(false)
  };
  const BadgedIcon = withBadge(2)(Icon)
  return (
    <SafeAreaView style={{backgroundColor:'white'}} >
        <StatusBar translucent barStyle="dark-content" />
        <SearchBarWithBackAndCartComponent navigation={navigation} />
      <ScrollView>
        <SliderBox
          images={[data.image_url, data.image_url]}
          resizeMode={'contain'}
          dotColor={'#f56a79'}
          inactiveDotColor={'black'}
          sliderBoxHeight={400}
          ImageComponentStyle={styles.sliderImages}
        />
        <View style={styles.row, { marginVertical: 10, marginHorizontal: 15 }}>

          <View style={styles.row}>
            <Text style={styles.price}>US ${data.abv}</Text>
            <Text style={styles.discountedPrice}>US ${data.attenuation_level}</Text>
            <Text style={{ fontSize: 10, color: 'red', marginLeft: 5, marginTop: 5 }}>-24%</Text>
          </View>
          <View style={{ position: 'absolute', left: '90%' }}>
            <BadgedIcon type="feather" name="heart" color={'grey'} />
          </View>

        </View>
        <View style={styles.row, { marginHorizontal: 15, marginVertical: 5}}>
          <Text numberOfLines={3} style={{ fontSize: 16, color: '#0f0f0f' }} >
            {data.description}
          </Text>
        </View>

        <View style={styles.row}>
          <Star score={rating} style={styles.starStyle, { marginLeft: 15 }} />
          <Text style={{ marginTop: 8, marginLeft: 5, fontSize: 12, color: 'grey' }}>
            {rating} | 59 orders
        </Text>
        </View>

        <View style={styles.row, { marginHorizontal: 15 }}>
          {
            list.map((l, i) => (
              <ListItem key={i} bottomDivider onPress={openPanel}>
                <ListItem.Content>
                  <ListItem.Title>{l.name}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ))
          }
        </View>

        
      </ScrollView>
      <SwipeablePanel
          fullWidth
          isActive={swipeablePanelActive}
          onClose={closePanel}
          onPressCloseButton={closePanel}
        >
          <SpecItem title={'Specification'} isHeader />
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
  }
})