import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, Text } from 'react-native';
import ChatListItem from './ChatListItem';
// import { Footer, Header } from './common';
import Footer from "./common/Footer";

class ChatList extends Component {
  static navigationOptions = {
    title: "Messages"
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

const mapStateToProps = ({ chats }) => {
  return { chats };
}

export default connect(mapStateToProps)(ChatList);