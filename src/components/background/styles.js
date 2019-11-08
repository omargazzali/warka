import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';

const deviceHeight = Dimensions.get('window').height;

/**
 * Creates a StyleSheet style reference from the given object.
 * @param {object} style - component styles object.
 * @return {object}
 */
export default StyleSheet.create({
  backgroundImage: {
    width: '100%',
    flex: 1,

  }
});