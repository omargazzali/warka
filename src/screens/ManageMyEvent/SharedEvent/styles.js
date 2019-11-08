import {colors} from "../../../config/styles";
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    LongActivity: {
        width: 335,
        height: 181,
        backgroundColor: colors.white,
        borderRadius: 10,
        marginBottom:'12%'
    },
    imageView: {
        width: '90%',
        height: '30%',
        flexDirection: 'row-reverse',
        marginVertical: '2%',
        marginHorizontal: '5%',
        alignItems: 'center',
    },
    image: {
        width: 72,
        height: 72,
        borderRadius: 5
    },
    imageText: {
        height: '100%',
        marginHorizontal: '5%'
    },
    description: {
        width: '85%',
        height: 8,
        marginHorizontal: '10%',
        alignItems: 'center',
        justifyContent:'center',
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
        height: 26,
        marginHorizontal: 10,
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    footerBtn: {
        width: '90%',
        height: 60,
        paddingHorizontal: '5%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        zIndex: 0
    },
    notificationBtn: {
        width: 57,
        height: 57,
    },
    shareBtn: {
        width: 50,
        height: 50,
        marginHorizontal: '2%',
    },
    footerImage: {
        width: '100%',
        height: '100%',
        marginHorizontal: '2%',
    }
})