import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Svg, Rect, Text } from 'react-native-svg';
import AbstractChart from './AbstractChart';


const barWidth = 32;

export default class BarChart extends AbstractChart {
    renderBars = config => {
        const { data, width, height, paddingTop, paddingRight } = config;
        return data.map((x, i) => {
            const barHeight = height / 4 * 3 * ((x - Math.min(...data)) / (Math.max(...data) - Math.min(...data)));
            return (
                <Rect
                    key={Math.random()}
                    x={(paddingRight + (i * (width - paddingRight) / data.length) + (barWidth / 2))}
                    y={(((height / 4 * 3) - barHeight) + paddingTop)}
                    width={barWidth}
                    height={barHeight}
                    fill="url(#fillShadowGradient)"
                />
            )
        });
    }

    // use this to draw the X labels
    renderBarTops = config => {
        const { data, width, height, paddingTop, paddingRight, horizontalOffset = 0 } = config;
        return data.map((x , i) => {
            const barHeight = height / 4 * 3 * ((x - Math.min(...data)) / (Math.max(...data) - Math.min(...data)))
            return (
                <Rect
                    key={Math.random()}
                    x={(paddingRight + (i * (width - paddingRight) / data.length)) + (barWidth / 3)}
                    y={(((height / 4 * 3) - barHeight) - 20)}
                    width={ barWidth * 1.4}
                    height={30}
                    fill={this.props.chartConfig.color(0.6)}
                />
            )
        });   
    }
    
    //x={(paddingRight + (i * (width - paddingRight) / data.length)) + (barWidth / 2)}

    renderVerticalLabels = config => {
        const { labels = [], data, width, height, paddingRight, paddingTop, horizontalOffset = 0 } = config;
        const fontSize = 16;
        return data.map((x, i) => {
            const barHeight = height / 4 * 3 * ((x - Math.min(...data)) / (Math.max(...data) - Math.min(...data)))
            //console.log(labels[i]);
            /*
            <View>
                    <Text
                        key={Math.random()}
                        x={((width - paddingRight) / labels.length * (i)) + paddingRight + horizontalOffset}
                        y={(((height / 4 * 3) - barHeight) - 5)}
                        fontSize={fontSize}
                        fill={'#475893'}
                        textAnchor="middle"
                    >
                        {labels[i]}
                    </Text>
            */
            return (
                    <Text
                        key={Math.random()}
                        x={((width - paddingRight) / labels.length * (i)) + paddingRight + horizontalOffset}
                        y={(((height / 4 * 3) - barHeight) - 5)}
                        fontSize={fontSize}
                        fill={'#475893'}
                        textAnchor="middle"
                    >
                        {labels[i]}
                    </Text>
            )
        });
    }
    //y={(((height / 4 * 3) - barHeight) + paddingTop)}

    render(){
        const paddingTop = 16;
        const paddingRight = 64;
        const { width, height, data, style = {}} = this.props;
        const {borderRadius = 0 } = style;
        const config = { width, height };
        return (
            <View style={style}>
                <Svg height={height} width={width}>
                    {this.renderDefs({
                        ...config,
                        ...this.props.chartConfig
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
                        count: 8,
                        paddingTop
                    })}
                    {this.renderHorizontalLabels({
                        ...config,
                        count: 8,
                        data: data.datasets[0].data,
                        paddingTop,
                        paddingRight
                    })}
                    {this.renderBarTops({
                        ...config,
                        data: data.datasets[0].data,
                        paddingRight,
                        paddingTop,
                        horizontalOffset: barWidth
                    })}
                    {this.renderVerticalLabels({
                        ...config,
                        labels: data.labels,
                        data: data.datasets[0].data,
                        paddingRight,
                        paddingTop,
                        horizontalOffset: barWidth
                    })}
                    {this.renderBars({
                        ...config,
                        data: data.datasets[0].data,
                        paddingTop,
                        paddingRight
                    })}
                </Svg>
            </View>
        )
    }
}
