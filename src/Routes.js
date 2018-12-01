import React from 'react';
import PropTypes from 'prop-types';
import { createDrawerNavigator } from 'react-navigation';
import Home from './container/Home/index';
import AmountScreen from './container/AddTransaction/AmountScreen';
import CategoryScreen from './container/AddTransaction/CategoryScreen';
import Tracking from './container/Tracking/index';
import MonthlyDetail from './container/MonthlyDetail/index';
import SideMenu from './container/Layout/SideMenu';

const routes = {
  Home: {
    label: 'HOME',
    sideMenu: false,
    screen: Home,
  },
  AddTransaction: {
    label: 'TRANSACTION',
    sideMenu: true,
    screen: AmountScreen,
  },
  Tracking: {
    label: 'TRACKING',
    sideMenu: true,
    screen: Tracking,
  },
  Budget: {
    label: 'BUDGET',
    sideMenu: true,
    screen: Tracking,
  },
  RecurringBills: {
    label: 'RECURRING BILLS',
    sideMenu: true,
    screen: Tracking,
  },
  LifeExpense: {
    label: 'LIFE EXPENSE',
    sideMenu: true,
    screen: Tracking,
  },
  MonthlyDetail: {
    label: 'MONTHLY DETAIL',
    sideMenu: false,
    screen: MonthlyDetail,
  },
  Categories: {
    label: 'CATEGORIES',
    sideMenu: true,
    screen: CategoryScreen,
  },
  Settings: {
    label: 'SETTINGS',
    sideMenu: true,
    screen: CategoryScreen,
  },
};

const content = ({ navigation }) => (
  <SideMenu
    navigation={navigation}
    routes={routes}
  />
);

export default createDrawerNavigator(
  routes, {
    initialRouteName: 'MonthlyDetail',
    contentComponent: content,
  },
);

content.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
