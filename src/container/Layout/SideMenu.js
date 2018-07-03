import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Background from '../../component/Background/Background';
import CircularButton from '../../component/Button/CircularButton';
import { THEME_COLOR } from '../../constants/theme';

export default class CustomDrawer extends Component {
    getMenuItems = () => {
        const { routes } = this.props;
        const routesArr = Object.keys(routes).map((routeName, i) => {
            if(routes[routeName].sideMenu){
                return (
                    <TouchableOpacity 
                        key={i} 
                        style={styles.touchableOpacity}
                        onPress={()=>{
                            this.props.navigation.navigate(routeName)
                        }}
                    >
                        <Text style={styles.label}>
                            {routes[routeName].label}
                        </Text>
                    </TouchableOpacity>
                )
            }
        }).filter(item => item) //filters out items disabled for menu
        return routesArr;
    }

    render() {
        const {menuContainer, outterSidebarHeaderContainer, innerSidebarHeaderContainer, heading1, heading2, container, button} = styles;
        return (
            <Background
                colors={THEME_COLOR.backgroundGradient2}
                start={{ x: 0.5, y: 1 }}
                end={{ x: 0.5, y: 0}}
                style={container}
            >
                <View style={outterSidebarHeaderContainer}>
                    <View style={innerSidebarHeaderContainer}>
                        <CircularButton 
                            btnColor={'#ffffff'} 
                            onPress={()=>{
                                this.props.navigation.closeDrawer();
                            }}
                        >
                            <Text style={{color: '#F82279', fontSize: 24}}>X</Text>
                        </CircularButton>
                        <TouchableOpacity 
                            style={{paddingLeft: 30}}
                            onPress={()=>{
                                this.props.navigation.navigate('Home');
                            }}
                        >
                            <Text style={heading1}>COINAGE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={menuContainer}>
                    <View style={{marginBottom: 50}}>
                        <Text style={heading2}>MENU</Text>
                    </View>
                    {this.getMenuItems()}
                </View>
            </Background>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 45
    },
    outterSidebarHeaderContainer: {
        flex: 0.15,
        justifyContent: 'center'
    },
    innerSidebarHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    menuContainer: {
        flex: 0.85,
        justifyContent: 'center'
    },
    heading1: {
        color: '#ffffff',
        fontSize: 26,
        fontWeight: 'bold'
    },
    heading2: {
        color: '#ffffff',
        fontSize: 26,
        fontWeight: '100'
    },
    label: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    touchableOpacity: {
        marginBottom: 30
    },
    button: {
        backgroundColor: '#ffffff', 
    }

})