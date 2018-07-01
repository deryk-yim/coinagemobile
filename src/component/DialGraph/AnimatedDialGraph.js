import React from 'react';
import PropTypes from 'prop-types';
import { Animated, AppState, Easing, View, ViewPropTypes} from 'react-native';
import DialGraph from './DialGraph';

const AnimatedProgress = Animated.createAnimatedComponent(DialGraph);

export default class AnimatedDialGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartFillAnimation: new Animated.Value(props.prefill || 0)
        }
    }

    componentDidMount = () => this.animateFill();
    componentDidUpdate = (prevProps) => {
        if (prevProps.fill !== this.props.fill) {
            this.animateFill();
        }
    }

    animateFill = () => {
        const { tension, friction, onAnimationComplete } = this.props;

        Animated.spring(
            this.state.chartFillAnimation,
            {
                toValue: this.props.fill,
                tension,
                friction
            }
        ).start(onAnimationComplete);
    }

    performTimingAnimation = (toValue, duration, easing = Easing.linear) => {
        const { onLinearAnimationComplete } = this.props;

        Animated.timing(this.state.chartFillAnimation, {
            toValue,
            easing,
            duration,
        }).start(onLinearAnimationComplete);
    }

    render() {
        const { fill, prefill, ...other } = this.props;

        return (
            <AnimatedProgress
                {...other}
                fill={this.state.chartFillAnimation}
            />
        );
    }
}

AnimatedDialGraph.propTypes = {
    style: ViewPropTypes.style,
    size: PropTypes.number.isRequired,
    fill: PropTypes.number,
    prefill: PropTypes.number,
    width: PropTypes.number.isRequired,
    tintColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    backgroundColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    tension: PropTypes.number,
    friction: PropTypes.number,
    onAnimationComplete: PropTypes.func,
    onLinearAnimationComplete: PropTypes.func,
};

AnimatedDialGraph.defaultProps = {
    tension: 7,
    friction: 10
};