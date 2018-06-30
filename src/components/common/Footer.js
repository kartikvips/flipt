import React, { Component } from "react";
import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

class Footer extends Component {
  state = { selected: this.props.selected }

  style(type) {
    const { iconStyle, selectedStyle } = styles;
    if (this.state.selected === type) return selectedStyle;
    return iconStyle;
  }
  
  handlePress(type) {
    if (type !== "Home" && !this.props.user) {
      this.props.navigate('Login')
    } else {
      this.props.navigate(type, { user: this.props.user})
    }
  }

  

  render() {
    const { viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Icon.Button
          name="book"
          backgroundColor="transparent"
          onPress={() => this.handlePress("Home")}
          {...this.style("Home")}
        />
        <Icon.Button
          name="user-o"
          backgroundColor="transparent"
          onPress={() => this.handlePress("User")}
          {...this.style("User")}
        />
        <Icon.Button
          name="plus-square-o"
          backgroundColor="transparent"
          // onPress={() => this.handlePress("addBook")}
          onPress={() =>  this.handlePress("AddBook")}
          {...this.style("AddBook")}
        />
      </View>
    );
  }
}

const mapStateToProps = ( state ) => {
  // debugger;
  return { user: state.auth }
}

export default connect(mapStateToProps, null)(Footer);

const styles = {
  viewStyle: {
    backgroundColor: "#003B36",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingBottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  iconStyle: {
    size: 32,
    color: "#F9F7F7"
  },
  selectedStyle: {
    size: 32,
    color: "#E98A15"
  }
};
