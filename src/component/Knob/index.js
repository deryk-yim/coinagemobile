import {
  Text, TextInput, View, PanResponder, Dimensions, Keyboard,
} from 'react-native';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Svg, { Circle, G, Text as SvgText } from 'react-native-svg';
import accounting from 'accounting-js';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Knob extends PureComponent {
  constructor(props) {
    super(props);
    const { size, radius } = this.props;
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: this.handleTouchMove,
      onPanResponderGrant: this.handleInitialTouch,
      onPanResponderRelease: this.handleTouchRelease,
    });
    const textPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: this.handleCenterClick,
    });
    const { value } = this.props;
    this.state = {
      panResponder,
      textPanResponder,
      showKnob: true,
      circleCenterX: false,
      circleCenterY: false,
      cx: size / 2,
      cy: size / 2,
      r: radius,
      value,
      displayAngle: 0,
      grantAngle: 0,
      fullRotation: 0,
      quadrant: { after: null, before: null },
      touchQuadrant: null,
      isDollar: true,
    };
  }

  // Hide Knob when keyboard is out
  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.hideKnob);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.showKnob);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  showKnob = () => this.setState({ showKnob: true });

  hideKnob = () => this.setState({ showKnob: false });

  /**
      Gesture Handlers
          • Grant - initial touch
          • Move - drag gesture
          • Release - release gesture
          • Text - handles text gesture
   */
  handleInitialTouch = (evt, gestureState) => {
    const { x0, y0 } = gestureState;
    const grantAngle = this.coordinatesToAngle(x0, y0);

    this.setState({
      grantAngle,
      displayAngle: grantAngle,
      touchQuadrant: 'grant',
    }, () => { this.setQuadrants(); });
  }

  handleTouchMove = (evt, gestureState) => {
    const { moveX, moveY } = gestureState;
    const { isDollar } = this.state;
    const displayAngle = this.coordinatesToAngle(moveX, moveY);

    if (isDollar) {
      this.handleRotationAndQuadrants(displayAngle);
    }
    this.setValue(displayAngle);
  }

  handleTouchRelease = () => {
    const { value } = this.state;
    const { onValueChange } = this.props;

    onValueChange(value);
    this.setState({
      grantAngle: 0,
      fullRotation: 0,
      touchQuadrant: null,
    });
  }

  handleCenterClick = () => {
    const { isDollar } = this.state;
    this.setState({ isDollar: !isDollar });
  }

  /**
   * Converts angle of cartesian coordinates
   * into display coordinates (moveX, moveY)
   */
  angleToCoordinates = (angle) => {
    const { cx, cy, r } = this.state;
    const { indicatorOrbitRadius } = this.props;
    const a = angle * Math.PI / 180.0;
    const moveX = cx + ((r * indicatorOrbitRadius) * Math.sin(a));
    const moveY = cy + ((r * indicatorOrbitRadius) * Math.cos(a) * -1);
    return { moveX, moveY };
  }

  /**
   * Converts display coordinates(moveX, moveY) into an angle
   * relative to its cartesian coordiates (xTouchPos, yTouchPos)
   */
  coordinatesToAngle = (moveX, moveY) => {
    const { circleCenterX, circleCenterY } = this.state;
    const xTouchPos = moveX - circleCenterX;
    const yTouchPos = (moveY - circleCenterY) * -1;
    const radToDeg = 180 / Math.PI;
    const quadrantCheck = ((xTouchPos < 0) && 360);

    const touchAngle = Math.round(Math.atan2(xTouchPos, yTouchPos) * radToDeg + quadrantCheck);
    return touchAngle;
  }

  /**
   * Determines which quadrant the touch gesture is in
   *
   * "Before quadrant" = within 90 degrees BEFORE your initial touch
   * "After quadrant" = within 90 degrees AFTER your initial touch
   *
   * This function sets up a system that can
   * determine when a full rotation has been made.
   */
  setQuadrants = () => {
    const { grantAngle } = this.state;
    const quadrant = {
      after: grantAngle + 90,
      before: grantAngle - 90,
    };
    this.setState({ quadrant }, () => this.setValue(grantAngle));
  }

  /**
   * Checks the CURRENT touch position relative to the INITIAL touch position
   * and determines how many full rotations (360 degree) have been made
   */
  handleRotationAndQuadrants = (touchAngle) => {
    const {
      grantAngle, quadrant, touchQuadrant, fullRotation, value,
    } = this.state;
    const isGrant = touchAngle === grantAngle;
    const validQuadrantA = quadrant.after <= 360;
    const validQuadrantB = quadrant.before >= 0;

    // "Quadrant A" = "Quadrant After"
    const withinQuadrantA = validQuadrantA
      ? (quadrant.after > touchAngle) && (grantAngle < touchAngle)
      : (quadrant.after - 360) > touchAngle || (grantAngle < touchAngle);

    // "Quadrant B" = "Quadrant Before"
    const withinQuadrantB = validQuadrantB
      ? (quadrant.before < touchAngle) && (grantAngle > touchAngle)
      : (quadrant.before + 360) < touchAngle || (grantAngle > touchAngle);

    // Half of circle between "Before" or "After" quadrants (opposite side of initial touch)
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
      case 'grant':
        if (withinQuadrantA) this.setState({ touchQuadrant: 'after' });
        if (withinQuadrantB) {
          if (value > 0) {
            this.setState({
              touchQuadrant: 'before',
              fullRotation: fullRotation - 1,
            }, () => this.setValue(touchAngle));
          } else {
            this.setState({ grantAngle: touchAngle }, () => this.setQuadrants());
          }
        }
        break;
      case 'before':
        if (isGrant) this.setState({ touchQuadrant: 'grant', fullRotation: fullRotation + 1 });
        if (withinQuadrantA) {
          this.setState({
            touchQuadrant: 'after',
            fullRotation: fullRotation + 1,
          }, () => this.setValue(touchAngle));
          if (withinMiddleQuadrants) this.setState({ touchQuadrant: 'middle' });
        }
        break;
      case 'after':
        if (isGrant) this.setState({ touchQuadrant: 'grant' });
        if (withinQuadrantB) {
          if (value > 0) {
            this.setState({
              touchQuadrant: 'before',
              fullRotation: fullRotation - 1,
            }, () => this.setValue(touchAngle));
          } else {
            this.setState({ grantAngle: touchAngle }, () => this.setQuadrants());
          }
        }
        if (withinMiddleQuadrants) this.setState({ touchQuadrant: 'middle' });
        break;
      default:
        if (withinQuadrantA) this.setState({ touchQuadrant: 'after' });
        if (withinQuadrantB) this.setState({ touchQuadrant: 'before' });
        break;
    }
  }

  /**
      Calculates and set a value based on:
          • Angle relative to the value of a full rotation
              ○ eg. - ANGLE: 180°
                      FULL ROTATION VALUE: 50
                      ------------------------
                      VALUE = 25
          • the number of rotations
              ○ eg. - ANGLE: 90°
                      FULL ROTATION: 3
                      FULL ROTATION VALUE: 100
                      -----------------------
                      VALUE = 325
   */
  setValue = (angle) => {
    const { fullRotation, grantAngle, isDollar } = this.state;
    const { fullRotationValue, value } = this.props;
    const distance = angle - grantAngle;
    const angleDistance = distance < 0 ? distance + 360 : distance;
    const valuePerDegree = (isDollar ? fullRotationValue : 0.99) / 360;
    const valueFromRotation = fullRotation * (isDollar ? fullRotationValue : 0);
    const valueFromAngle = angleDistance < 0 ? angleDistance + 360 : angleDistance * valuePerDegree;

    /**
     * Dollar value can exceed full rotation value
     * Cent is between 0 to 99
    */
    const totalValue = isDollar
      ? value + Math.floor(valueFromRotation + valueFromAngle)
      : value + valueFromAngle;

    this.setState({
      displayAngle: angle,
      value: totalValue > 0 ? totalValue : 0,
    });
  }


  /**
   * Saves coordinates of circle center
   * as moveX, moveY for calculations
   */
  setCircleCenter = () => {
    const { size } = this.props;
    this._circle.measure((x, y, w, h, px, py) => {
      const halfOfContainer = size / 2;
      this.setState({ circleCenterX: px + halfOfContainer, circleCenterY: py + halfOfContainer });
    });
  }

  onInputChange = (number) => {
    const filtered = number.split('').filter(i => Number(i) >= 0).join(''); // filter out non-number
    const leftToRightFormat = filtered / 100; // Number moves from left to right
    // let rotations = leftToRightFormat / this.state.fullRotationValue;
    this.setState({
      value: leftToRightFormat,
      // fullRotation: rotations
    });
  }

  clearValue = () => {
    this.setState({ value: 0 });
  }

  render() {
    const {
      size, textColor, fontSize, fontFamily,
      borderStrokeColor, borderStrokeWidth,
      showIndicator, indicatorRadius,
      indicatorColor, indicatorStrokeColor,
      indicatorStrokeWidth, indicatorOrbitRadius,
      backgroundColor,
    } = this.props;
    const {
      cx, cy, r, displayAngle, value, showKnob,
      panResponder, textPanResponder, isDollar,
    } = this.state;
    const textStyle = {
      color: textColor,
      fontSize,
      fontFamily,
    };
    const coordinates = this.angleToCoordinates(displayAngle);

    return (
      <View>
        <TextInput
          style={{
            textAlign: 'center',
            ...textStyle,
          }}
          keyboardType="numeric"
          onChangeText={this.onInputChange}
          onFocus={() => this.clearValue()}
          value={accounting.formatMoney(value)}
          onSubmitEditing={() => console.log(`Value: ${value}\nNEXT SCREEN`)}
        />
        {
          showKnob
            ? (
              <Svg
                width={size}
                height={size}
                fill="green"
                onLayout={this.setCircleCenter}
                ref={(circle) => { this._circle = circle; }}
              >
                <Circle
                  cx={cx}
                  cy={cy}
                  r={r}
                  fill={backgroundColor}
                  stroke={borderStrokeColor}
                  strokeWidth={borderStrokeWidth}
                  {...panResponder.panHandlers}
                />
                {
                  showIndicator
                  && (
                    <G>
                      <Circle
                        cx={cx}
                        cy={cy}
                        r={r * indicatorOrbitRadius}
                        fill={backgroundColor}
                        stroke={borderStrokeColor}
                        strokeWidth={borderStrokeWidth}
                        {...panResponder.panHandlers}
                      />
                      <G x={coordinates.moveX} y={coordinates.moveY}>
                        <Circle
                          cx={0}
                          cy={0}
                          r={indicatorRadius}
                          fill={indicatorColor}
                          stroke={indicatorStrokeColor}
                          strokeWidth={indicatorStrokeWidth}
                        />
                      </G>
                    </G>
                  )
                }
                <G {...textPanResponder.panHandlers}>
                  <Circle
                    cx={cx}
                    cy={cy}
                    r={r * 0.2}
                    fill="transparent"
                  />
                  <SvgText
                    key={value}
                    x={size / 2}
                    y={(size / 2) + (fontSize / 3)}
                    fontFamily={fontFamily}
                    fontSize={fontSize}
                    fill={textColor}
                    textAnchor="middle"
                    backgroundColor="blue"
                  >
                    {isDollar ? '$' : '¢'}
                  </SvgText>
                </G>
              </Svg>
            )
            : (
              <View>
                <Text>Knob Hidden</Text>
              </View>
            )
        }
      </View>
    );
  }
}

Knob.propTypes = {
  size: PropTypes.number,
  radius: PropTypes.number,
  fontSize: PropTypes.number,
  textColor: PropTypes.string,
  fullRotationValue: PropTypes.number,
  value: PropTypes.number,
  onValueChange: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  borderStrokeColor: PropTypes.string,
  borderStrokeWidth: PropTypes.number,
  showIndicator: PropTypes.bool,
  indicatorRadius: PropTypes.number,
  indicatorColor: PropTypes.string,
  indicatorStrokeColor: PropTypes.string,
  indicatorStrokeWidth: PropTypes.number,
  indicatorOrbitRadius: PropTypes.number,
};

Knob.defaultProps = {
  size: SCREEN_WIDTH,
  radius: (SCREEN_WIDTH / 2) * 0.6375,
  fontSize: 30,
  textColor: '#000000',
  fullRotationValue: 360,
  backgroundColor: '#FFFFFF',
  borderStrokeColor: '#eee',
  borderStrokeWidth: 0.5,
  showIndicator: true,
  indicatorRadius: 5,
  indicatorColor: '#ff5b5b',
  indicatorStrokeColor: '#000000',
  indicatorStrokeWidth: 0,
  indicatorOrbitRadius: 1,
  value: 0,
};
