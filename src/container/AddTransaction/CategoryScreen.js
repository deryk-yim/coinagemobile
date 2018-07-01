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
import Layout from '../../component/Layout/Layout'

import { DEFAULT_CATEGORIES, SORTBY } from '../../constants/defaults';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class CategoryScreen extends PureComponent {
    render() {
        const {
            container,
            section,
            listItem,
            placeholderSections,
            categoryText
        } = styles;

        return (
            <Layout>
                <Label
                    style={[placeholderSections, { flex: 0.1 }]}
                    value={'Navigation'}
                />

                <View style={[section, { flex: 0.7 }]}>
                    <Label
                        style={{ flex: 0.15 }}
                        textStyle={categoryText}
                        value={'CATEGORY'}
                    />
                    <Select
                        data={SORTBY}
                    />

                    <ScrollableList
                        data={DEFAULT_CATEGORIES}
                        title={'Category'}
                        style={{ flex: 0.85 }}
                        renderItem={(item) => (
                            <TouchableOpacity
                                style={listItem}
                                onPress={() => console.log(item)}
                            >
                                <Text style={{ fontSize: 20, fontWeight: '500' }}>
                                    {item.toUpperCase()}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                <Label
                    style={[placeholderSections, { flex: 0.2 }]}
                    value={'Controls'}
                />
            </Layout>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: SCREEN_WIDTH
    },
    section: {
        padding: SCREEN_WIDTH * 0.1
    },
    categoryText: {
        fontSize: 24,
        fontWeight: '200'
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



