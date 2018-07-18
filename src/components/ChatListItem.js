import React, { Component} from 'react';
import { CardSection } from './common';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const ChatListItem = (props) => {
  const { chatWith, avatar, lastMessage, messages } = props.chat;
  const {
    avatarStyle,
    nameStyle,
    messageStyle,
    activeStyle
  } = styles;

  // const renderMessage = () => {
  //   if (lastMessage.length > 30) {
  //     return lastMessage.slice(0, 31) + "..."
  //   } 
  //   return lastMessage;
  // };

  const handlePress = () => {
    console.log(messages)
    debugger;
    props.navigate("Messages", { chatWith, messages })
    // props.navigate("Messages", { chatWith: props.chat.chatWith })
  };

  return (
    <TouchableOpacity onPress={()=> handlePress()}>
      <CardSection>
        <Image style={avatarStyle} source={{ url: avatar }} />
        <View style={{ marginTop: 6 }}>
          <Text style={nameStyle}>{chatWith}</Text>
          <View style={{ flex: 1, flexDirection: "row" }}>
            {/* <Text style={messageStyle}>{renderMessage()}</Text> */}
            {/* <Text style={activeStyle}> {lastActive}</Text> */}
          </View>
        </View>
      </CardSection>
    </TouchableOpacity>
  );
}

export default ChatListItem;

const styles = {
  avatarContainer: {
    marginLeft: 10
  },
  avatarStyle: {
    height: 50,
    width: 50,
    resizeMode: Image.resizeMode.contain,
    alignSelf: 'center',
    marginLeft: 15,
    marginRight: 20,
    borderRadius: 25,
    borderColor: '#eee',
    borderWidth: 1
  },
  nameStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageStyle: {
    fontSize: 16,
    color: '#717171'
  },
  activeStyle: {
    fontSize: 12,
    color: '#afafaf',
    marginTop: 3
  }
};