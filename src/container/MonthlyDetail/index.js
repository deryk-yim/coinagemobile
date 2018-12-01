import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Layout from '../Layout/Layout';
import DonutChart from '../../component/Chart/DonutChart';

const SCREEN_WIDTH = Dimensions.get('window').width;


export default class MonthlyDetail extends Component {
  render() {
    const { container } = styles;
    return (
      <Layout>
        <View style={[container, { flex: 1, width: SCREEN_WIDTH }]}>
            <DonutChart/>
        </View>
      </Layout>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative'
    }
});