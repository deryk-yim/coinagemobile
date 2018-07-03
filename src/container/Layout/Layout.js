import React from 'react'
import PropTypes from 'prop-types';
import Background  from '../../component/Background/Background';
import Header from './Header';
import Body from './Body';

const Layout = (props) => {
    const { bgColors, bgStart, bgEnd, btnColor, btnTextColor } = props;
    return(
        <Background
            colors={bgColors}
            start={bgStart}
            end={bgEnd}
        >
            <Header
                navigation={props.navigation}
                btnColor={btnColor}
                btnTextColor={btnTextColor}
            />
            <Body>
                {props.children}
            </Body>
        </Background>
    )
}
export default Layout;

Layout.propTypes = {
    bgColors: PropTypes.arrayOf(PropTypes.string),
    bgStart: PropTypes.object,
    bgEnd: PropTypes.object,
    btnColor: PropTypes.string,
    btnTextColor: PropTypes.string
}