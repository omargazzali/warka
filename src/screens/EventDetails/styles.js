import {StyleSheet} from 'react-native';
import {colors} from "../../config/styles";

export default StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: colors.grey2,

    },
    paginationContainer: {
        paddingVertical: 10,

    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 4,
    },
    headerViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 55,
        marginVertical: '1%',

    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.secondary
    },
    xText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.secondary
    },
    nav: {
        width: 13,
        height: 27
    },
    LongActivity: {
        width: 330,
        height: 272,
        backgroundColor: colors.white,
        borderRadius: 10,
        marginBottom: '10%'
    },
    imageView: {
        width: '90%',
        height: 93,
        flexDirection: 'row-reverse',
        marginVertical: '2%',
        marginHorizontal: '5%',
        alignItems: 'center',
    },
    image: {
        width: 92,
        height: 92,
        borderRadius: 5
    },
    imageText: {
        height: 49,
        marginHorizontal: '5%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    description: {
        width: 314,
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
    },
    date: {
        width: '92%',
        height: 21,
        marginHorizontal: 10,
        flexDirection: 'row-reverse',
        alignItems: 'flex-end'
    },
    address: {
        width: 311,
        height: 24,
        marginHorizontal: 10,
        flexDirection: 'row-reverse',
        alignItems: 'flex-end'
    },
    btns: {
        width: 176,
        height: 26,
        marginHorizontal: 10,
        flexDirection: 'row-reverse',
        alignItems: 'center',

    },
    footerBtn: {
        width: '100%',
        height: 90,
        paddingHorizontal: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 0,
        justifyContent: 'center'
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
    },
    eventSheet: {
        width: 330,
        height: '100%',
        backgroundColor: colors.white,
        borderRadius: 16,

    },
    listImage: {
        width: '100%',
        height: 55,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        paddingHorizontal: '5%',
        borderBottomLeftRadius: 15,
        backgroundColor: 'transparent',


    },
    imageItem: {
        width: 10,
        height: 21,
        borderRadius: 15
    },
    imageItem2: {
        width: 36,
        height: 36,
    },
    underline: {
        width: '90%',
        height: 2,
        backgroundColor: colors.grey1,
    },
    prevNext: {
        flexDirection: 'row',
        width: '100%',
    },
    ctrlBtn: {
        padding: 16,
    },
    next: {
        width: '50%',
        backgroundColor: colors.white,
        alignItems: 'center'
    },
    prev: {
        // flex: 1,
        width: '50%',
        backgroundColor: colors.white,
        alignItems: 'center'
    },
    btnText: {
        fontSize: 18,
    }
});