import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, Text } from 'react-native';
import ChatListItem from './ChatListItem';
// import { Footer, Header } from './common';
import Footer from "./common/Footer";
import { fetchChatrooms } from '../actions/chats';

class ChatList extends Component {
  static navigationOptions = {
    title: "Messages"
  }

  componentDidMount() {
    const { auth, chats } = this.props;
    console.log(auth);
    debugger;
    this.props.fetchChatrooms(auth._id);
  }

  render(){
    return (
      <View style={{ flex: 1 }}>
        {/* <Header headerText="Messages" /> */}
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.props.chats}
            renderItem={({ item }) => {
              return <ChatListItem chat={item} navigate={this.props.navigation.navigate}/>;
            }}
            keyExtractor={item => `${item.id}`}
          />
        </View>
        <Footer selected="" navigate={this.props.navigation.navigate} />
      </View>
    )
  }
}

const mapStateToProps = ({ auth, chats }) => {
  return { auth, chats };
}

const mapDispatchToProps = dispatch => ({
  fetchChatrooms: userId => disaptch(fetchChatrooms(userId))
})

export default connect(mapStateToProps)(ChatList);