import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, StyleSheet, Dimensions, TouchableOpacity,
} from 'react-native';
import CircularButton from '../../component/Button/CircularButton';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  navContainer: {
    flex: 0.15,
    justifyContent: 'center',
    width: SCREEN_WIDTH,
    paddingLeft: SCREEN_WIDTH * 0.05,
    paddingRight: SCREEN_WIDTH * 0.05,
  },
  rowContainers: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navBtnContainer: {
    flex: 0.5,
    alignItems: 'flex-start',
  },
  notificationBtnContainer: {
    flex: 0.5,
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
  },
  textPurple: {
    color: '#775FFB',
  },
  notificationText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default class Header extends PureComponent {
  render() {
    const {
      btnColor,
      navigation,
    } = this.props;
    const {
      navContainer,
      rowContainers,
      navBtnContainer,
      notificationBtnContainer,
      text,
      textPurple,
      notificationText,
    } = styles;
    return (
      <View style={navContainer}>
        <View style={rowContainers}>
          <View style={navBtnContainer}>
            <TouchableOpacity onPress={() => { navigation.openDrawer(); }}>
              <Text style={text}>
                <Text>Koinij</Text>
                <Text style={textPurple}>.</Text>
              </Text>
            </TouchableOpacity>
          </View>
          <View style={notificationBtnContainer}>
            <CircularButton
              size={30}
              btnColor={btnColor}
            >
              <Text style={notificationText}>3</Text>
            </CircularButton>
          </View>
        </View>
      </View>
    );
  }
}

Header.propTypes = {
  navigation: PropTypes.func.isRequired,
  btnColor: PropTypes.string,
};

Header.defaultProps = {
  btnColor: '#775FFB',
};
