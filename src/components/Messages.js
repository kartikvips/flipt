import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Messages extends Component {
  static navigationOptions = ({ navigation }) => {
    chatWith = navigation.getParam('chatWith')
    return { title: chatWith };
  }

  render(){
    return (
      <View style={{ flex: 1 }}>
        <Text>Messages here!</Text>
      </View>
    )
  }
}

export default Messages;