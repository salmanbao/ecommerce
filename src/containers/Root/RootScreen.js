import React, { useEffect } from 'react';
import AppNavigator from '../../navigators/AppNavigator';
// import StartupActions from '../../stores/Startup/Actions';

// import { useDispatch } from 'react-redux';

const RootScreen = () => {
  
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(StartupActions.startup())
  // }, [])

  return (
      <AppNavigator/>
  )
}

export default RootScreen