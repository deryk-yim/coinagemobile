import React from 'react';
import PropTypes from 'prop-types';
import Background from '../../component/Background/Background';
import Header from './Header';
import Body from './Body';

const Layout = (props) => {
  const { navigation, children } = props;
  return (
    <Background>
      <Header navigation={navigation} />
      <Body>
        {children}
      </Body>
    </Background>
  );
};
export default Layout;

Layout.propTypes = {
  navigation: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
