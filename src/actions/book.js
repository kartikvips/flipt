import axios from "axios";
import { RECEIVE_BOOK, FETCH_USER } from "./types";
import {fetchUser} from "./index";

export const fetchBook = (id) => {
  return function (dispatch) {
    axios
      .get(`/books/${id}`)
      .then(res => dispatch({ type: RECEIVE_BOOK, payload: res.data }));
  };
};

export const fetchGoogleBook = (searchInput) => {
  // debugger;
  return function (dispatch) {
    axios
      .get(`http://localhost:5000/books/google/${searchInput}`)
      .then(res => {
        return dispatch({ type: RECEIVE_BOOK, payload: res.data });
      })
      .catch(err =>  console.log(err));
  }
}

export const createBook = (book) => {
   
    return  function(dispatch) {
      console.log('here is the book', book);
        axios
        .post(`http://localhost:5000/books/new`, book)
        .then(res => {
          console.log('this is the new book respose', res);
            dispatch({ type: RECEIVE_BOOK, payload: res.data });
        }
     ).catch(err => console.log(err));
   };
};