import React, { PureComponent } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native';
import CircularButton from '../Button/CircularButton';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Header extends PureComponent {
    render() {
        const { navContainer, rowContainers, navBtnContainer, notificationBtnContainer } = styles;
        return (
            <View style={navContainer}>
                <View style={rowContainers}>
                    <View style={navBtnContainer}>
                        <CircularButton
                            size={50}
                            label={"C"}
                            fontSize={32}
                            onPress={() => { console.log('Pressed') }}
                        />
                    </View>
                    <View style={notificationBtnContainer}>
                        <CircularButton
                            size={30}
                            label={"3"}
                            fontSize={16}
                        />
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
    }
})