import React, { Component } from 'react';
// import { CardSection } from './common';
import { Image, Text, View, TouchableHighlight } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {

  handlePress(type) {

    // this.setState({ selected: type })
 
    this.props.navigate(type, {book:this.props.book});
  }

  render() {
    const { titleStyle, coverStyle, containerStyle } = styles;

    return(
      <View style={containerStyle}>
        <TouchableHighlight  onPress={() =>  this.handlePress("BookProfile")} underlayColor="white">
        <Image
          style={coverStyle}
          source={{
            uri: this.props.book.imageUrl
          }}
        />
        </TouchableHighlight>
        <View style={{alignItems: 'center', width: 140}}>
          <Text style={titleStyle}>{this.props.book.title}</Text>
        </View>
      </View>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 12,
    paddingLeft: 3,
    flexWrap: 'wrap',
    textAlign: 'center'
  },
  coverStyle: {
    borderRadius: 10,
    height: 180,
    width: 140,
    resizeMode: Image.resizeMode.stretch
  },
  containerStyle: {
    height: 180,
    width: 140,
    marginRight: 10,
    flexDirection: "column"
  }
};

export default ListItem;
