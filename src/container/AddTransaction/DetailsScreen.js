import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker'
import CircularButton from '../../component/Button/CircularButton';
import Svg, { Path } from 'react-native-svg';
import Div from '../../component/Div/Div';
import moment from 'moment';

export default class DetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameOfExpense: 'NAME OF EXPENSE',
            date: moment().format('MM-DD-YYYY'),
            displayDate: moment().format('MMMM[\n]DD YYYY')
        }
    }

    render() {
        styles = StyleSheet.create({
            text: {
                color: '#FFFFFF',
                fontSize: 26,
                fontWeight: '100'
            }
        })

        const { text } = styles;
        return (
            <Div alignItems={'center'}>
                <Div flex={0.6} justifyContent={'center'} paddingLeft={30} paddingRight={30}>
                    <Div justifyContent={'center'} flex={0.4}>
                        <Text style={text}>
                            NAME & DATE
                        </Text>
                    </Div>
                    <Div flex={0.3} justifyContent={'flex-end'}>
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
                                    this.props.onNameChange(text);
                                })
                            }}
                        />
                    </Div>
                    <Div flex={0.3}>
                        <Div justifyContent={'center'}>
                            <Text style={{
                                position: 'absolute', 
                                fontSize: 42, 
                                color: '#ffffff',
                                fontWeight: 'bold'}}>
                                {this.state.displayDate.toUpperCase()}
                            </Text>
                            <DatePicker
                                showIcon={false}
                                hideText={true}
                                style={{ width: 250 }}
                                date={this.state.date}
                                mode="date"
                                placeholder="select date"
                                format={"MM-DD-YYYY"}
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateTouchBody: {
                                        height: 100,
                                        // backgroundColor: 'orange'
                                    },
                                    dateInput: {
                                        height: 100,
                                        borderWidth: 0,
                                        flex: 1,
                                        backgroundColor: 'transparent',
                                    },
                                    dateText: {
                                        color: 'purple',
                                        fontWeight: 'bold',
                                        fontSize: 36,

                                    }
                                }}
                                onDateChange={(date) => { 
                                    this.setState({ 
                                        date: date, 
                                        displayDate: moment(new Date(date).toISOString()).format('MMMM[\n]DD YYYY') 
                                    }, () => {
                                        this.props.onDateChange(this.state.date);
                                    })
                                    
                                }}
                            />
                        </Div>
                    </Div>
                </Div>
                <Div
                    flex={0.4}
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
        );
    }
}
