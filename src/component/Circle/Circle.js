import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const Circle = (props) => {
  const {
    backgroundColor, size, opacity,
  } = props;
  const styles = StyleSheet.create({
    circle: {
      backgroundColor,
      height: size,
      width: size,
      borderRadius: size / 2,
      justifyContent: 'center',
      alignItems: 'center',
      opacity,
    },
  });
  const { children } = props;
  const { circle } = styles;

  return (
    <View
      style={circle}
    >
      {children}
    </View>
  );
};

export default Circle;

Circle.propTypes = {
  size: PropTypes.number,
  backgroundColor: PropTypes.string,
  opacity: PropTypes.number,
  children: PropTypes.node,
};

Circle.defaultProps = {
  size: 300,
  backgroundColor: '#FFFFFF',
  opacity: 1,
  children: null,
};
