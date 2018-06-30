import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Input, Card, CardSection } from './common';
import Footer from "./common/Footer";

class AddBook extends Component {
  static navigationOptions = {
    title: "Add Book",
    headerLeft: null
  };

  state={ isbn: ""}

  onChangeText(text) {
    this.setState({isbn: text})
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <View style={{ flex: 1 }}>
          <Text>Addddddddd</Text>
        </View> */}

        {/* <Card style={{ flex: 1}}> */}
          <View style={{ flex: 1 }}>
            <SearchBar
              lightTheme
              round
              searchIcon={{size: 24}}
              value={this.state.isbn}
              onChangeText={text => this.onChangeText(text)}
              placeholder="Enter ISBN..."
            />
            {/* <Button></Button> */}
          </View>
          <View style={{ flex: 1}}>
            {/* <Image 
              source={require('../../assets/barcode-read.svg')}
              style={{ height:50, width: 70, color: "" }}
            /> */}
          </View>
        {/* </Card> */}

        <Footer selected="AddBook" navigate={this.props.navigation.navigate} />
      </View>
    );
  }
}

export default AddBook;