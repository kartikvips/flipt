import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

export const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerSytle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles ={
  spinnerSytle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}