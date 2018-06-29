import { createStackNavigator } from "react-navigation";

import UserProfile from './components/UserProfile';
import ChatList from './components/ChatList';
import LoginModal from './components/LoginModal';
import SearchPage from './components/SearchPage';
import AddBook from './components/AddBook';
import BookProfile from './components/BookProfile';

const RootStack = createStackNavigator({
  Home: SearchPage,
  User: UserProfile,
  Chat: ChatList,
  Login: LoginModal,
  AddBook: AddBook,
  BookProfile: BookProfile
}
);


export default RootStack;