import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../config/styles';

const deviceHeight = Dimensions.get('window').height;

/**
 * Creates a StyleSheet style reference from the given object.
 * @param {object} style - component styles object.
 * @return {object}
 */
export default StyleSheet.create({
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: 45,
        marginHorizontal: 8,
        width: '100%',
        opacity: 0.8

    }, text: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        marginHorizontal: 5
    }
});