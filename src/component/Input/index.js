import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text,
  TextInput as InputText,
  TouchableOpacity, StyleSheet,
} from 'react-native';

const LoginInputStyles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#775FFB',
    paddingLeft: 50,
    marginBottom: 30,
  },
  icon: {
    width: 50,
    height: 50,
    borderRightWidth: 2,
    borderRightColor: '#775FFB',
    position: 'absolute',
  },
  textInput: {
    height: 50,
    alignSelf: 'stretch',
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export const LoginInput = (props) => {
  const { value, placeholder, onChangeText } = props;
  const { container, icon, textInput } = LoginInputStyles;
  return (
    <View style={container}>
      <View style={icon} />
      <InputText
        style={textInput}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#000000"
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

LoginInput.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
};

LoginInput.defaultProps = {
  placeholder: undefined,
};

const buttonStyles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#775FFB',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export const Button = (props) => {
  const { label, onPress } = props;
  const { button, buttonText } = buttonStyles;
  return (
    <TouchableOpacity onPress={onPress} style={button}>
      <Text style={buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  label: 'Click me!',
  onPress: () => console.log('Clicked!'),
};
