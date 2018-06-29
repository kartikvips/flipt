import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Footer } from './common';

class AddBook extends Component {
  static navigationOptions = {
    title: 'Add Book'
  }
  render(){
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text>Addddddddd</Text>
        </View>
        <Footer selected="AddBook" navigate={this.props.navigation.navigate}/>
      </View>
    )
  }
}

export default AddBook;