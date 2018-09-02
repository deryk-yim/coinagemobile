import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import { View } from 'react-native';

import AmountScreen from './AmountScreen';
import CategoryScreen from './CategoryScreen';
import DetailsScreen from './DetailsScreen';

export default class AddTransaction extends Component {
    render() {
        return (
            <Swiper
                showsButtons={false}
                dotColor={'rgba(255,255,255,.4)'}
                activeDotColor={'#FFFFFF'}
                loop={false}
            >

                <AmountScreen navigation={this.props.navigation} />
                <CategoryScreen navigation={this.props.navigation} />

            </Swiper>
        )
    }
}

// <DetailsScreen navigation={this.props.navigation} />
