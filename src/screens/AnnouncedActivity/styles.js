import {colors} from "../../config/styles";
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    LongActivity: {
        width: '100%',
        height: 204,
        backgroundColor: colors.white,
        borderRadius: 8,
        marginBottom:'10%',
        justifyContent : 'space-between',
    },
    imageView: {
        height: 72 ,
        flexDirection: 'row-reverse',
        marginVertical: 16,
        marginHorizontal: 16,
        alignItems: 'center',
        
    },
    imageText: {
        height: '100%',
        marginHorizontal: '5%',
        justifyContent : 'space-between',
        flexDirection : 'column',
        alignItems : 'flex-end',
        overflow: 'hidden',
        color : colors.textPrimary
    },
    imgFirstTxt : {
        textAlign : 'right' ,
        color : colors.textPrimary,
    },
    imgSecondTxt : {
        textAlign : 'right' ,
    },
    image: {
        width: 72,
        height: 72,
        borderRadius: 5
    },
    date: {
        width: '92%',
        marginHorizontal: 10,
    },
    address: {
        width: '92%',
        marginHorizontal: 10,
        marginTop : 8,
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
    },
    addressText: {
        color : colors.addressGreen ,
    },
    btns: {
        width: '92%',
        height: 26,
        marginHorizontal: 10,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        marginTop : 8,
    },
    footerBtn: {
        width: '90%',
        height: 60,
        paddingHorizontal: '5%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        zIndex: 0,
        marginTop : -20 

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