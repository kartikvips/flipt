import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Header, Button, BookDetails } from "./common";
import Footer from './common/Footer';


class BookProfile extends React.Component {

    render() {
        const book = this.props.navigation.getParam('book', {title:'nothing'});
        

        return( 
        <View style={{ flex: 1 }}>
           <View style={{ flex: 1 }}>
             <BookDetails book={book} text={"Borrow"}/>
            <ScrollView>

                <Text style= {{ marginTop: 15, marginLeft: 10 }}>{book.description}</Text>
            </ScrollView>
            </View>
          <Footer navigate={this.props.navigation.navigate} />
        </View>
   
        );
    }

}



export default BookProfile;