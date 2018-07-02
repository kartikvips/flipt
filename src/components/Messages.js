import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  View,
  Text, 
  FlatList, 
  TextInput, 
  KeyboardAvoidingView, 
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Input } from './common';
import MessageListItem from './MessageListItem';
import { fetchUser } from '../actions/index';

class Messages extends Component {
  static navigationOptions = ({ navigation }) => {
    chatWith = navigation.getParam('chatWith')
    return { title: chatWith };
  }

  componentDidMount() {
    console.log("before fetch",this.props.auth)
    this.props.fetchUser();
    console.log("after fetch", this.props.auth)

  }

  state = { text: ""}

  onChangeText(text) {
    this.setState({ text })
  }

  onPressSend() {
    alert(this.state.text)
    this.setState({ text: "" })
  }

  render(){
    return <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <View style={{ flex: 11 }}>
          <FlatList ref={elm => (this.flatlist = elm)} data={this.props.messages} renderItem={({ item }) => {
              return <MessageListItem message={item} auth={this.props.auth} />;
            }} keyExtractor={item => `${item.id}`} onLayout={() => this.flatlist.scrollToEnd(
                { animated: false }
              )} />
        </View>
        <ScrollView contentContainerStyle={styles.inputContainerStyle}>
          <TextInput
            placeholder="New message here..."
            style={styles.inputStyle}
            value={this.state.text}
            onChangeText={text => this.onChangeText(text)}
          />
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={()=> this.onPressSend()}
          >
            <Text style={{ color: 'white'}}>Send</Text>
          </TouchableOpacity>
        </ScrollView>
        {/* <View style={{ height: 61 }} /> */}
      </KeyboardAvoidingView>
  }
}

const mapStateToProps = ({ auth, messages }) => {
  return { auth, messages: Object.values(messages)}
}

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Messages);

const styles = {
  inputContainerStyle: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 10,
    flexDirection: "row"
  },
  inputStyle: {
    color: "#000",
    paddingLeft: 10,
    paddingRight: 5,
    fontSize: 16,
    lineHeight: 20,
    flex: 1,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5
  },
  buttonStyle: {
    marginLeft: 5,
    backgroundColor: "#007369",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 5,
    // borderWidth: 1,
    // borderColor: "#003B36"
  }
};