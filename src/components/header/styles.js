import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../config/styles';

const deviceHeight = Dimensions.get('window').height;

/**
 * Creates a StyleSheet style reference from the given object.
 * @param {object} style - component styles object.
 * @return {object}
 */
export default StyleSheet.create({
    imageViewStyle: {
        width: 60,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        backgroundColor: '#a8a8a8'
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.white
    },
    viewStyle: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between',

    },
    addressStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        flex: 1,
        alignSelf: 'center',
        color: '#000'

    },
    headerViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        marginHorizontal: '5%',

    },
    ViewStyle: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: '21%',
        flex: 1,
        backgroundColor: '#000'
    },
    logo: {
        width: 95,
        height: 54
    },
    image: {
        width: 24,
        height: 24
    },
    textInput: {
        marginVertical: '1%',
        width: 300,
        padding: 0,
        height: 25,
        paddingHorizontal: '2%',
        color: '#040404',
        textAlign: 'justify',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    textInputView: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

    },
    inputBorder: {
        backgroundColor: 'white',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'baseline',
        borderRadius: 4,
        borderWidth: .3,
        borderColor: '#F9A343',
        opacity: 0.8,
        paddingHorizontal: '5%',
        marginVertical: '0.5%',


    },
    viewImage: {
        width: 28,
        height: 28,
        justifyContent: 'center',
    }
});