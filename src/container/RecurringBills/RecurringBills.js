import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import Swiper from 'react-native-swiper';

import RecurringBillsList from './RecurringBillsList';
import AddRecurringBill from './AddRecurringBill';

export default class RecurringBills extends Component {
    render() {
        return (
            <Swiper>
                <Layout
                    navigation={this.props.navigation}
                    bgColors={['#934CDB', '#F82279']}
                    bgStart={{ x: 0, y: 1 }}
                    bgEnd={{ x: 1, y: 0 }}>
                    <RecurringBillsList/>
                </Layout>
                <Layout 
                    navigation={this.props.navigation}
                    bgColors={['#934CDB', '#F82279']}
                    bgStart={{ x: 0, y: 1 }}
                    bgEnd={{ x: 1, y: 0 }}>
                    <AddRecurringBill/>
                </Layout>
            </Swiper>
        )
    }
}
