import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import CircularButton from '../../component/Button/CircularButton';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Header extends PureComponent {
    render() {
        const { navContainer, rowContainers, navBtnContainer, notificationBtnContainer, text, notificationText } = styles;
        return (
            <View style={navContainer}>
                <View style={rowContainers}>
                    <View style={navBtnContainer}>
                        <CircularButton
                            size={50}
                            btnColor={this.props.btnColor}
                            onPress={() => { this.props.navigation.openDrawer() }}
                        >
                            <Text style={text}>C</Text>
                        </CircularButton>
                    </View>
                    <View style={notificationBtnContainer}>
                        <CircularButton
                            size={30}
                            btnColor={this.props.btnColor}
                        >
                            <Text style={notificationText}>3</Text>
                        </CircularButton>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navContainer: {
        flex: 0.15,
        justifyContent: 'center',
        width: SCREEN_WIDTH,
        paddingLeft: SCREEN_WIDTH * 0.05,
        paddingRight: SCREEN_WIDTH * 0.05
    },
    rowContainers: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    navBtnContainer: {
        flex: 0.5,
        alignItems: 'flex-start'
    },
    notificationBtnContainer: {
        flex: 0.5,
        alignItems: 'flex-end'
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    notificationText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
})