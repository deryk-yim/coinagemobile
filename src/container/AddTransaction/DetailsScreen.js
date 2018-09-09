import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import CircularButton from '../../component/Button/CircularButton';
import Svg, { Path } from 'react-native-svg';
import Div from '../../component/Div/Div';


export default class DetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameOfExpense: 'NAME OF EXPENSE',
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
                <Div flex={0.6} justifyContent={'center'}>
                    <Div justifyContent={'center'}>
                        <Text style={text}>
                            NAME & DATE
                        </Text>
                    </Div>
                    <Div>
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
                                this.setState({ nameOfExpense: text })
                            }}
                        />
                    </Div>
                    <Div backgroundColor={'red'}>
                        <Div backgroundColor={'green'}>

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

                            //this.props.navigation.navigate('RecurringBillsDetails');
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
