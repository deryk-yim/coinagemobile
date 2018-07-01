import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Path, Polygon } from 'react-native-svg';
import Item from '../../component/LegendList/Item';
import LegendList from '../../component/LegendList/LegendList';
import moment from 'moment';
import Layout from '../../component/Layout/Layout';

import { TRACKING_DATA } from './test-data.js';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Tracking extends Component {
  render() {
    const { container } = styles;
    const legend = TRACKING_DATA.map((data) => {
      return(
        <Item title={data.category} />
      );
    });

    return (
      <Layout>
        <View style={[container, { flex: 0.85, width: SCREEN_WIDTH }]}>
            <View style={{ flex: 0.1, flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: SCREEN_WIDTH * 0.73 }}>
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 26 }}>
                { `${moment().startOf('week').add(1, 'days').format('MMMM DD')} - ${moment().endOf('week').add(1, 'days').format('MMMM DD')}` }
                </Text>
              </View>
              <View style={{ paddingLeft: 15 }}>
                <Svg width={26} height={26} viewBox='0 0 26 26'>
                  <Path fill="#EBEBEB" d="M22,6.92L20.59,5.5L17.74,8.72C15.68,6.4 12.83,5 9.61,5C6.72,5 4.07,6.16 2,8L3.42,9.42C5.12,7.93 7.27,7 9.61,7C12.35,7 14.7,8.26 16.38,10.24L13.5,13.5L9.5,9.5L2,17L3.5,18.5L9.5,12.5L13.5,16.5L17.55,11.93C18.3,13.28 18.8,14.83 19,16.5H21C20.78,14.18 20.05,12.09 18.96,10.34L22,6.92Z"/>
                </Svg>
              </View>
            </View>
            <View style={{ flex: 0.4, flexDirection: 'column', alignItems:'flex-start', 
            justifyContent: 'flex-start', width:  SCREEN_WIDTH * 0.83 }}>
              <LegendList/>
            </View>
        </View>
      </Layout>
    )
  }
}

/*
              <Item title='FOOD' color={['#DDD2BB', '#FD9722']}/>
              <Item title='TRANSPORTATION' color={['#F82279', '#934CDB']}/>
              <Item title='HOME' color={['#5189DC', '#944BDB']}/>
*/

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative' 
  }
});