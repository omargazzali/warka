import {Keyboard, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import BaseDrawer from 'react-native-drawer';

// Extends react-native-drawer to allow better control over the open/closed state from the parent
export default class Drawer extends BaseDrawer {
  static propTypes = {
    ...BaseDrawer.propTypes,
    onRequestClose: PropTypes.func.isRequired,
    bottomPanOffset: PropTypes.number,
    topPanOffset: PropTypes.number
  };

  constructor(props) {
    super(props);

    this.keyboardHeight = 0;
  }

  componentDidMount() {
    Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  componentWillUnmount() {
    Keyboard.removeListener('keyboardDidShow', this.keyboardDidShow);
    Keyboard.removeListener('keyboardDidHide', this.keyboardDidHide);
  }

  getMainHeight = () => '100%';

  keyboardDidShow = (e) => {
    this.keyboardHeight = e.endCoordinates.height;
  };

  keyboardDidHide = () => {
    this.keyboardHeight = 0;
  };

  isOpened = () => {
    return this._open; //eslint-disable-line no-underscore-dangle
  };
}
