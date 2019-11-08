
import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../config/styles';

/**
 * Creates a StyleSheet style reference from the given object.
 * @param {object} style - component styles object.
 * @return {object}
 */
export default StyleSheet.create({
    container: {
        width: '90%',
         height: 65,
    },
    headerViewStyle: {
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems: 'center',
        flex: 1,
        marginVertical:'1%',
        marginHorizontal:'1.5%'
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.secondary,
        flex : 1
    },
    selectedBox: {
        color: colors.gray1 ,
        flex : 2
    }
});



