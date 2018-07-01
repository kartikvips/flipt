import React, { Component } from 'react';
// import { CardSection } from './common';
import { Image, Text, View, TouchableHighlight } from 'react-native';
import { CardSection } from './common';

class SearchListItem extends Component {

  handlePress(type) {

    // this.setState({ selected: type })
    this.props.navigate(type, {book:this.props.book, type: "Borrow"});
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
        <View style={{alignItems: 'center', width: 160}}>
          <Text style={titleStyle}>{this.props.book.title}</Text>
        </View>
      </View>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 12,
    flexWrap: 'wrap',
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5
  },
  coverStyle: {
    borderRadius: 10,
    height: 200,
    width: 170,
    resizeMode: Image.resizeMode.stretch
  },
  containerStyle: {
    flex:1,
    flexDirection: "column",
    width: 160,
    alignItems: 'center'
  }
};

export default SearchListItem;
