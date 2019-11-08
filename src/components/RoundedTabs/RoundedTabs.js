import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import styles from './styles'

const Item = ({ item, active, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      style={[styles.item]}
    >
      <Text
        style={[
          styles.tabName,
          active ? styles.activeItem : {}
          ]}
      >
        {item.label}
      </Text>
    </TouchableOpacity>
  )
};

class RoundedTabs extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selected: props.selected
    }
  }
  renderItem = ({ item, index }) => {
    const { selected } = this.state;
    const active = selected  === item.key;
    return <Item item={item} active={active} onPress={this.onChangeSelectedTab} />
  };

  onChangeSelectedTab = item => {
    this.setState({
      selected: item.key
    }, () => {
      this.props.onChange(item)
    })
  }

  render() {

    return (
      <View style={styles.bar}>
        {
          this.props.list.map((item, index) => this.renderItem({ item, index }))
        }
        {/*<FlatList*/}
          {/*extraData={this.state}*/}
          {/*horizontal={true}*/}
          {/*data={this.props.list}*/}
          {/*keyExtractor={item => `tab_${item.key}`}*/}
          {/*renderItem={this.renderItem}*/}
          {/*showsHorizontalScrollIndicator={false}*/}
          {/*// contentContainerStyle={styles.bar}*/}
        {/*/>*/}
      </View>
    )
  }
}

export default RoundedTabs;
