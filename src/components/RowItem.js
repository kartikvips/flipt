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
    console.log("here", genre)

    return (
      <Card style={{ flex: 1 }}>
        <CardSection>
          <Text>{genre}</Text>
        </CardSection>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={books}
          renderItem={({ item }) => {
            return (
              <ListItem
                book={item}
              />
            )
          }}
          keyExtractor={(item, index) => `${item.id}`}
        />
      </Card>
    );
  }
}


export default RowItem;
