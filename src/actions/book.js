import axios from "axios";
import { RECEIVE_BOOK } from "./types";

export const fetchBook = (id) => {
  return function (dispatch) {
    axios
      .get(`/books/${id}`)
      .then(res => dispatch({ type: RECEIVE_BOOK, payload: res.data }))
  };
};

export const fetchGoogleBook = (isbn) => {
  // debugger;
  return function (dispatch) {
    axios
      .get(`http://localhost:5000/books/google/${isbn}`)
      .then(res => {
        dispatch({ type: RECEIVE_BOOK, payload: res.data })
        
      })
      .catch(err =>  console.log(err));
  }
}

export const createBook = (book) => {
   
    return  function(dispatch) {
        axios
        .post(`http://localhost:5000/books/new`, book)
        .then(res => {
            dispatch({ type: RECEIVE_BOOK, payload: res.data });
        }
     ).catch(err => console.log(err));
   };
};