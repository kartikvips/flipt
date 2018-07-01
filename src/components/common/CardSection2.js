import React from 'react';
import { View } from 'react-native';

export const CardSection2 = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: "#003B36",
    borderBottomWidth: 1,
    padding: 5, 
    // backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ddd',
    position: 'relative'
  }
};
