import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export const Button = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    backgroundColor: "#003B36",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginRight: 5
  }
};
