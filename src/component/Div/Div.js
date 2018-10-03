import React from 'react';
import { View, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height

getSize = (value, size) => value.match(/\d+/g).map(Number) / 100 * size;
ConvertRelativeUnit = (value) => {
    const isPercentage = new RegExp('[\\d]+%$', 'g')
        , isViewHeight = new RegExp('[\\d]+vh$', 'g')
        , isViewWidth = new RegExp('[\\d]+vw$', 'g')
    
    if (isPercentage.test(value))
        console.log('percentage')
    else if (isViewHeight.test(value))
        return this.getSize(value, SCREEN_HEIGHT)
    else if (isViewWidth.test(value))
        return this.getSize(value, SCREEN_WIDTH)
    else
        return value;
}

const Div = (Props) => {
    styles = {}
    Object.keys(Props).forEach((key, index) => {
        if (key !== "children") {
            let value = Object.values(Props)[index];
            styles[key] = this.ConvertRelativeUnit(value);
        }
    })
    return (
        <View style={styles}>
            {Props.children}
        </View>
    );
};
export default Div;

// Div.propTypes = {
//     flex: PropTypes.number,
//     flexDirection: PropTypes.string,
//     justifyContent: PropTypes.string,
//     alignItems: PropTypes.string,
//     width: PropTypes.number,
//     height: PropTypes.number,
//     backgroundColor: PropTypes.string,
// }

Div.defaultProps = {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: undefined,
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0
}

