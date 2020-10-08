import 'react-native-gesture-handler';
import { Provider } from 'react-redux'
import React from 'react';
import createStore from './src/stores';
import RootScreen from './src/containers/Root/RootScreen'
import { PersistGate } from 'redux-persist/integration/react'

// const { store, persistor } = createStore()

export default function App() {
  return (
    // <Provider store={store}>
      //  <PersistGate loading={null} persistor={persistor}>
      <RootScreen />
      // </PersistGate>
  // </Provider>
  );
}
