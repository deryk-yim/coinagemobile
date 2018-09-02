import React, { Component } from 'react';
import Div from '../../component/Div/Div';
import { Text } from 'react-native';

class Test extends Component {
    render() {
        return (
            <Div>
                <Div backgroundColor="red" flex={2}><Text>Hello</Text></Div>
                <Div backgroundColor="orange" flex={1}><Text>Hello</Text></Div>
                <Div backgroundColor="yellow" flex={1}><Text>Hello</Text></Div>
                <Div backgroundColor="green" flex={1}><Text>Hello</Text></Div>
                <Div backgroundColor="blue" flex={1}><Text>Hello</Text></Div>
                <Div backgroundColor="violet" flex={1}><Text>Hello</Text></Div>
            </Div>
        );
    }
}

export default Test;