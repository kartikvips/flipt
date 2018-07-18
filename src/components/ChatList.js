import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, Text } from 'react-native';
import ChatListItem from './ChatListItem';
// import { Footer, Header } from './common';
import Footer from "./common/Footer";
// import { fetchChatrooms } from '../actions/chats';
import { fetchUsers } from '../actions/index';

class ChatList extends Component {
  static navigationOptions = {
    title: "Messages"
  }

  getChat(chat) {
    const { userAId, userBId } = chat;
    const { users, auth } = this.props;
    let chatWith, avatar, lastMessage;

    if (userAId === auth._id) {
      chatWith = users[userBId].name;
      avatar = users[userBId].avatar
      lastMessage = auth.chatRoom.find(el => el.userBId === userBId).messages[-1];
    } else {
      chatWith = users[userAId].name;
      avatar = users[userAId].avatar;
      lastMessage = auth.chatRoom.find(el => el.userAId === userAId).messages[-1];
    }

    return { chatWith, avatar, lastMessage, messages: chat.messages }
  }

  renderList() {
    if (this.props.auth.chatRoom.length === 0) {
      return (
        <Text
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            marginVertical: '50%'
          }}
        > No messages yet :) </Text>
      )
    } else {
      return (
        <FlatList
          data={this.props.auth.chatRoom}
          renderItem={({ item }) => {
            const chat = this.getChat(item);
            return <ChatListItem chat={chat} navigate={this.props.navigation.navigate} />;
          }}
          keyExtractor={(item, idx) => `${idx}`}
        />
      )
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {this.renderList()}
        </View>
        <Footer selected="" navigate={this.props.navigation.navigate} />
      </View>
    )
  }
};

const mapStateToProps = ({ users, auth, chats }) => {
  return { auth, chats, users };
}

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);