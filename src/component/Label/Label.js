import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Label = (props) => {
    const { style, textStyle, value } = props;
    return (
        <View style={style}>
            <Text style={textStyle}>
                {value}
            </Text>
        </View>
    );
};
export default Label;

Label.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    textStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number
    ])
}