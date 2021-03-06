import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, Linking } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Input, Card, CardSection, Button2, Button } from './common';
import BookDetails from './common/BookDetails';
import Footer from "./common/Footer";
import { fetchGoogleBook, createBook } from '../actions/book';
import { fetchUser } from '../actions/index';

class AddBook extends Component {
  static navigationOptions = {
    title: "Add Book",
    headerLeft: null
  };

  state={ isbn: "", book: null}

  componentDidMount() {
    // console.log("in Addbook componentDidMount, the book is", this.props.books[this.state.isbn] || "yo");
    if (!this.props.auth){
    this.props.navigation.navigate('Login');
    }
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
          <BookDetails book={book} text={'Add'} action={this.addBook.bind(this)}/>
        </View>
      );
    }else {
      return <Image style={{ flex: 1}} source={{ uri: 'https://res.cloudinary.com/dbm56y2y/image/upload/v1530424315/blurbook.jpg' }}/>;
    }
  }

  addBook(book) {
    // console.log('jjjjjjkjhkhlfglyfligl' ,this.props.auth)
    book.ownerId  = this.props.auth._id;
    navigator.geolocation.getCurrentPosition(position  => {
      book.coordinates = [position.coords.latitude,position.coords.longitude];

      let newString = '';
      for (let i = 0; i < book.description.length; i++){
        if (book.description[i] !== '#'){newString += book.description[i];}
      }
      book.description = newString;

      this.props.createBook(book).then(book => {
        // console.log('the book is', book);
        this.props.fetchUser(book.payload.ownerId);
      });
    });
   
    this.props.navigation.navigate('User', this.props.auth);

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
        <View style={{ flex: 1 }}>
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

export default connect(mapStateToProps, { fetchGoogleBook, createBook, fetchUser })(AddBook);