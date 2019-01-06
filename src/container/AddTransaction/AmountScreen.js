import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Knob from '../../component/Knob';
import Layout from '../../component/Layout';

export default class AmountScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {
    const { value } = this.state;
    const { navigation } = this.props;
    return (
      <Layout navigation={navigation}>
        <Knob
          fontSize={24}
          showIndicator
          backgroundColor="transparent"
          borderStrokeColor="#CCCCCC"
          borderStrokeWidth={3}
          indicatorColor="#6666ff"
          indicatorRadius={15}
          indicatorStrokeColor="#FFFFFF"
          indicatorStrokeWidth={3}
          indicatorOrbitRadius={0.75}
          fullRotationValue={50}
          value={value}
          onValueChange={(val) => {
            this.setState({ value: val });
          }}
        />
      </Layout>
    );
  }
}

AmountScreen.propTypes = {
  navigation: PropTypes.func.isRequired,
};
