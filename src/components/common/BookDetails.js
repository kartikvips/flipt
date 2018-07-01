import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import {Button} from './index';

export class BookDetails extends React.Component {

    render(){
        const {infoHolder, imageHolder, image, rightSide, textStyle} = styles;
        const {book, text} = this.props;
    return (
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
        <Button>{text}</Button>
        </View>
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