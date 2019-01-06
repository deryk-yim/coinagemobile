import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

export default class Background extends PureComponent {
  render() {
    const { color, style, children } = this.props;
    return (
      <View
        colors={color}
        style={[{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }, style]}
      >
        {children}
      </View>
    );
  }
}

Background.propTypes = {
  color: PropTypes.string,
  style: PropTypes.number,
  children: PropTypes.node,
};

Background.defaultProps = {
  color: '#FFFFFF',
  style: null,
  children: null,
};
