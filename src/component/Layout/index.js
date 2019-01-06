import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, StyleSheet, Dimensions, TouchableOpacity,
} from 'react-native';
import CircularButton from '../Button/CircularButton';

const SCREEN_WIDTH = Dimensions.get('window').width;

/**---------
  Layout.js
 ---------*/
const layoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#FFFFFF',
  },
});
const Layout = (props) => {
  const { navigation, children } = props;
  const { container } = layoutStyles;
  return (
    <View style={container}>
      <Header navigation={navigation} />
      <Body>
        {children}
      </Body>
    </View>
  );
};
export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

/**---------
  Body.js
 ---------*/
const bodyStyles = StyleSheet.create({
  container: {
    flex: 0.85,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    paddingLeft: SCREEN_WIDTH * 0.05,
    paddingRight: SCREEN_WIDTH * 0.05,
  },
});

const Body = (props) => {
  const { children } = props;
  const { container } = bodyStyles;
  return (
    <View style={container}>
      {children}
    </View>
  );
};

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

/**---------
  Header.js
 ---------*/
const headerStyles = StyleSheet.create({
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

const Header = (props) => {
  const {
    btnColor,
    navigation,
  } = props;
  const {
    navContainer,
    rowContainers,
    navBtnContainer,
    notificationBtnContainer,
    text,
    textPurple,
    notificationText,
  } = headerStyles;
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
};

Header.propTypes = {
  btnColor: PropTypes.string,
};

Header.defaultProps = {
  btnColor: '#775FFB',
};
