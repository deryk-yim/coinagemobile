import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Circle from '../Circle/Circle';

export default Item = (props) => {
    const backgroundColors = ['#5189DC', '#944BDB'];
    return (
        <View style={{flexDirection:'row', alignContent:'center', justifyContent:'center', paddingBottom: 22 }}>
            <View style={{  alignContent: 'center', justifyContent: 'center', paddingRight: 5 }}>
                <Circle size={12} backgroundColors={ props.color }/>
            </View>
            <Text style={styles.text}>
                { props.title }
            </Text>
        </View>
    );
}

Item.propTypes = {
    title: PropTypes.string,
    color: PropTypes.array,
    isSelected: PropTypes.bool
}

const styles = StyleSheet.create({
    text: {
        backgroundColor: 'transparent',
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    }
});