import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Layout from '../../component/Layout';
import DonutChart from '../../component/Chart/DonutChart';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  },
});

const MonthlyDetail = () => {
  const { container } = styles;
  return (
    <Layout>
      <View style={[container, { flex: 1, width: SCREEN_WIDTH }]}>
        <DonutChart />
      </View>
    </Layout>
  );
};
export default MonthlyDetail;
