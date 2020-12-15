import React from 'react'
import {  View } from 'react-native'
import styles from './SplashScreenStyle'
import { Helpers } from '../../theme'
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginTitle = () => (
  // <SafeAreaView style={[Helpers.fillRowCenter, styles.container]}>
      <View style={[Helpers.center]}>
      <Animatable.Text style={[styles.logo]} animation="fadeIn" iterationCount={2}>Salalah</Animatable.Text>
      <Animatable.Text style={[styles.logoBrand]} animation="fadeIn" >Bazaar</Animatable.Text>
    </View>
    // </SafeAreaView>
)

export default SplashScreen

