import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, Text } from 'react-native';
import ChatListItem from './ChatListItem';
import { Footer, Header } from './common';

class ChatList extends Component {
  render(){
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Messages" />
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.props.chats}
            renderItem={({ item }) => {
              return <ChatListItem chat={item}/>;
            }}
            keyExtractor={item => `${item.id}`}
          />
        </View>
        <Footer selected=""/>
      </View>
    )
  }
}

const mapStateToProps = ({ chats }) => {
  return { chats };
}

export default connect(mapStateToProps)(ChatList);