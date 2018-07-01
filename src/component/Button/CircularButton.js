import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Circle from '../Circle/Circle';

const CircularButton = (props) => {
    const { size, fontSize, label, onPress } = props
    const styles = StyleSheet.create({
        text: {
            fontSize: fontSize,
            fontWeight: 'bold',
            color: '#FFFFFF'
        },
        button: {
            width: size
        }
    });
    
    const { text, button } = styles;
    return (
        <TouchableOpacity 
            style={button} 
            onPress={onPress}
        >
            <Circle size={size}>
                <View>
                    <Text style={text}>{label}</Text>
                </View>
            </Circle>
        </TouchableOpacity>
    );
};



CircularButton.propTypes = {
    size: PropTypes.number
}

CircularButton.defaultProps = {
    size: 50
}

export default CircularButton;