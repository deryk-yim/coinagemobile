import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 0.85,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    paddingLeft: SCREEN_WIDTH * 0.05,
    paddingRight: SCREEN_WIDTH * 0.05,
  },
});

export default class Body extends PureComponent {
  render() {
    const { children } = this.props;
    const { container } = styles;
    return (
      <View style={container}>
        {children}
      </View>
    );
  }
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
};
