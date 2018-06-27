import React, { Component } from 'react';
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import Routes from './Routes';

class App extends Component {
  componentDidMount() {}
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        {/* <Routes /> */} 
      </Provider>
    );
  }
}

export default App;