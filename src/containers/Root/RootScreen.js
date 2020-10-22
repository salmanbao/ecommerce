import React, { useEffect } from 'react';
import AppNavigator from '../../navigators/AppNavigator';
import ProductActions from '../../stores/Products/Actions';
import { useDispatch } from 'react-redux';

const RootScreen = () => {
  console.log('Root-Screen')
  console.log(ProductActions.getAllProducts())
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ProductActions.getAllProducts())
  }, [])

  return (
      <AppNavigator/>
  )
}

export default RootScreen