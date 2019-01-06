import React from 'react';
import { View } from 'react-native';
import {
  Svg, Rect, Text, TSpan,
} from 'react-native-svg';
import AbstractChart from './AbstractChart';


const barWidth = 32;

export default class BarChart extends AbstractChart {
  renderBars = (config) => {
    const {
      data, width, height, paddingRight,
    } = config;
    return data.map((x, i) => {
      const barHeight = height / 4 * 3 * (x / Math.max(...data));

      return (
        <Rect
          key={Math.random()}
          x={(paddingRight + (i * (width - paddingRight) / data.length) + (barWidth / 2))}
          y={(((height / 4 * 3) - barHeight) + 26)}
          width={barWidth}
          height={barHeight}
          fill="url(#fillShadowGradient)"
        />
      );
    });
  }

  renderLabelCards = (config) => {
    const {
      data, width, height, paddingRight,
    } = config;
    return data.map((x, i) => {
      /**
       * const barHeight = height / 4 * 3 * ((x - Math.min(...data)) /
       * (Math.max(...data) - Math.min(...data)))
       */
      const barHeight = height / 4 * 3 * (x / Math.max(...data));
      return (
        <Rect
          key={Math.random()}
          x={(paddingRight + (i * (width - paddingRight) / data.length)) + (barWidth / 3)}
          y={(((height / 4 * 3) - barHeight) - 27)}
          rx={5}
          ry={5}
          width={barWidth * 1.4}
          height={40}
          fill={this.props.chartConfig.color(0.6)}
        />
      );
    });
  }

  renderVerticalLabels = (config) => {
    const {
      labels = [], data, width, height, paddingRight, horizontalOffset = 0,
    } = config;
    const fontSize = 16;
    return data.map((x, i) => {
      /**
       * const barHeight = height / 4 * 3 * ((x - Math.min(...data))
       * / (Math.max(...data) - Math.min(...data)));
       */

      const barHeight = height / 4 * 3 * (x / Math.max(...data));
      const label = labels[i];
      const textWidth = ((width - paddingRight) / labels.length * (i))
            + paddingRight + horizontalOffset;
      const textHeight = (((height / 4 * 3) - barHeight) - 5);
      return (
        <Text
          key={Math.random()}
          x={textWidth}
          y={textHeight - 5}
          fontSize={fontSize}
          fontWeight="bold"
          fill="#475893"
          textAnchor="middle"
        >
          <TSpan fontSize={16} y={textHeight - 5}>{label.title}</TSpan>
          <TSpan fontSize={14} y={textHeight + 10} x={textWidth}>{label.description}</TSpan>
        </Text>
      );
    });
  }
  /*
   * y={(((height / 4 * 3) - barHeight) + paddingTop)}
   */

  render() {
    const paddingTop = 16;
    const paddingRight = 64;
    const {
      width, height, data, labels, style = {},
    } = this.props;
    const { borderRadius = 0 } = style;
    const config = { width, height };
    const lineCount = 5;
    let maxAmount = 0;

    maxAmount = Math.max(...data) - (Math.max(...data) % 100) + 100;

    return (
      <View style={style}>
        <Svg height={height} width={width}>
          {this.renderDefs({
            ...config,
            ...this.props.chartConfig,
          })}
          <Rect
            width="100%"
            height={height}
            rx={borderRadius}
            ry={borderRadius}
            fill="rgba(0,0,0,0)"
          />
          {this.renderHorizontalLines({
            ...config,
            count: lineCount,
            paddingTop,
          })}
          {this.renderHorizontalLabels({
            ...config,
            count: lineCount,
            data: [maxAmount, ...data],
            paddingTop,
            paddingRight,
          })}
          {this.renderLabelCards({
            ...config,
            data,
            paddingRight,
            paddingTop,
            horizontalOffset: barWidth,
          })}
          {this.renderVerticalLabels({
            ...config,
            labels,
            data,
            paddingRight,
            paddingTop,
            horizontalOffset: barWidth,
          })}
          {this.renderBars({
            ...config,
            data,
            paddingTop,
            paddingRight,
          })}
        </Svg>
      </View>
    );
  }
}
