import React from 'react';
import { View, Text } from 'react-native';

const MessageListItem = (props) => {
  const { message, auth } = props;
  const { sender, content, sentTime } = message;
  const styles = () => {
    if (sender === auth.name) {
      return currentUserStyles;
    } 
    return otherUserStyles;
  }

  const { containerStyle, senderStyle, viewStyle, contentStyle, timeStyle } = styles();

  return (
    <View style={containerStyle}>
      <Text style={senderStyle}>{sender}</Text>
      <View style={viewStyle}>
        <Text style={contentStyle}>{content}</Text>
      </View>
      <Text style={timeStyle}>{sentTime}</Text>
    </View>
  );
}

const currentUserStyles = {
  containerStyle: {
    marginRight: 10,
    flexDirection: "column",
    // backgroundColor: 'blue',
    alignSelf: "flex-end",
    maxWidth: 250
  },
  senderStyle: {
    alignSelf: "flex-end"
  },
  viewStyle: {
    alignSelf: "flex-end",
    borderRadius: 10,
    backgroundColor: "#007369",
    padding: 10,
    paddingTop: 8
  },
  contentStyle: {
    color: "#fff",
    alignSelf: "flex-end",
    fontSize: 18
  },
  timeStyle: {
    alignSelf: "flex-end",
    color: "#737373"
  }
};

const otherUserStyles = {
  containerStyle: {
    marginLeft: 10,
    flexDirection: 'column',
    maxWidth: 250
  },
  senderStyle: {

  },
  viewStyle: {
    borderRadius: 10,
    backgroundColor: "#b1b1b1",
    padding: 10,
    paddingTop: 8
  },
  contentStyle: {
    color: '#000',
    fontSize: 18,
  },
  timeStyle: {
    paddingLeft: 2,
    color: "#737373"
  }
}

export default MessageListItem;