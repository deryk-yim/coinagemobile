import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import { View } from 'react-native';


import Layout from '../Layout/Layout';
import AmountScreen from './AmountScreen';
import CategoryScreen from './CategoryScreen';
import DetailsScreen from './DetailsScreen';

export default class AddTransaction extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <Swiper
                showsButtons={false}
                dotColor={'rgba(255,255,255,.4)'}
                activeDotColor={'#FFFFFF'}
                loop={false}
            >
                <Layout navigation={this.props.navigation}>
                    <AmountScreen 
                        navigation={this.props.navigation} 
                        onValueChange={(value) => {
                            this.setState({ amount: value })
                        }}
                    />
                </Layout>
                <Layout
                    navigation={this.props.navigation}
                    bgColors={['#934CDB', '#F82279']}
                    bgStart={{ x: 0, y: 1 }}
                    bgEnd={{ x: 1, y: 0 }}
                >
                    <CategoryScreen 
                        navigation={this.props.navigation} 
                        onValueChange={(value) => {
                            this.setState({ category: value })
                        }}
                    />
                </Layout>
                <Layout
                    navigation={this.props.navigation}
                    bgColors={['#934CDB', '#F82279']}
                    bgStart={{ x: 0, y: 1 }}
                    bgEnd={{ x: 1, y: 0 }}
                >
                    <DetailsScreen 
                        navigation={this.props.navigation}
                        onDateChange={(date)=>{
                            this.setState({ date: date })
                        }}
                        onNameChange={(name)=>{
                            this.setState({ name: name })
                        }}
                        onSubmit={() => console.log(this.state)}
                    />
                </Layout>
            </Swiper>
        )
    }
}
