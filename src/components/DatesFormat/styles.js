
import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../config/styles';

/**
 * Creates a StyleSheet style reference from the given object.
 * @param {object} style - component styles object.
 * @return {object}
 */
export default StyleSheet.create({
    date: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        color : colors.dateGreen, 
    },
    dateText: {
        color : colors.dateGreen ,
    },
});