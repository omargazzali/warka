import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import styles from './styles';

/**
 * Text component
 * @param {object} props - component props.
 * @return {component}
 */

const Background = props => {
    const {children, ...rest} = props;

    return (
        <ImageBackground
            source={require('../../assets/images/back.png')}
            style={styles.backgroundImage}>
            {children}
        </ImageBackground>
    );
};

export default Background;