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
import Layout from '../Layout/Layout'

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
            <Layout 
                navigation={this.props.navigation}
                bgColors={['#934CDB', '#F82279']}
                bgStart={{ x: 0, y: 1 }}
                bgEnd={{ x: 1, y: 0}}
            >
                <View style={[section, { flex: 1}]}>
                    <View style={{flexDirection: 'row'}}>
                        <Label
                            style={{ flex: 0.5}}
                            textStyle={categoryText}
                            value={'CATEGORY'}
                        />
                        <Select data={SORTBY} style={{flex: 0.5, alignItems: 'flex-end'}}/>
                    </View>

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
        padding: SCREEN_WIDTH * 0.1,
        width: SCREEN_WIDTH
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



