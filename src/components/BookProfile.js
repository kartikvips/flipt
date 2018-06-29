import React from 'react';
import { View, Text, Image } from 'react-native';
import { Header, Footer, Button } from "./common";


class BookProfile extends React.Component {

    render() {
        const book = this.props.navigation.getParam('book', {title:'nothing'});
        const { image, infoHolder, imageHolder, rightSide, textStyle } = styles;
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
                 <Text style={ textStyle }>{book.title}</Text>
                 <Text style={ textStyle }>{book.author}</Text>
                 <Text style={ textStyle }>{book.category}</Text>
                 <Text style={ textStyle }>Published {book.year}</Text>
                 <Text style={ textStyle }>Owned by TeamT</Text>
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
    textStyle: {
        marginTop: 10,
        fontWeight: '700'
    },
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
    marginLeft: 10 ,
    marginTop: 10
    
    }
};

export default BookProfile;