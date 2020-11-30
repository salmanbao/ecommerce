import React, { useEffect } from 'react'
import { useStore, useDispatch } from 'react-redux';
import Sliderstyles from '../../theme/sliderStyles';
import SearchComponent from '../../components/SearchBar';
import Slider from '../../components/TopSlider/Slider';
import IconMenuComponent from '../../components/IconMenu/IconMenu';
import FlashDealsComponent from './../../components/FlashDeals/FlashDeals';
import TopRankingsComponent from './../../components/TopRankings/TopRankings';
import { SafeAreaView, FlatList, StatusBar } from 'react-native';
import CategoriesComponent from '../../components/Categories/Catogories';
import HomeProductsComponent from '../../components/HomeProducts/HomeProducts';
import ProductActions from '../../stores/Products/Actions';



const HomeContainer = () => {
  const dispatch = useDispatch()
  const store = useStore()
  
  dispatch(ProductActions.getAllProducts(1))
  dispatch(ProductActions.getAllCoupons())
  dispatch(ProductActions.getSaleProducts())
  dispatch(ProductActions.getOfferProducts())
  dispatch(ProductActions.getTopCategories())
  dispatch(ProductActions.getParentCategories())
  dispatch(ProductActions.getPopularCategories())
  dispatch(ProductActions.getAllAttributes())
  
  const unsubscribe = setTimeout(() => {
    const { products } = store.getState()
    const ids = products['parent_categories'].map(category => category['id'])
    dispatch(ProductActions.getSubCategories(ids))
  }, 5000)

  useEffect(() => {

    return () => {
      clearTimeout(unsubscribe)
    }
  })
  return (
    <SafeAreaView style={Sliderstyles.safeArea}>
      <StatusBar translucent barStyle="dark-content" />
      <SearchComponent />
      <FlatList
        style={{ width: '100%' }}
        nestedScrollEnabled
        data={['slider', 'menus', 'deals', 'topranks', 'categories', 'products']}
        keyExtractor={(data) => data}
        renderItem={({ item }) => {
          switch (item) {
            case 'slider':
              return <Slider />;
            case 'menus':
              return <IconMenuComponent />;
            case 'deals':
              return <FlashDealsComponent />;
            case 'topranks':
              return <TopRankingsComponent />;
            case 'categories':
              return <CategoriesComponent />;
            case 'products':
              return <HomeProductsComponent />;
            default:
              return null;
          }
        }}
      />
    </SafeAreaView>
  )
}

export default HomeContainer
