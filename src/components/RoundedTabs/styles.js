import {StyleSheet} from 'react-native';
import {baseHorizontal} from '../../config/dimensions';
import {colors} from '../../config/styles';

export default StyleSheet.create({
    bar: {
        // height: 45,
        //margin: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'transparent',
        flexDirection: 'row',
        height : '100%',
        width : '100%',

    },
    tabName: {
        fontSize: 20,
        flex: 1,
        textAlign: 'center',
        padding: 6
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    activeItem: {
        backgroundColor: 'transparent',
        color: colors.white,
    }
})