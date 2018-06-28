import React from 'react';
import { View, Text } from 'react-native';
import { Header, Footer } from "./common";

class BookProfile extends React.Component {

    render() {
        return( 
        <View style={{ flex: 1 }}>
        <Text>Book Profile</Text>
        <Footer selected="Home" navigate={this.props.navigation.navigate} />
        </View>
        );
    }

}

export default BookProfile;