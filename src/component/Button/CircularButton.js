import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Circle from '../Circle/Circle';

const CircularButton = (props) => {
  const {
    size,
    btnColor,
    style,
    children,
    onPress,
  } = props;
  const styles = StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      width: size,
      height: size,
      borderRadius: size * 0.5,
      backgroundColor: btnColor,
    },
  });
  const { button } = styles;

  return (
    <TouchableOpacity
      style={[button, style]}
      onPress={onPress}
    >
      {
        !btnColor
          ? (
            <Circle size={size}>
              {children}
            </Circle>
          )
          : (
            <View>
              {children}
            </View>
          )
      }
    </TouchableOpacity>
  );
};
export default CircularButton;

CircularButton.propTypes = {
  style: PropTypes.number,
  children: PropTypes.node,
  size: PropTypes.number,
  btnColor: PropTypes.string,
  onPress: PropTypes.func,
};

CircularButton.defaultProps = {
  style: null,
  children: PropTypes.node,
  size: 50,
  btnColor: '#000000',
  onPress() { console.log('Pressed!'); },
};
