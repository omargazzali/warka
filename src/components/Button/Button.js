import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {colors} from "../../config/styles";

/**
 * Text component
 * @param {object} props - component props.
 * @return {component}
 */

const Button = props => {
    const {children, ...rest} = props;

    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[styles.btn,{backgroundColor:props.color,borderRadius:props.rounded?20:0}]}>
            <Text style={[styles.text , {color : props.textColor } ]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export default Button;