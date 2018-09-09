import Home from './container/Home/index'
import AddTransaction from './container/AddTransaction/AddTransaction';
import CategoryScreen from './container/AddTransaction/CategoryScreen';
import Tracking from './container/Tracking/index';
import SideMenu from './container/Layout/SideMenu';
import { createDrawerNavigator } from 'react-navigation';
import React from 'react';

import Test from './container/AddTransaction/Test';

const routes = {
    Home: {
        label: 'HOME',
        sideMenu: false,
        screen: Home,
    },
    AddTransaction: {
        label: 'TRANSACTION',
        sideMenu: true,
        screen: AddTransaction
    },
    Tracking: {
        label: 'TRACKING',
        sideMenu: true,
        screen: Tracking
    },
    Budget: {
        label: 'BUDGET',
        sideMenu: true,
        screen: Tracking //placecholder
    },
    RecurringBills: {
        label: 'RECURRING BILLS',
        sideMenu: true,
        screen: Tracking //placecholder
    },
    LifeExpense: {
        label: 'LIFE EXPENSE',
        sideMenu: true,
        screen: Tracking //placecholder
    },
    Categories: {
        label: 'CATEGORIES',
        sideMenu: true,
        screen: CategoryScreen
    },
    Settings: {
        label: 'SETTINGS',
        sideMenu: true,
        screen: Test //placecholder
    },
}

export default createDrawerNavigator(
    routes
, {
    initialRouteName: 'AddTransaction',
    contentComponent: ({navigation}) => (
        <SideMenu 
            navigation={navigation} 
            routes={routes}
        />
    )
})
