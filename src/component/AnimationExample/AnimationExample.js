// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import {Text, View, Animated, Easing, StyleSheet} from 'react-native';
// import LottieView from 'lottie-react-native';

// export default class AnimationExample extends Component {
//     constructor() {
//         super();
//     }

//     state = {
//         progress: new Animated.Value(0)
//     }
    
//     componentDidMount() {
//         Animated
//             .timing(this.state.progress, {
//             toValue: 1,
//             duration: 5000,
//             easing: Easing.linear
//         }).start();
//     }

//     render() {
//         return (<LottieView
//             source={require('../../animation/loading.json')}
//             progress={this.state.progress}/>);
//     }
// }