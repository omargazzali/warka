import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { ViewPropTypes } from '../../utils';
import styles from './styles';

/**
 * Class representing a container component.
 * @extends React.Component
 */
class Container extends Component {
  /**
   * Render container component
   * @return {React native element}
   */
  render() {
    const { style } = this.props;

    return (
      <View ref={c => (this._root = c)} {...this.props} style={[styles.container, style]}>
        {this.props.children}
      </View>
    );
  }
}

/**
 * Runtime type checking for React props.
 */
Container.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
};

export default Container;