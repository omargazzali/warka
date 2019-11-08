import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';

const deviceHeight = Dimensions.get('window').height;

/**
 * Creates a StyleSheet style reference from the given object.
 * @param {object} style - component styles object.
 * @return {object}
 */
export default StyleSheet.create({
    view: {
        height:"90%",
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    footerStyle: {
        width:'100%',
        height:'8%',
        flexDirection: 'row',
        backgroundColor: 'white',

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
    textInput: {
        marginVertical: '5%',
        width: '90%',
        padding: 0,
        height: 25,
        color: '#040404',
        textAlign: 'justify',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    btn: {
        backgroundColor: 'transparent',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'baseline',
        borderRadius: 10,
        borderWidth: .3,
        marginTop: '0.5%',
        opacity: 0.9

    },
    footerbtn: {
        backgroundColor: 'transparent',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'baseline',
        borderRadius: 10,
        borderWidth: .3,
        marginVertical: '0.5%',
        marginHorizontal: '9%',
        opacity: 0.9

    },
    image: {width: 24, height: 24, resizeMode: 'contain', paddingHorizontal: '5%',
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        textDecorationLine: 'underline'
    },
    tbtn: {flexDirection: 'row', marginHorizontal: '11.5%'},
    textInputView: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',

    },
    avatarContainer: {
        height: '20%',
        paddingHorizontal: 30,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

});