
import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

/**
 * Text component
 * @param {object} props - component props.
 * @return {component}
 */

const DatesFormat = props => {
    const {children, ...rest} = props;

    return (
        <View style={styles.date}>
                <Text style = {[styles.dateText , {fontWeight: '800'}]}>♦ من</Text>
                <Text style = {styles.dateText}>  {props.fromDate} </Text>
                <Text style = {[styles.dateText , {fontWeight: '800'} , {marginHorizontal : 10}]}>♦إلى</Text>
                <Text style = {[styles.dateText]}> {props.toDate} </Text>
        </View>
    );
};

export default DatesFormat;