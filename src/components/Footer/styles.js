import {colors} from "../../config/styles";
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    LongActivity: {
        width: '100%',
        height: 60,
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '2%',


    },
    imageView: {
        width: 60,
        height: 60,
        flexDirection: 'row-reverse',
        marginVertical: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,

    },
    image: {
        width: 72,
        height: 72,
        borderRadius: 5
    },
    imageText: {
        height: '100%',
        width: 212,
        marginHorizontal: '3%'
    },
    description: {
        width: 305,
        height: 52,
        marginHorizontal: 10,
        alignItems: 'center'
    },
    date: {
        width: '92%',
        height: 28,
        marginHorizontal: 10,
        flexDirection: 'row-reverse',
        alignItems: 'flex-end'
    },
    address: {
        width: '92%',
        height: 24,
        marginHorizontal: 10,
        flexDirection: 'row-reverse',
        alignItems: 'flex-end'
    },
    btns: {
        width: '92%',
        height: 20,
        marginHorizontal: 10,
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    footerBtn: {
        width: '90%',
        height: 70,
        paddingHorizontal: '5%',
        flexDirection: 'row',
        alignItems: 'flex-end',

    },
    notificationBtn: {
        width: 60,
        height: 60,
        marginBottom: 120,
        alignItems: 'center',
        justifyContent: 'center'

    },
    shareBtn: {
        width: 50,
        height: 50,
        marginHorizontal: '2%',

    },
    footerImage: {
        width: 26,
        height: 26,
        marginHorizontal: '2%',
    }
})