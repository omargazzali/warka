import {StyleSheet} from 'react-native';
import {colors} from "../../../config/styles";

export default StyleSheet.create({

    backimg: {
        width: '100%',
        height: 364.5,
        alignItems: 'center',
        justifyContent: 'center',

    },
    view: {
        width: 330,
        height: '100%',
        backgroundColor: 'transparent',
        alignSelf: 'center',
        zIndex: 0,
        position: 'absolute',
        marginTop: '20%',
        marginBottom: 25,
        borderRadius: 16,
    },
    viewItem: {
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 16,
        paddingVertical: '5%',
        zIndex: 0
    },
    address: {
        color: colors.green,
        fontSize: 18,
    },
    item: {
        marginTop: '4%',
        height: 72,
        // marginHorizontal : 24
    },
    label: {
        color: colors.green,
        fontSize: 20
    },
    viewInput: {
        marginVertical: '2%',
        width: 297.5,
        padding: 0,
        height: 34,
        backgroundColor: colors.grey1,
        justifyContent: 'center',
        borderRadius:16
    },
    textInput: {
        backgroundColor: colors.grey1,
        borderRadius:5,
        textAlign: 'auto',
        opacity: 0.8,
        justifyContent: 'center',
    }

});