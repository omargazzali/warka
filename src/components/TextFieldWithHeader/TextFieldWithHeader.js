import React from 'react';
import { View, TouchableOpacity, Text} from "react-native";
import styles from "./styles";
import {colors} from "../../config/styles";

/**
 * Text component
 * @param {object} props - component props.
 * @return {component}
 */

const TextFieldWithHeader = props => {
    const {children, ...rest} = props;

    return (
        <View style={{
            width: '90%', height: 65, backgroundColor : 'blue'
        }}>
            <View style={styles.headerViewStyle}>
                <Text style={styles.text}>{props.title}</Text>
                <TouchableOpacity
                        onPress={props.onPress}>
                                <Text style={{
                                        paddingHorizontal: 5,
                                        backgroundColor: colors.grey1,}} >{props.selectedOption}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default TextFieldWithHeader;


