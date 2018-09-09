import React, { PureComponent } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import ScrollableList from '../../component/ScrollableList/ScrollableList';
import Label from '../../component/Label/Label';
import Select from '../../component/Select/Select';

import { DEFAULT_CATEGORIES, SORTBY } from '../../constants/defaults';
import Div from '../../component/Div/Div';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class CategoryScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    onSelect = (item) => {
        this.setState({ selected: item },
            () => this.props.onValueChange(item)
        )
    }

    render() {
        const {
            section,
            listItem,
            categoryText,
            text
        } = styles;

        return (
            <View style={[section, { flex: 1}]}>
                <View style={{flexDirection: 'row'}}>
                    <Label
                        style={{ flex: 0.5}}
                        textStyle={categoryText}
                        value={'CATEGORY'}
                    />
                    <Select
                        data={SORTBY}
                        style={{ flex: 0.5, alignItems: 'flex-end' }}
                        labelStyle={{
                            color: '#FFFFFF',
                            fontWeight: '500'
                        }}
                    />
                </View>

                <ScrollableList
                    data={DEFAULT_CATEGORIES}
                    title={'Category'}
                    style={{ flex: 0.85 }}
                    renderItem={(item) => (
                        <TouchableOpacity
                            style={listItem}
                            onPress={() => this.onSelect(item)}
                        >
                            {
                                this.state.selected === item ?
                                    <Text style={[text, { color: '#F82279', backgroundColor: '#FFFFFF' }]}>
                                        {item.toUpperCase()}
                                    </Text>
                                    :
                                    <Text style={text}>
                                        {item.toUpperCase()}
                                    </Text>
                            }
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: SCREEN_WIDTH
    },
    section: {
        padding: SCREEN_WIDTH * 0.1,
        width: SCREEN_WIDTH
    },
    categoryText: {
        fontSize: 24,
        fontWeight: '200',
        color: '#FFFFFF'
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        color: '#ffffff'
    },
    listItem: {
        height: 60,
        justifyContent: 'center'
    },
    placeholderSections: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center'
    }
});



