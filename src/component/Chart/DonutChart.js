import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Platform, ART, AppState, StyleSheet } from 'react-native';
//import Svg, { Circle, G, Path, Defs, Stop } from 'react-native-svg';
const { Surface, Shape, Path, Group } = ART;

export default class DonutChart extends Component {
    
  render() {
    
    return (
        <View style={styles.container}>
           
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        margin: 10
    }
});