import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>
                {props.label}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button:{
        borderColor: '#000000',
        borderWidth: 0.5,
    },
    text:{
        textAlign: 'center'
    }
})

Button.propTypes = {
    label: PropTypes.string
}

Button.defaultProps = {
    label: 'Button'
}

export default Button;