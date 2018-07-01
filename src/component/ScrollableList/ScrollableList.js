import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const ScrollableList = (props) => {
    const { style, height, data } = props;
    const display = data.map((item, key) => {
        var elem = React.cloneElement(props.renderItem(item), { key });
        return elem;
    });
    const propsHeight = props.height;

    const { container, scrollViewStyle } = StyleSheet.create({
        container: {
            flex: 1
        },
        scrollViewStyle: {
            position: height ? 'absolute' : 'relative',
            height: height,
            paddingBottom: 100
        },
    })

    return (
        <View style={[container, style]}>
            <ScrollView
                ListFooterComponent={<Text>Hello</Text>}
                showsVerticalScrollIndicator={false}
                snapToInterval={1}
                snapToAlignment="start"
                style={scrollViewStyle}
            >
                <View>
                    {display}
                </View>
            </ScrollView>
        </View>
    );


};
export default ScrollableList;

ScrollableList.propTypes = {
    style: PropTypes.object,
    data: PropTypes.array.isRequired,
    height: PropTypes.number,
    renderItem: PropTypes.func.isRequired,
}

