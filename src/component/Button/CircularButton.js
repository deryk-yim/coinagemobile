import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Circle from '../Circle/Circle';

const CircularButton = (props) => {
    const { size, onPress, btnColor, style } = props
    const styles = StyleSheet.create({
        button: {
            justifyContent: 'center',
            alignItems: 'center',
            width: size,
            height: size,
            borderRadius: size * 0.5,
            backgroundColor: btnColor
        }
    });
    
    const { text, button } = styles;
    return (
        <TouchableOpacity 
            style={[button, style]} 
            onPress={onPress}
        >
            {
                !btnColor ?
                    <Circle size={size}>
                        {props.children}
                    </Circle>
                :
                    <View>
                        {props.children}
                    </View>
            }
            
        </TouchableOpacity>
    );
};



CircularButton.propTypes = {
    size: PropTypes.number,
    style: PropTypes.number,
    btnColor: PropTypes.string
}

CircularButton.defaultProps = {
    size: 50,
}

export default CircularButton;