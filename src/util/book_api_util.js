import axios from 'axios';

export const fetchBook = (id) => (
  axios.get(`/books/${id}`)
);

export const fetchGoogleBook = searchInput => (
  axios.get(`http://localhost:5000/books/google/${searchInput}`)
)

export const createBook = book => (
  axios.post(`http://localhost:5000/books/new`, book)
)