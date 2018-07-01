import React, { Component } from "react";
import {
  Text,
  FlatList,
  View
} from "react-native";
import { Card, CardSection } from "./common";
import ListItem from './ListItem';

class RowItem extends Component {

  render() {
    const { books, genre } = this.props;

    return (
      <Card style={{  }}>
        <CardSection>
          <Text style={{color: '#fff'}}>{genre}</Text>
        </CardSection>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={books}
          renderItem={({ item }) => {
            return (
              <ListItem
                navigate={this.props.navigate}
                book={item}
              />
            )
          }}
          keyExtractor={(item, index) => `${item.isbn}`}
        />
      </Card>
    );
  }
}


export default RowItem;
