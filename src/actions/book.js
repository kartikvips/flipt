import axios from "axios";
<<<<<<< HEAD
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
=======
import { RECEIVE_BOOK } from "./types";
import * as BookApiUtil from '../util/book_api_util';

const receiveBook = payload => ({
  type: RECEIVE_BOOK,
  payload
});

export const fetchBook = id => dispatch => (
  BookApiUtil.fetchBook(id)
    .then(res => dispatch(receiveBook(res.data)))
);

export const fetchGoogleBook = searchInput => dispatch => (
  BookApiUtil.fetchGoogleBook(searchInput)
    .then(res => dispatch(receiveBook(res.data)))
    .catch(err => console.log("error in fetchGoogleBook action: ", err))
);

export const createBook = book => dispatch => (
  BookApiUtil.createBook(book)
    .then(res => dispatch(receiveBook(res.data)))
    .catch(err => console.log("error in createBook action: ", err))
);

// export const fetchBook = (id) => {
//   return function (dispatch) {
//     axios
//       .get(`/books/${id}`)
//       .then(res => dispatch({ type: RECEIVE_BOOK, payload: res.data }))
//   };
// };


// export const fetchGoogleBook = (searchInput) => {
//   // debugger;
//   return function (dispatch) {
//     axios
//       .get(`http://localhost:5000/books/google/${searchInput}`)
//       .then(res => {
//         return dispatch({ type: RECEIVE_BOOK, payload: res.data })
//       })
//       .catch(err =>  console.log(err));
//   }
// }

// export const createBook = (book) => {
//     return  function(dispatch) {
//         axios
//         .post(`http://localhost:5000/books/new`, book)
//         .then(res => {
//             dispatch({ type: RECEIVE_BOOK, payload: res.data });
//         }
//      ).catch(err => console.log(err));
//    };
// };
>>>>>>> 494367f2731c89cc04b124f2006d2a686f92e544
