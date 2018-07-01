import React, { PureComponent } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Body extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const { container } = styles;
        return (
            <View style={container}>
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.85,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH,
        paddingLeft: SCREEN_WIDTH * 0.05,
        paddingRight: SCREEN_WIDTH * 0.05
    },
})