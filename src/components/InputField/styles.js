
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
        alignItems: 'center',
        flex: 1,
        marginVertical:'1%',
        marginHorizontal:'1.5%'
    },
    inputText: {
        height: 35,
        paddingHorizontal: 5,
        backgroundColor: colors.grey1,
        borderRadius : 7
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.secondary
    }

});



