import React from 'react';
import {View ,Text} from "react-native";
import styles from "./styles";

/**
 * Text component
 * @param {object} props - component props.
 * @return {component}
 */

const WText = props => {
    const {children, ...rest} = props;

    return (
        <View >
            <Text style={[styles.customFont , props.style]}>{props.text}</Text>
        </View>
    );
};
export default WText;