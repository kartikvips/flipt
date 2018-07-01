import React, { Component } from 'react';
import { View, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import { fetchUser } from '../actions'
import { Header, Card, Button } from './common';
import Footer from './common/Footer';
import RowItem from './RowItem';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class UserProfile extends Component {

  static navigationOptions = ({ navigation })=>{
    return ({
      title: navigation.getParam('user').name,
      headerRight: (
        <Icon.Button
          name="message-text-outline"
          backgroundColor="transparent"
          color="#000"
          onPress={() => navigation.navigate("Chat")}
        />
      ),
      headerLeft: null
    })
  }
  
  booksByGenre(genre) {
    return Object.values(this.props.books).filter(book => book.genre === genre)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <Header headerText="Username" /> */}
        {/* For testing */}
        {/* <Button onPress={() => console.log(this.props)}>log props</Button> */}
        {/* <Button onPress={() => this.props.navigation.navigate('Login')}>login</Button> */}
        {/* <Button onPress={() => this.props.fetchUser()}>fetch User</Button> */}
        <View style={{ flex: 1, margin: 0 }}>
          <Image source={{uri: 'https://res.cloudinary.com/dbm56y2y/image/upload/v1528916116/pxdpqlokeeyhonybowbv.jpg'}} style={styles.image}/>

          
                <RowItem
                  genre={"Owned Books"}
                  books={this.booksByGenre("Genre1")}
                  navigate={this.props.navigation.navigate}
                />
                <RowItem
                  genre={"Borrowed Books"}
                  books={this.booksByGenre("Genre2")}
                  navigate={this.props.navigation.navigate}
                />
              );
            }}

        </View>
        <Footer selected="User" navigate={this.props.navigation.navigate} />
      </View>
    )
  }
}

//dumb data for dev//
let genres = [
  { id: 1, name: "Genre1" },
  { id: 2, name: "Genre2" },
  // { id: 3, name: "Genre3" },
  // { id: 4, name: "Genre4" },
  // { id: 5, name: "Genre5" }
]
//
const styles = {
  image: {height: 80, 
  width: 80, 
  backgroundColor:'red', 
  borderRadius: 50, 
  margin: 10}
}

const mapStateToProps = ({ auth, books }) => {
  return { auth, books }
}

export default connect(mapStateToProps, null)(UserProfile);