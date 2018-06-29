import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginPage from './components/LoginPage';
// import Home from './components/Home';
import * as actions from './actions';
import { connect } from 'react-redux';
// import Yo from './components/Yo';
import UserProfile from './components/UserProfile';

class RouterComponent extends Component {
  componentDidMount() {
    // this.props.fetchUser();
  }
  render() {
    return (
      <Router sceneStyle={{ paddingTop: 65 }}>
        <Scene key="root" hideNavBar>
          {/* <Scene key="auth">
            <Scene
              key="login"
              component={LoginPage}
              title="Please Login"
              initial
            />
          </Scene> */}

          <Scene key="user">
            <Scene
              rightTitle="bell"
              leftTitle="chats"
              onRight={() => Actions.bell()}
              onLeft={() => Actions.chats()}
              key="home"
              component={UserProfile}
              title="Username"
              initial
            />
            <Scene key="chats" component={ChatList} title="Messages" />
            <Scene key="bell" component={NotiList} title="Notification" />
          </Scene>
          
          <Scene key="search">
          </Scene>

          <Scene key="addBook">
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default connect(null, actions)(RouterComponent);