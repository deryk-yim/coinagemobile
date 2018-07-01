import React, { PureComponent } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { THEME_COLOR } from '../../constants/theme.js';
import PropTypes from 'prop-types';

export default class Background extends PureComponent {
    static propTypes = {
        colors: PropTypes.arrayOf(PropTypes.string),
        start: PropTypes.object,
        end: PropTypes.object,
        style: PropTypes.object
    }
    static defaultProps = {
        colors: THEME_COLOR.backgroundGradient,
        start: { x: 0.0, y: 0.7 },
        end: { x: 1.0, y: 0.7 }
    }
    render() {
        const { colors, start, end, style } = this.props; 
        return (
            <LinearGradient
                colors={colors}
                start={start}
                end={end}
                style={[{ 
                    flex: 1, 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    position: 'relative' }, 
                    style]}
            >
                {this.props.children}
            </LinearGradient>
        );
    }
}