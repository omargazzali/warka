import {StyleSheet} from 'react-native';
import {colors} from "../../../config/styles";

export default StyleSheet.create({

    view: {
        flex: 1
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