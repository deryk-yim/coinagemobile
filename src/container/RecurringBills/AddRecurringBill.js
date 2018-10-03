import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker'
import CircularButton from '../../component/Button/CircularButton';
import Svg, { Path } from 'react-native-svg';
import Div from '../../component/Div/Div';
import moment from 'moment';

export default class AddRecurringBill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameOfExpense: 'NAME',
            recurringPeriod: 'RECURRING PERIOD',
            cost: 'COST'
        }
    }
    render() {
        return (
            <Div width={'100vw'}>
                <Div flex={0.2} paddingLeft={'10vw'} justifyContent={'center'}>
                   <Text style={{fontSize: 26, color: '#FFFFFF'}}>ADD RECURRING BILLS</Text> 
                </Div>
                <Div flex={0.6} paddingLeft={'10vw'}>
                    <Div justifyContent={'flex-start'}>
                        <TextInput
                            style={{ width: 300, color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}
                            keyboardType={'default'}
                            defaultValue={this.state.nameOfExpense}
                            onFocus={() => {
                                if (this.state.nameOfExpense === 'NAME OF EXPENSE')
                                    this.setState({ nameOfExpense: '' })
                            }}
                            underlineColorAndroid={'transparent'}
                            onEndEditing={() => {
                                if (!this.state.nameOfExpense) {
                                    this.setState({ nameOfExpense: 'NAME OF EXPENSE' })
                                }
                            }}
                            onChangeText={(text) => {
                                this.setState({ nameOfExpense: text }, () => {
                                    //this.props.onNameChange(text);
                                })
                            }}
                        />
                    </Div>
                    <Div justifyContent={'flex-start'}>
                        <TextInput
                            style={{ width: 300, color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}
                            keyboardType={'default'}
                            defaultValue={this.state.recurringPeriod}
                            onFocus={() => {
                                if (this.state.recurringPeriod === 'RECURRING PERIOD')
                                    this.setState({ recurringPeriod: '' })
                            }}
                            underlineColorAndroid={'transparent'}
                            onEndEditing={() => {
                                if (!this.state.recurringPeriod) {
                                    this.setState({ recurringPeriod: 'RECURRING PERIOD' })
                                }
                            }}
                            onChangeText={(text) => {
                                this.setState({ recurringPeriod: text }, () => {
                                    //this.props.onNameChange(text);
                                })
                            }}
                        />
                    </Div>
                    <Div justifyContent={'flex-start'}>
                        <TextInput
                            style={{ width: 300, color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}
                            keyboardType={'default'}
                            defaultValue={this.state.cost}
                            onFocus={() => {
                                if (this.state.cost === 'COST')
                                    this.setState({ cost: '' })
                            }}
                            underlineColorAndroid={'transparent'}
                            onEndEditing={() => {
                                if (!this.state.cost) {
                                    this.setState({ cost: 'COST' })
                                }
                            }}
                            onChangeText={(text) => {
                                this.setState({ cost: text }, () => {
                                    //this.props.onNameChange(text);
                                })
                            }}
                        />
                    </Div>
                </Div>
                <Div
                    width={'100vw'}
                    flex={0.2}
                    justifyContent={'center'}
                    alignItems={'center'}
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
        )
    }
}
