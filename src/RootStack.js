import { createStackNavigator } from "react-navigation";

import UserProfile from './components/UserProfile';
import ChatList from './components/ChatList';
import LoginModal from './components/LoginModal';
import SearchPage from './components/SearchPage';
import AddBook from './components/AddBook';
import BookProfile from './components/BookProfile';
import Messages from './components/Messages';
import HomePage from './components/HomePage';
import screen from './components/GMap';

const RootStack = createStackNavigator(
  {
    Home: HomePage,
    User: UserProfile,
    Chat: ChatList,
    Login: LoginModal,
    AddBook: AddBook,
    BookProfile: BookProfile,
    Messages: Messages,
    Map: screen
  }, 
  {
    initialRouteName: 'Map'
  }
);


export default RootStack;
