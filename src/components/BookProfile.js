import React from 'react';
import { View, Text, Image } from 'react-native';
import { Header, Footer, Button } from "./common";


class BookProfile extends React.Component {

    render() {
        const book = this.props.navigation.getParam('book', {title:'nothing'});
        const { image, infoHolder, imageHolder, rightSide } = styles;
        return( 
        <View style={{ flex: 1 }}>
           <View style={{ flex: 1 }}>
             <View style={ infoHolder }>
                <View style={ imageHolder }>
                 <Image
                   style = { image }
                   source={{ uri: book.imageUrl }}
                 />
                </View>
               <View style= { rightSide }>
                 <Text style={{ marginTop: 10 }}>{book.title}</Text>
                 <Text style={{ marginTop: 10 }}>{book.author}</Text>
                 <Text style={{ marginTop: 10 }}>{book.category}</Text>
                 <Text style={{ marginTop: 10 }}>Published {book.year}</Text>
                 <Text style={{ marginTop: 10 }}>Owned by TeamT</Text>
                 <Button>Borrow</Button>
               </View>
             </View>
                <Text style= {{ marginTop: 15, marginLeft: 10 }}>{book.description}</Text>
            </View>
          <Footer navigate={this.props.navigation.navigate} />
        </View>
   
        );
    }

}

const styles = {
    image: {
        height: 275,
        width: 200,
        resizeMode: Image.resizeMode.stretch
    },
    infoHolder: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    },
    imageHolder: {
  
    } ,
    rightSide: {
    justifyContent: 'space-between',
    flexDirection: 'column' ,
    flex: 1,
    marginLeft: 10 
    
    }
};

export default BookProfile;