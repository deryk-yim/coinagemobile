import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Background from './src/component/Background/Background'
import Home from './src/container/Home/index'
import AmountScreen from './src/container/AddTransaction/AmountScreen';
import CategoryScreen from './src/container/AddTransaction/CategoryScreen';
import Tracking from './src/container/Tracking/index'

const App = () => {
  return (
    <Tracking />
  )
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});