import React, { Component } from "react";
import { View, FlatList, ListView, Text } from "react-native";
import { connect } from "react-redux";
import Footer from "./common/Footer";
import { SearchBar } from "react-native-elements";
// import { Header, Footer } from "./common";
import SearchListItem from "./SearchListItem";


class HomePage extends Component {

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
      
    // navigator.geolocation.getCurrentPosition(position  => {
    //   console.log(position);
    // });

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
          
        <View style={{ flex: 1 , marginTop: 10}}>
        
            <FlatList 
            horizontal={false}
            numColumns= {2}
            data={Object.values(this.props.books)}
            renderItem={
                ({item}) => {
                return <SearchListItem navigate={this.props.navigation.navigate} book={item}/>
            }
            }
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
  return { auth, books };
};

const styles = {
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        backgroundColor: 'red',
        margin: 3,
        width: 150
    }
}

export default connect(
  mapStateToProps,
  null
)(HomePage);