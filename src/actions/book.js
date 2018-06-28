import axios from "axios";
import { FETCH_BOOK } from "./types";

export const fetchBook = (id) => {
  return function (dispatch) {
      console.log('trying to fetch');
    axios
      .get(`/books/${id}`)
      .then(res => dispatch({ type: FETCH_BOOK, payload: res.data }))
  };
};

export const createBook = (book) => {
    console.log('hello');
   
    return  function(dispatch) {
        axios
        .post(`'http://localhost:5000/books/new'`, book)
        .then(res => {
            console.log(res.data);
            dispatch({ type: FETCH_BOOK, payload: res.data });
        }
     ).catch(err => console.log(err));
   };
};