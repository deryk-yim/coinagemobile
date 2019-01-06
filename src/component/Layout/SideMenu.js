import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, StyleSheet,
} from 'react-native';
import CircularButton from '../Button/CircularButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 45,
    backgroundColor: '#775FFB',
  },
  outterSidebarHeaderContainer: {
    flex: 0.15,
    justifyContent: 'center',
  },
  innerSidebarHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuContainer: {
    flex: 0.85,
    justifyContent: 'center',
  },
  heading1: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  heading2: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '100',
  },
  label: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  touchableOpacity: {
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#ffffff',
  },
});

export default class CustomDrawer extends Component {
  getMenuItems = () => {
    const { routes, navigation } = this.props;
    const routesArr = Object.keys(routes).map((routeName) => {
      if (routes[routeName].sideMenu) {
        return (
          <TouchableOpacity
            key={routes[routeName].label}
            style={styles.touchableOpacity}
            onPress={() => {
              navigation.navigate(routeName);
            }}
          >
            <Text style={styles.label}>
              {routes[routeName].label}
            </Text>
          </TouchableOpacity>
        );
      }
      return null;
    }).filter(item => item);
    return routesArr;
  }

  render() {
    const { navigation } = this.props;
    const {
      menuContainer,
      outterSidebarHeaderContainer,
      innerSidebarHeaderContainer,
      heading1, heading2, container,
    } = styles;
    return (
      <View style={container}>
        <View style={outterSidebarHeaderContainer}>
          <View style={innerSidebarHeaderContainer}>
            <CircularButton
              btnColor="#ffffff"
              onPress={() => {
                navigation.closeDrawer();
              }}
            >
              <Text style={{ color: '#775FFB', fontSize: 24 }}>X</Text>
            </CircularButton>
            <TouchableOpacity
              style={{ paddingLeft: 30 }}
              onPress={() => {
                navigation.navigate('Home');
              }}
            >
              <Text style={heading1}>Koinij.</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={menuContainer}>
          <View style={{ marginBottom: 50 }}>
            <Text style={heading2}>MENU</Text>
          </View>
          {this.getMenuItems()}
        </View>
      </View>
    );
  }
}

CustomDrawer.propTypes = {
  routes: PropTypes.shape({
    label: PropTypes.string,
    screen: PropTypes.func,
    sideMenu: PropTypes.bool,
  }).isRequired,
};
