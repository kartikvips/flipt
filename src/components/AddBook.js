import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, Linking } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Input, Card, CardSection, Button2, Button, BookDetails } from './common';
import Footer from "./common/Footer";
import { fetchGoogleBook, createBook } from '../actions/book';

class AddBook extends Component {
  static navigationOptions = {
    title: "Add Book",
    headerLeft: null
  };

  state={ isbn: "", book: null}

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
      this.setState({book:book});
    }
  }

  bookArea(){
    const {book} = this.state;
    const { image, infoHolder, imageHolder, rightSide, textStyle } = styles;
    if (book){
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <BookDetails book={book} text={'Add'}/>
        </View>
      );
    }else {
      return <Image style={{ flex: 1, blurRadius: 95}} source={{ uri: 'https://res.cloudinary.com/dbm56y2y/image/upload/v1530424315/blurbook.jpg' }}/>;
    }
  }

  addBook(book) {
    book.ownerId  = this.props.auth.id;
    this.props.createBook(book);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={{ }}>
          <SearchBar
            lightTheme
            round
            searchIcon={{size: 24}}
            value={this.state.isbn}
            onChangeText={text => this.onChangeText(text)}
            placeholder="Enter ISBN or Title"
          />
          <Button2 style={{}}onPress={ () => this.handlePress() }>
            search
          </Button2>
        </View>
        <View style={{ flex: 1,  resizeMode: Image.resizeMode.stretch }}>
          {/* <Image 
            source={require('../../assets/barcode-read.svg')}
            style={{ height:50, width: 70, color: "" }}
          /> */}
          {this.bookArea()}
        
        </View>
        <Footer selected="AddBook" navigate={this.props.navigation.navigate} />
      </View>
    );
  }
}

const styles = {
  textStyle: {
      marginTop: 10,
      fontWeight: '700'
  },
  image: {
      height: 275,
      width: 200,
      resizeMode: Image.resizeMode.stretch
  },
  infoHolder: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      position: 'relative'
  },
  imageHolder: {

  } ,
  rightSide: {
  justifyContent: 'space-between',
  flexDirection: 'column' ,
  flex: 1,
  marginLeft: 10 ,
  marginTop: 10
  
  }
};

const mapStateToProps = state => {
  // debugger;
  return { books: state.books, auth: state.auth }
}

export default connect(mapStateToProps, { fetchGoogleBook, createBook })(AddBook);