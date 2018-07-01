import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React, { PureComponent } from 'react';
import Knob from '../../component/Knob/Knob';
import Circle from '../../component/Circle/Circle';
import Layout from '../../component/Layout/Layout';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class AmountScreen extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            value: 0,
        }
    }

    render() {
        return (
            <Layout>
                <Circle size={SCREEN_WIDTH * 0.6375}>
                    <Knob
                        fontSize={32}
                        textColor={'#ffffff'}
                        fullRotationValue={50}
                        value={this.state.value}
                        borderStrokeColor={'transparent'}
                        indicatorColor={'#ffffff'}
                        showIndicator={true}
                        indicatorRadius={5}
                        indicatorOrbitRadius={0.75}
                        onValueChange={(value) => {
                            this.setState({ value: value })
                        }}
                    />
                </Circle>
            </Layout>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
