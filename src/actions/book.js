import axios from "axios";
import { FETCH_BOOK } from "./types";

export const fetchBook = (id) => {
  return function (dispatch) {
    axios
      .get(`/books/${id}`)
      .then(res => dispatch({ type: FETCH_BOOK, payload: res.data }))
  };
};

export const createBook = (book) => {
   
    return  function(dispatch) {
        axios
        .post(`'http://localhost:5000/books/new'`, book)
        .then(res => {
            dispatch({ type: FETCH_BOOK, payload: res.data });
        }
     ).catch(err => console.log(err));
   };
};