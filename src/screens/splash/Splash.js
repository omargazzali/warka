import React, {Component} from 'react';
import {View, Image} from 'react-native';
import styles from './styles'

export default class Splash extends Component {
    render() {
        return (
            <View style={styles.view}>
                <Image style={styles.imageBack}
                       source={require('../../assets/images/splashBack.png')}/>
                <View style={styles.imageSign}>
                    <Image source={require('../../assets/images/sign.png')}/>
                </View>
            </View>
        );
    }
}