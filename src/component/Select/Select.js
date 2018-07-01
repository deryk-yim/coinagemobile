import React, { Component } from 'react'
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';

export default class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.data[0],
            isHidden: true,
        }
    }

    toggleDropdown = (selected) => {
        this.setState({
            isHidden: !this.state.isHidden,
            selected
        })
    }

    renderDropdownList = (data) => {
        let dropdownItems = data.map((item, key) => {
            let props = { key: key }
            return React.cloneElement(this.renderItem(item), props)
        })
        return (
            <ScrollView style={[styles.dropdown, this.props.style]}>
                {dropdownItems}
            </ScrollView>
        )
    }

    renderItem = (item) => (
        <TouchableOpacity onPress={() => { this.toggleDropdown(item) }}>
            <View style={{ height: 30 }}>
                <Text style={{ fontSize: 14 }}>{item.label}</Text>
            </View>
        </TouchableOpacity>
    )

    render() {
        const { isHidden } = this.state
            , { data, labelStyle } = this.props
            , { touchableOpacity, touchableOpacityText } = styles;
        return (
            <View style={{ position: 'relative', height: 50 }}>
                {
                    isHidden ?
                        <TouchableOpacity
                            onPress={this.toggleDropdown}
                            style={{ position: 'absolute', padding: 10 }}
                        >
                            <Text style={labelStyle}>
                                {this.state.selected.label}
                            </Text>
                        </TouchableOpacity>
                        :
                        this.renderDropdownList(data)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    touchableOpacity: {
        position: 'relative',
    },
    touchableOpacityText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'rgba(0,0,0, 0.7)'
    },
    dropdown: {
        position: 'absolute',
        padding: 10,
        width: 100,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        elevation: 1,
        zIndex: 1
    }
})

