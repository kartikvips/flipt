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

  state={ isbn: "", book: { title: "none" } }

  componentDidMount() {
    console.log("in Addbook componentDidMount, the book is", this.props.books[this.state.isbn] || "yo");
  }

  onChangeText(text) {
    this.setState({isbn: text})
  }

  handlePress() {
    const { isbn } = this.state;
    this.props.fetchGoogleBook(isbn);
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.books.isbn) {
      const book = nextProps.books[nextProps.books.isbn];
      debugger;
      this.props.navigation.navigate("BookProfile", { book }); 
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={{ flex: 1 }}>
          <SearchBar
            lightTheme
            round
            searchIcon={{size: 24}}
            value={this.state.isbn}
            onChangeText={text => this.onChangeText(text)}
            placeholder="Enter ISBN or Title"
          />
          <Button onPress={ () => this.handlePress() }>
            search
          </Button>
        </View>
        <View style={{ flex: 1}}>
          {/* <Image 
            source={require('../../assets/barcode-read.svg')}
            style={{ height:50, width: 70, color: "" }}
          /> */}
        </View>

        <Footer selected="AddBook" navigate={this.props.navigation.navigate} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  // debugger;
  return { books: state.books }
}

export default connect(mapStateToProps, { fetchGoogleBook })(AddBook);