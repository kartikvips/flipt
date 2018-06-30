import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, Linking } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Input, Card, CardSection, Button } from './common';
import Footer from "./common/Footer";
import { fetchGoogleBook } from '../actions/book';

class AddBook extends Component {
  static navigationOptions = {
    title: "Add Book",
    headerLeft: null
  };

  state={ isbn: "" }

  componentDidMount() {
    console.log("the book is", this.props.book);
  }

  onChangeText(text) {
    this.setState({isbn: text})
  }

  handlePress() {
    const { isbn } = this.state;
    this.props.fetchGoogleBook(isbn);
  }
  
  componentWillReceiveProps(nextProps) {
    console.log("entered componentWillReceiveProps", nextProps)
    // if (nextProps.book.title !== this.props.book.title ) {
    //   console.log("books changed", nextProps.book.title)
    // }
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
            <Button onPress={ () => this.handlePress() }>
              Add to your library
            </Button>
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

const mapStateToProps = state => {
  return { book: state.books[0] }
}

export default connect(mapStateToProps, { fetchGoogleBook })(AddBook);