import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  button: {
    borderColor: '#000000',
    borderWidth: 0.5,
  },
  text: {
    textAlign: 'center',
  },
});

const Button = (props) => {
  const { label } = props;
  const { button, text } = styles;
  return (
    <TouchableOpacity style={button}>
      <Text style={text}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;

Button.propTypes = {
  label: PropTypes.string,
};

Button.defaultProps = {
  label: 'Button',
};
