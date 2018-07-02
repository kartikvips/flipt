import React, { Component } from 'react';
import { View, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import { fetchUser } from '../actions'
import { Header, Card, Button } from './common';
import Footer from './common/Footer';
import RowItem from './RowItem';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class UserProfile extends Component {



  static navigationOptions = ({navigation})=>{
    let name;
    if (navigation.getParam('user')) {name = navigation.getParam('user').name ;}
    if (navigation.state.params && !navigation.getParam('user')) {name = navigation.state.params.name;}
 
    return ({
      title: name,
      // title: this.props.auth.name,
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

  state={ user: this.props.auth}

  componentDidMount() {
    this.props.fetchUser(this.props.auth._id);
  }

  componentWillReceiveProps(nextProps) {

    if (this.props.auth !== nextProps.auth) {
      this.setState({user: nextProps.auth});
    }
  }
  booksByGenre(genre) {
    return Object.values(this.props.books).filter(book => book.genre === genre)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, margin: 0 }}>
          <Image source ={{ uri: 'https://res.cloudinary.com/dbm56y2y/image/upload/v1530419704/blurredLibrary.jpg'}} style={styles.image2}/>
          <Image source={{uri: `${this.props.auth.avatar}`}} style={styles.image}/>
          
                <RowItem
                  genre={"Owned Books"}
                  books={this.state.user.ownedBook}
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
  image: {height: 85, 
    alignSelf: 'center',
  width: 85, 
  borderRadius: 30, 
  margin: 17.5,
  position: 'absolute'},
  image2: {
    height: 120,
    width: '100%'
  }
}

const mapStateToProps = ({ auth, books }) => {
<<<<<<< HEAD

=======
  console.log("auth in userProfile (MSP)",auth);
>>>>>>> 494367f2731c89cc04b124f2006d2a686f92e544
  return { auth, books }
}

export default connect(mapStateToProps, {fetchUser})(UserProfile);