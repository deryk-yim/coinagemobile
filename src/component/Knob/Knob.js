import { View, PanResponder, Dimensions } from 'react-native';
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import Svg, { Path, Circle, G, Text } from 'react-native-svg'

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Knob extends PureComponent {
    static propTypes = {
        size: PropTypes.number,
        radius: PropTypes.number,
        fontSize: PropTypes.number,
        textColor: PropTypes.string,
        fullRotationValue: PropTypes.number,
        value: PropTypes.number.isRequired,
        onValueChange: PropTypes.func.isRequired,
        borderStrokeColor: PropTypes.string,
        borderStrokeWidth: PropTypes.number,
        showIndicator: PropTypes.bool,
        indicatorRadius: PropTypes.number,
        indicatorColor: PropTypes.string,
        indicatorOrbitRadius: PropTypes.number
    }
    static defaultProps = {
        size: SCREEN_WIDTH,
        radius: (SCREEN_WIDTH / 2) * 0.6375 ,
        fontSize: 30,
        textColor: '#ff5b5b',
        fullRotationValue: 360,
        borderStrokeColor: '#eee',
        borderStrokeWidth: 0.5,
        showIndicator: true,
        indicatorRadius: 5,
        indicatorColor: '#ff5b5b',
        indicatorOrbitRadius: 1,

    }
    constructor(props) {
        super(props)
        const { size, radius } = this.props
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: this.handlePanResponderMove,
            onPanResponderGrant: this.handlePanResponderGrant,
            onPanResponderRelease: this.handlePanResponderRelease
        })
        this.state = {
            panResponder,
            circleCenterX: false,
            circleCenterY: false,
            cx: size / 2,
            cy: size / 2,
            r: radius,
            value: 0,
            displayAngle: 0,
            grantAngle: 0,
            fullRotation: 0,
            quadrant: { after: null, before: null },
            touchQuadrant: null,
        }
    }
    handlePanResponderMove = (evt, gestureState) => {
        const { moveX, moveY } = gestureState
            , { touchQuadrant } = this.state
            , displayAngle = this.coordinatesToAngle(moveX, moveY);

        this.handleRotationAndQuadrants(displayAngle);
        this.setValue(displayAngle)
    }
    handlePanResponderGrant = (evt, gestureState) => {
        const { x0, y0 } = gestureState
            , grantAngle = this.coordinatesToAngle(x0, y0);

        this.setState({
            grantAngle,
            displayAngle: grantAngle,
            touchQuadrant: "grant"
        }, () => { this.setQuadrants() });
    }
    handlePanResponderRelease = (evt, gesture) => {
        const { value } = this.state
        this.props.onValueChange(this.state.value)
        this.setState({
            grantAngle: 0,
            fullRotation: 0,
            touchQuadrant: null,
        })
    }

    /**
     * Converts angle of cartesian coordinates 
     * into display coordinates (moveX, moveY)
     */
    angleToCoordinates = (angle) => {
        const { cx, cy, r } = this.state
            , { indicatorOrbitRadius } = this.props
            , a = angle * Math.PI / 180.0
            , moveX = cx + ((r * indicatorOrbitRadius) * Math.sin(a))
            , moveY = cy + ((r * indicatorOrbitRadius) * Math.cos(a) * -1)
        return { moveX, moveY }
    }

    /**
     * Converts display coordinates(moveX, moveY) into an angle
     * relative to its cartesian coordiates (xTouchPos, yTouchPos)
     */
    coordinatesToAngle = (moveX, moveY) => {
        const { circleCenterX, circleCenterY, grantAngle } = this.state
            , xTouchPos = moveX - circleCenterX
            , yTouchPos = (moveY - circleCenterY) * -1
            , radToDeg = 180 / Math.PI
            , quadrantCheck = ((xTouchPos < 0) && 360)

        let touchAngle = Math.round(Math.atan2(xTouchPos, yTouchPos) * radToDeg + quadrantCheck)
        return touchAngle
    }

    setQuadrants = () => {
        const { fullRotation, grantAngle, touchQuadrant } = this.state
            , quadrant = {
                after: grantAngle + 90,
                before: grantAngle - 90,
            }
        console.log(grantAngle)
        this.setState({ quadrant }, () => this.setValue(grantAngle));
    }

    handleRotationAndQuadrants = (touchAngle) => {
        const { grantAngle, quadrant, touchQuadrant, fullRotation, value } = this.state
            , isGrant = touchAngle === grantAngle
            , validQuadrantA = quadrant.after <= 360
            , validQuadrantB = quadrant.before >= 0

        const withinQuadrantA = validQuadrantA
            ? (quadrant.after > touchAngle) && (grantAngle < touchAngle)
            : (quadrant.after - 360) > touchAngle || (grantAngle < touchAngle);

        const withinQuadrantB = validQuadrantB
            ? (quadrant.before < touchAngle) && (grantAngle > touchAngle)
            : (quadrant.before + 360) < touchAngle || (grantAngle > touchAngle);

        const withinMiddleQuadrants = !withinQuadrantA && !withinQuadrantB && !isGrant;

        /**
         * Full Rotation > 0
         * CASE                 RESPONSE
         * -----------------------------------------
         * grant -> after       FullRotation + 1
         * grant -> before      FullRotation - 1
         * before -> grant      FullRotation + 1
         * before -> after      FullRotation + 1
         * after -> grant       FullRotation - 1
         * after -> before      FullRotation - 1
         * 
         * Full Rotation = 0
         * CASE                 RESPONSE
         * ----------------------------------------
         * grant -> after       nothing
         * grant -> before      touch angle = grant
         * before -> grant      FullRotation + 1 
         * before -> after      FullRotation + 1
         * after -> grant       nothing
         * after -> before      touch angle = grant
         */
        switch (touchQuadrant) {
            case "grant":
                if (withinQuadrantA) this.setState({ touchQuadrant: 'after' });
                if (withinQuadrantB)
                    if (value > 0) {
                        this.setState({
                            touchQuadrant: 'before',
                            fullRotation: fullRotation - 1
                        }, () => this.setValue(touchAngle));
                    }
                    else this.setState({ grantAngle: touchAngle }, () => this.setQuadrants())
                break;
            case "before":
                if (isGrant) this.setState({ touchQuadrant: 'grant', fullRotation: fullRotation + 1 });
                if (withinQuadrantA)
                    this.setState({
                        touchQuadrant: 'after',
                        fullRotation: fullRotation + 1
                    }, () => this.setValue(touchAngle));
                if (withinMiddleQuadrants) this.setState({ touchQuadrant: 'middle' });
                break;
            case "after":
                if (isGrant) this.setState({ touchQuadrant: 'grant' });
                if (withinQuadrantB)
                    if (value > 0)
                        this.setState({
                            touchQuadrant: 'before',
                            fullRotation: fullRotation - 1
                        }, () => this.setValue(touchAngle));
                    else this.setState({ grantAngle: touchAngle }, () => this.setQuadrants())
                if (withinMiddleQuadrants) this.setState({ touchQuadrant: 'middle' });
                break;
            default:
                if (withinQuadrantA) this.setState({ touchQuadrant: 'after' });
                if (withinQuadrantB) this.setState({ touchQuadrant: 'before' });
                break;
        }

    }

    /**
     * Calculates value based on the set
     * value of a full rotation and angle
     */
    setValue = (angle) => {
        const { fullRotation, grantAngle, touchQuadrant } = this.state
            , { fullRotationValue } = this.props
            , distance = angle - grantAngle
            , angleDistance = distance < 0 ? distance + 360 : distance
            , valuePerDegree = fullRotationValue / 360
            , valueFromRotation = fullRotation * fullRotationValue
            , valueFromAngle = angleDistance < 0 ? angleDistance + 360 : angleDistance * valuePerDegree;

        let totalValue = this.props.value + Math.floor(valueFromRotation + valueFromAngle);

        this.setState({
            displayAngle: angle,
            value: totalValue > 0 ? totalValue : 0
        })
    }


    /**
     * Saves coordinates of circle center 
     * as moveX, moveY for calculations
     */
    setCircleCenter = () => {
        this._circle.measure((x, y, w, h, px, py) => {
            const halfOfContainer = this.props.size / 2;
            this.setState({ circleCenterX: px + halfOfContainer, circleCenterY: py + halfOfContainer });
        });
    }

    render() {
        const {
            size,
            textColor,
            fontSize,
            onValueChange,
            borderStrokeColor,
            borderStrokeWidth,
            showIndicator,
            indicatorRadius,
            indicatorColor
        } = this.props
            , {
                cx,
                cy,
                r,
                displayAngle,
                value
            } = this.state
            , coordinates = this.angleToCoordinates(displayAngle);

        return (
            <Svg
                width={size}
                height={size}
                fill={'green'}
                onLayout={this.setCircleCenter}
                ref={circle => this._circle = circle}
            >
                <Circle
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill={'transparent'}
                    stroke={borderStrokeColor}
                    strokeWidth={borderStrokeWidth}
                    {...this.state.panResponder.panHandlers}
                />
                <Text
                    key={value}
                    x={size / 2}
                    y={(size / 2) + (fontSize / 2)}
                    fontSize={fontSize}
                    fill={textColor}
                    textAnchor="middle"
                >
                    {value}
                </Text>
                {
                    showIndicator &&
                    <G x={coordinates.moveX} y={coordinates.moveY}>
                        <Circle
                            cx={0}
                            cy={0}
                            r={indicatorRadius}
                            fill={indicatorColor}
                        />
                    </G>
                }

            </Svg>
        )
    }
}
