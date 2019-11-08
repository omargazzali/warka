import React, {Component} from 'react';
import {
  Platform,
  BackHandler,
  InteractionManager,
  Keyboard
} from 'react-native';

import Drawer from './base';
import DrawerContent from './content';


const DRAWER_INITIAL_OFFSET = 80;

class AppDrawer extends Component {


  constructor(props) {
    super(props);

    this.closeHandle = null;
    this.openHandle = null;

 /*   Icon.getImageSource('close', 20, '#000').then((source) => {
      this.closeButton = source;
    });*/
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleAndroidBack);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleAndroidBack);
  }

  handleAndroidBack = () => {
    if (this._drawer && this._drawer.isOpened()) {
      this._drawer.close();
      return true;
    }

    return false;
  };

  openSettingsDrawer = () => {
    if (this._drawer && !this._drawer.isOpened()) {

      this._drawer.open();
    }
  };

  closeSettingsDrawer = () => {
    if (this._drawer && this._drawer.isOpened()) {
      this._drawer.close();
    }
  };

  handleDrawerClose = () => {
    if (this.closeHandle) {
      InteractionManager.clearInteractionHandle(this.closeHandle);
      this.closeHandle = null;
    }
  };

  handleDrawerCloseStart = () => {
    if (!this.closeHandle) {
      this.closeHandle = InteractionManager.createInteractionHandle();
    }
  };

  handleDrawerOpen = () => {
    Keyboard.dismiss();

    if (this.openHandle) {
      InteractionManager.clearInteractionHandle(this.openHandle);
      this.openHandle = null;
    }
  };

  handleDrawerOpenStart = () => {
    if (!this.openHandle) {
      this.openHandle = InteractionManager.createInteractionHandle();
    }
  };

  handleDrawerTween = (ratio) => {
    const opacity = (ratio / 2);

    return {
      mainOverlay: {
        backgroundColor: '#000',
        elevation: 3,
        opacity
      }
    };
  };

  renderContent = () => {
    return (
      <DrawerContent navigator={this.props.navigator} closeDrawer={this.closeSettingsDrawer} />
    )
  };

  render() {

    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        onOpenStart={this.handleDrawerOpenStart}
        onOpen={this.handleDrawerOpen}
        onClose={this.handleDrawerClose}
        onCloseStart={this.handleDrawerCloseStart}
        // side="right"
        type='overlay'
        acceptTap={true}
        acceptPanOnDrawer={false}
        disabled={false}
        content={this.renderContent()}
        tapToClose={true}
        openDrawerOffset={DRAWER_INITIAL_OFFSET}
        onRequestClose={this.closeSettingsDrawer}
        panOpenMask={0.05}
        panCloseMask={DRAWER_INITIAL_OFFSET}
        panThreshold={0.25}
        acceptPan={true}
        negotiatePan={true}
        useInteractionManager={false}
        elevation={5}
        bottomPanOffset={Platform.OS === 'ios' ? 46 : 64}
        topPanOffset={Platform.OS === 'ios' ? 64 : 46}
        tweenDuration={100}
        tweenHandler={this.handleDrawerTween}
      >
        {
          this.props.children
        }
      </Drawer>
    )
  }
}

/**
 * Convert state to props.
 * @param state
 * @returns {object}
 */
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default AppDrawer;