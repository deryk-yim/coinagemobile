import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Div = (Props) => {
    const { div } = StyleSheet.create({
        div: {
            flex: Props.flex,
            flexDirection: Props.flexDirection,
            justifyContent: Props.justifyContent,
            alignItems: Props.alignItems,
            width: Props.width,
            height: Props.height,
            backgroundColor: Props.backgroundColor,
            padding: Props.padding,
            paddingTop: Props.paddingTop,
            paddingRight: Props.paddingRight,
            paddingBottom: Props.paddingBottom,
            paddingLeft: Props.paddingLeft,
        }
    })
    return (
        <View style={div}>
            {Props.children}
        </View>
    );
};
export default Div;

Div.propTypes = {
    flex: PropTypes.number,
    flexDirection: PropTypes.string,
    justifyContent: PropTypes.string,
    alignItems: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    backgroundColor: PropTypes.string,
}

Div.defaultProps = {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: SCREEN_WIDTH,
    height: undefined,
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0
}

