import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import { Input } from './common';
import MessageListItem from './MessageListItem';


class Messages extends Component {
  static navigationOptions = ({ navigation }) => {
    chatWith = navigation.getParam('chatWith')
    return { title: chatWith };
  }

  render(){
    return (
      <View style={{ flex: 1 }}>
        <Text>Messages here!</Text>
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.props.messages}
            renderItem={({ item }) => {
              return(
                <MessageListItem
                  message={item}
                  auth={this.props.auth}
                />
              )
            }}
            keyExtractor={(item) => `${item.id}`}
          />
        </View>
        <View style={{ backgroundColor: 'red' }}>
          <Input
            placeholder="New message here"
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({ auth, messages }) => {
  return { auth, messages: Object.values(messages)}
}

export default connect(mapStateToProps, null)(Messages);