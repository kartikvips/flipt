import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Header, Button } from "./common";
import BookDetails from "./common/BookDetails";
import Footer from './common/Footer';
import {connect} from 'react-redux';

class BookProfile extends React.Component {

    render() {
        const book = this.props.navigation.getParam('book', {title:'nothing'});
        const action = this.props.navigation.getParam('action');
        const type = this.props.navigation.getParam('type', 'none');
        

        return( 
        <View style={{ flex: 1 }}>
           <View style={{ flex: 1 }}>
             <BookDetails book={book} action={action} type={type} auth={this.props.auth}/>
            <ScrollView>

                <Text style= {{ marginTop: 15, marginLeft: 10 }}>{book.description}</Text>
            </ScrollView>
            </View>
          <Footer navigate={this.props.navigation.navigate} />
        </View>
   
        );
    }

}

const mapStateToProps = state => {
    return { books: state.books, auth: state.auth };
  };

  export default connect(mapStateToProps, {})(BookProfile);