
import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../config/styles';

/**
 * Creates a StyleSheet style reference from the given object.
 * @param {object} style - component styles object.
 * @return {object}
 */
export default StyleSheet.create({
    headerViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems : 'center',
        flex: 1,
        marginVertical:'1%', 
    },
    text: {
        height : 25,
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.secondary,
    },
    nav: {
        width: 14,
        height: 14 , 
    }
});