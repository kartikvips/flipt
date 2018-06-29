import React from 'react';
import { CardSection } from './common';
import { View, Text, Image } from 'react-native';

const ChatListItem = (props) => {
  const { chatWith, lastMessage, lastActive } = props.chat;
  const {
    avatarStyle,
    nameStyle,
    messageStyle,
    activeStyle
  } = styles;
  const renderMessage = () => {
    if (lastMessage.length > 30) {
      return lastMessage.slice(0, 31) + "..."
    } 
    return lastMessage
  }
  return (
    <CardSection>
      <Image
        style={avatarStyle} 
        source={{ url: "https://image.ibb.co/jgyD9o/sheldon.jpg" }}
      />
      <View style={{ marginTop: 6 }}>
        <Text style={nameStyle}>{chatWith}</Text>
        <View style={{ flex: 1, flexDirection: 'row'}}>
          <Text style={messageStyle}>{renderMessage()}</Text>
          <Text style={activeStyle}>  {lastActive}</Text>
        </View>
      </View>
    </CardSection>
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