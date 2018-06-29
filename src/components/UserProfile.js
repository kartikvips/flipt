import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Header, Card, Footer } from './common';
import RowItem from './RowItem';

class UserProfile extends Component {

  static navigationOptions = {
    title: 'Username'
  }
  
  booksByGenre(genre) {
    return this.props.books.filter(book => book.genre === genre)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <Header headerText="Username" /> */}
        <View style={{ flex: 1 }}>
          <FlatList
            data={genres}
            renderItem={({ item }) => {
              return (
                <RowItem
                  genre={item.name}
                  books={this.booksByGenre(item.name)}
                  navigate={this.props.navigation.navigate}
                />
              );
            }}
            keyExtractor={(item) => `${item.id}`}
          />
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
  { id: 3, name: "Genre3" },
  { id: 4, name: "Genre4" },
  { id: 5, name: "Genre5" }
]
//

const mapStateToProps = state => {
  const { auth, books } = state;
  return { auth, books }
}

export default connect(mapStateToProps, null)(UserProfile);