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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        marginVertical:'1%',
        marginHorizontal:'1.5%'
    },
    firstInputField: {
        marginTop: '1%' ,
    },
    inputField: {
        height: 72,
        marginHorizontal : 24
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.secondary
    },
    xText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.secondary
    },
    doneBtnContainer : {
        height: 45,
        backgroundColor: colors.white,
        alignItems: 'center',
        marginTop: 33 , 
        marginHorizontal : 24
    },
    nav: {
        width: 14,
        height: 14
    },
    imageView: {
        width: '100%',
        height: 83,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        paddingHorizontal: '5%',
        borderBottomLeftRadius: 15,
        backgroundColor: colors.grey1,
        marginBottom: '1%'

    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 30
    },
    imageText: {
        height: '100%',
        marginHorizontal: '5%',
        alignItems: 'flex-end',
        justifyContent: 'center',

    },
    underline: {
        width: '90%',
        height: 2,
        backgroundColor: colors.grey1,
    },
    listImage:{
            width: '100%',
            height: 60,
            flexDirection: 'row-reverse',
            alignItems: 'center',
            paddingHorizontal: '5%',
            borderBottomLeftRadius: 15,
            backgroundColor: 'transparent',


    },
    imageItem:{
        width: 33,
        height: 33,
        borderRadius: 15
    }
});