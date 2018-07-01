import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import Footer from "./common/Footer";
import { SearchBar } from "react-native-elements";
// import { Header, Footer } from "./common";
import RowItem from "./RowItem";

class SearchPage extends Component {

  static navigationOptions = {
    title: 'Search'
  }

  state = { searchText: "" }

  onChangeText(text) {
    this.setState({ searchText: text })
  }

  booksByGenre(genre) {
    return this.props.books.filter(book => book.genre === genre);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <Header headerText="Search" /> */}
        <View>
            <SearchBar
              lightTheme
              round
              searchIcon={{size: 24}}
              value={ this.state.searchText }
              onChangeText={text => this.onChangeText(text)}
              placeholder="Search by title, author..."
            />
          </View>
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
            keyExtractor={item => `${item.id}`}
          />
        </View>
        <Footer selected="Home" navigate={this.props.navigation.navigate} />
      </View>
    );
  }
}

//dumb data for dev//
let genres = [
  { id: 1, name: "Genre1" },
  { id: 2, name: "Genre2" },
  { id: 3, name: "Genre3" },
  { id: 4, name: "Genre4" },
  { id: 5, name: "Genre5" }
];
//

const mapStateToProps = state => {
  const { auth, books } = state;
  return { auth, books: Object.values(books) };
};

export default connect(
  mapStateToProps,
  null
)(SearchPage);
