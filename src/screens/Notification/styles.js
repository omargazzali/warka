import {colors} from "../../config/styles";
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: colors.grey2,

    }, Notification: {
        width: 332,
        height: 70,
        backgroundColor: colors.white,
        borderRadius: 10,
        marginVertical: '1%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageView: {
        width: '100%',
        height: '100%',
        flexDirection: 'row-reverse',
        marginHorizontal: '5%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 33,
        height: 33,
        borderRadius: 15,
        justifyContent: 'center',
    },
    imageV: {
        width: 33,
        height: 33,
        borderRadius: 15,
        justifyContent: 'center',

    },
    imageText: {
        height: 60,
        width: 250,
        marginHorizontal: '2%',
        paddingVertical:'2%',
    },
    description: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row-reverse'
    }
})