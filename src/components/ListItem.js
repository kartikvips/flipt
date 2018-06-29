import React, { Component } from 'react';
// import { CardSection } from './common';
import { Image, Text, View, TouchableHighlight } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {

  handlePress(type) {
    console.log("You tapped", type);
    // this.setState({ selected: type })
    console.log(this.props);
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
            url: "https://ewedit.files.wordpress.com/2016/09/hpsorcstone.jpg"
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
    height: 180,
    width: 140,
    resizeMode: Image.resizeMode.contain
  },
  containerStyle: {
    flex: 1,
    flexDirection: "column"
  }
};

export default ListItem;