import React, { Component } from "react";
// import { Actions } from "react-native-router-flux";
import { Linking } from "react-native";
import { Card, CardSection, Button } from "./common";

class LoginPage extends Component {
  loginWithGoogle() {
    Linking.openURL("https://flipt-t.herokuapp.com/auth/google");
    // Actions.main();
  }

  goToMainPage() {
    // Actions.main();
  }

  render() {
    return <Card>
        <CardSection>
          <Button onPress={this.loginWithGoogle.bind(this)}>
            Login with Google+
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.loginWithFacebook.bind(this)}>
            Login with Facebook
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.goToMainPage.bind(this)}>Home page</Button>
        </CardSection>
      </Card>;
  }
}

export default LoginPage;
