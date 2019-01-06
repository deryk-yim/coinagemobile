import React, { Component } from 'react';
import {
  LinearGradient, Line, Text, Defs, Stop,
} from 'react-native-svg';

export default class AbstractChart extends Component {
  renderHorizontalLines = (config) => {
    const { chartConfig } = this.props;
    const {
      count, width, height, paddingTop, paddingRight,
    } = config;
    const ceiling = height - paddingTop;
    return [...new Array(count)].map((_, i) => (
      <Line
        key={Math.random()}
        x1={paddingRight}
        y1={(ceiling / count * i) + paddingTop}
        x2={width}
        y2={(ceiling / count * i) + paddingTop}
        stroke={chartConfig.color(0.2)}
        strokeWidth={1}
      />
    ));
  }

  renderHorizontalLabels = (config) => {
    const { chartConfig } = this.props;
    const {
      count, data, height, paddingTop, paddingRight, yLabelsOffset = 25,
    } = config;
    const total = [0, ...data];

    return [...new Array(count)].map((_, i) => (
      <Text
        key={Math.random()}
        x={paddingRight - yLabelsOffset}
        textAnchor="end"
        y={(height * 3 / 4) - ((height - paddingTop) / count * i) + 20}
        fontSize={12}
        fill={chartConfig.color(0.5)}
      >
        {
          (Math.max(...total) / (count - 1) * i).toFixed(0)
        }
      </Text>
    ));
  }

  renderVerticalLines = (config) => {
    const { chartConfig } = this.props;
    const {
      data, width, height, paddingTop, paddingRight,
    } = config;
    return [...new Array(data.length)].map((_, i) => (
      <Line
        key={Math.random()}
        x1={Math.floor((width - paddingRight) / data.length * (i) + paddingRight)}
        y1={0}
        x2={Math.floor((width - paddingRight) / data.length * (i) + paddingRight)}
        y2={height - (height / 4) + paddingTop}
        stroke={chartConfig.color(0.2)}
        strokeDasharray="5, 10"
        strokeWidth={1}
      />
    ));
  }

  renderDefs = (config) => {
    const { chartConfig } = this.props;
    const {
      width, height, backgroundGradientFrom, backgroundGradientTo,
    } = config;
    return (
      <Defs>
        <LinearGradient id="backgroundGradient" x1="0" y1={height} x2={width} y2={0}>
          <Stop offset="0" stopColor={backgroundGradientFrom} />
          <Stop offset="1" stopColor={backgroundGradientTo} />
        </LinearGradient>
        <LinearGradient id="fillShadowGradient" x1={0} y1={0} x2={0} y2={height}>
          <Stop offset="0" stopColor={chartConfig.color()} stopOpacity="0.1" />
          <Stop offset="1" stopColor={chartConfig.color()} stopOpacity="0" />
        </LinearGradient>
      </Defs>
    );
  }
}
