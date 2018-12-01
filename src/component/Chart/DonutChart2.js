import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import PieChart from 'react-native-pie-chart';

export default class DonutChart extends Component {
  render() {
    const chart_width = 250;
    const series = [123, 321, 123, 789, 537];
    const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800'];

    return (
        <View style={styles.container}>
            <PieChart
                chart_wh={chart_width}
                series={series}
                sliceColor={sliceColor}
                doughnut={true}
                coverRadius={0.45}
                coverFill={'#FFF'}
            />
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