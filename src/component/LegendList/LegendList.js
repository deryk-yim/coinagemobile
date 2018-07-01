import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Item from './Item';
import ScrollableList from '../ScrollableList/ScrollableList.js';
import { TRACKING_DATA } from '../../container/Tracking/test-data.js';
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class LegendList extends Component {
    static props = {
        onSelect: PropTypes.func,
        overlay: PropTypes.node,
        disabled: PropTypes.bool,
    }

    static defaultProps = {
        disabled: false
    }

    constructor() {
        super();
        this.state = {
            datasource: TRACKING_DATA,
        }
    }
    
    render() {
        console.log(this.state.datasource);
        return (
            <View style={{ flex: 1 }}>
                <ScrollableList
                    data={ this.state.datasource }
                    title={'Category'}
                    style={{ flex: 1 }}
                    renderItem={(item) => (
                        <TouchableOpacity
                            onPress={() => {}}
                        >
                            <View style={{
                                flex: 0.2, flexDirection: 'column', alignItems: 'flex-start',
                                justifyContent: 'flex-start', width: SCREEN_WIDTH * 0.83, 
                            }}>
                                <Item title={ item.category } color={ item.color }/>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }
}

//<Item title={ item.category } color={ item.color }/>