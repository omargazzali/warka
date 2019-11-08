import React from 'react';
import { View, TextInput, Text} from "react-native";
import styles from "./styles";
import {colors} from "../../config/styles";

/**
 * Text component
 * @param {object} props - component props.
 * @return {component}
 */

const InputField = props => {
    const {children, ...rest} = props;

    return (
        <View style={[props.containerStyle ]}>
            <View style={styles.headerViewStyle}>
                <Text style={[styles.text , props.titleStyle]}>{props.title}</Text>
            </View>
            <TextInput
                style={[styles.inputText , props.inputStyle]}
                onChangeText={props.onChangeText}
                placeholder = {props.placeholder}
                autoCorrect={false}
                ref={props.ref}
                returnKeyType = {props.returnType}
            />

        </View>
    );
};
export default InputField;
