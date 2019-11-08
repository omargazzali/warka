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
        alignItems : 'center',
        
        flex: 1,
        marginHorizontal: '5%',
        marginVertical:'1%', 
    },
    text: {
        height : 25,
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.secondary,
    },
    xText: {
        height : 30,
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.textPrimary ,

    },
    nav: {
        width: 14,
        height: 14
    }
});