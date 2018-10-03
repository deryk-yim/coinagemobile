import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import ScrollableList from '../../component/ScrollableList/ScrollableList';
import Div from '../../component/Div/Div';
import CircularButton from '../../component/Button/CircularButton';
import Svg, { Path } from 'react-native-svg';
import { RECURRING_BILLS } from '../../constants/defaults';


export default class RecurringBillsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    onSelect = (item) => {
        this.setState({ selected: item },
            // () => this.props.onValueChange(item)
        )
    }
    render() {
        return (
            <Div width={'100vw'}>
                <Div flex={0.25} paddingLeft={'10vw'} justifyContent={'center'}>
                    <Text style={{
                        fontSize: 26,
                        color: '#FFFFFF',
                        fontWeight: '100',
                    }}>RECURRING BILLS</Text>
                </Div>
                <Div flex={0.55} paddingLeft={'10vw'}>
                    <ScrollableList
                        data={RECURRING_BILLS}
                        title={'Category'}
                        style={{ flex: 0.9 }}
                        renderItem={(item) => (
                            <TouchableOpacity
                                style={{
                                    height: 60,
                                    justifyContent: 'center'
                                }}
                                onPress={() => this.onSelect(item)}
                            >
                                {
                                    this.state.selected === item ?
                                        <Div>
                                            <Text style={{
                                                fontSize: 20,
                                                fontWeight: '500',
                                                color: '#F82279', 
                                                backgroundColor: '#FFFFFF'
                                                }}>
                                                {item.toUpperCase()}
                                            </Text>
                                        </Div>
                                        :
                                        <Div>
                                            <Text style={{
                                                fontSize: 20,
                                                fontWeight: '500',
                                                color: '#ffffff'
                                            }}>
                                                {item.toUpperCase()}
                                            </Text>
                                        </Div>
                                }
                            </TouchableOpacity>
                        )}
                    />
                </Div>
                <Div 
                    flex={0.2}
                    alignItems={'center'}
                    justifyContent={'flex-start'}
                    width={'100vw'}
                >
                    <CircularButton
                        btnColor={'#FFFFFF'}
                        size={65}
                        selected={this.state.selected}
                        onPress={() => {
                            this.props.onSubmit();
                        }}
                    >
                        <Svg width={50} height={50} viewBox="-5 -5 30 30">
                            <Path
                                stroke={'#F82279'}
                                strokeWidth={2}
                                d="M0,10h20 M10,0v20" />
                        </Svg>
                    </CircularButton>
                </Div>
            </Div>
        );
    }
}
