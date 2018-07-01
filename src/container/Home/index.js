import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import AnimatedDialGraph from '../../component/DialGraph/AnimatedDialGraph.js';
import Circle from '../../component/Circle/Circle.js';
import Background from '../../component/Background/Background.js';
import Svg, { Path, Polygon } from 'react-native-svg';
import Layout from '../../component/Layout/Layout';

import { THEME_COLOR } from '../../constants/theme.js'; 

const SCREEN_WIDTH = Dimensions.get('window').width;

class Home extends React.Component {
    render() {
        const { points, text, bubbleText, container, centeredContainer, roundButton } = styles;


        return (
            <Layout>
                <View style={[container, { flex: 0.85, width: SCREEN_WIDTH }]} >
                    <View style={[container, { flex: 0.7, position: 'relative' }]}>
                        <View style={{ position: 'absolute' }}>
                            <Circle
                                size={SCREEN_WIDTH * 0.73}
                            />
                        </View>
                        <View style={{ position: 'absolute' }}>
                            <Circle
                                size={SCREEN_WIDTH * 0.61}
                                backgroundColors={['#FFFFFF', '#FFFFFF']}
                                opacity={0.04}
                            />
                        </View>
                        <View style={{ position: 'absolute' }}>
                            <Circle
                                size={SCREEN_WIDTH * 0.61}
                                backgroundColors={['#FFFFFF', '#FFFFFF']}
                                opacity={0.04}
                            />
                        </View>
                        <View style={{ position: 'absolute' }}>
                            <Circle
                                size={SCREEN_WIDTH * 0.486}
                                backgroundColors={['#FFFFFF', '#FFFFFF']}
                                opacity={0.04}
                            />
                        </View>
                        <View style={{ position: 'absolute' }}>
                            <Circle
                                size={SCREEN_WIDTH * 0.486}
                                backgroundColors={['#FFFFFF', '#FFFFFF']}
                                opacity={0.04}
                            />
                        </View>
                        <AnimatedDialGraph
                            size={SCREEN_WIDTH * 0.3649}
                            width={15}
                            fill={70}
                            tintColor="#fffff"
                            lineCap="square"
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor="#3d5875"
                            renderChild={(fill) => (
                                <View style={centeredContainer}>
                                    <View style={centeredContainer}>
                                        <Text style={points}>
                                            {600}{"\n"}
                                            <Text style={[text, bubbleText]}>
                                                DOLLARS
                                            </Text>
                                        </Text>
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                    <View style={{ flex: 0.15, justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                        <TouchableOpacity
                            style={roundButton}>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 22 }}>
                                400 LEFT
                            </Text>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 12 }}>
                                THIS MONTH
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.15 }}>
                        <TouchableOpacity
                            style={{ justifyContent: 'center', alignItems: 'center', position: 'relative' }}
                        >
                            <Svg width={50} height={50}>
                                <Polygon fill="#fff" points="48.242,35.122 45.414,37.95 24.828,17.364 4.242,37.95 1.414,35.122 24.828,11.707" />
                                <Path fill="#fff" d="M45.414,39.363L24.828,18.778L4.242,39.363L0,35.121l24.828-24.828l24.828,24.828L45.414,39.363z M24.828,15.95l20.586,20.585l1.414-1.414l-22-22l-22,22l1.414,1.414L24.828,15.95z" />
                            </Svg>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 14 }}>
                                ADD
                                </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Layout>
        );
    }

}

const styles = StyleSheet.create({
    points: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        color: '#fff',
        fontSize: 33,
        fontWeight: 'bold',
        fontFamily: 'Gibson'
    },
    text: {
        backgroundColor: 'transparent',
        position: 'absolute',
        textAlign: 'center',
        color: '#fff',
    },
    bubbleText: {
        top: 38,
        fontSize: 14,
        fontWeight: 'bold'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    roundButton: {
        width: 141.3,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 50,
        borderWidth: 3,
        backgroundColor: 'transparent',
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },

});
export default Home;