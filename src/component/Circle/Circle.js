import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Circle extends Component {
    static propTypes = {
        size: PropTypes.number,
        backgroundColor: PropTypes.string,
        backgroundColors: PropTypes.arrayOf(PropTypes.string),
        opacity: PropTypes.number,
        fill: PropTypes.bool,
    }

    static defaultProps = {
        size: 300,
        fill: true,
        backgroundColor: '#FFFFFF',
        backgroundColors: ['#F82279', '#E82887', '#CE33A1', '#A643C8','#934CDB'],
    }
    //backgroundColors: ['#F5227A','#E82887','#CE33A1','#A643C8','#944BD8'],

    render(){
        return(
            <LinearGradient colors={this.props.backgroundColors}
                style={this.styles.circle}>
                { this.props.children }
            </LinearGradient>
        );
    }

    styles = StyleSheet.create({
        circle: {
            backgroundColor: this.props.backgroundColorX,
            height: this.props.size,
            width: this.props.size,
            borderRadius: this.props.size / 2,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: this.props.opacity,
        },
        linearGradient: {
            flex: 1,
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 5,
        }
    });
}
