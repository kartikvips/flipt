import React from 'react';
import { View, Text } from 'react-native';

const MessageListItem = (props) => {
  const { message, auth } = props;
  const { sender, content, sentTime } = message;
  return(
    <View>
      <Text>{sender}</Text>
      <Text>{content}</Text>
      <Text>{sentTime}</Text>
    </View>
  )
}

export default MessageListItem;