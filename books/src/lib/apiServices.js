import axios from 'axios';

export const getAuthors = async () => {
  return axios
    .get('http://localhost:5000/authors')
    .then((res) => res.data)
    .catch((error) => {
      console.error(`Error! ${error}`);
    });
};

export const addAuthor = async (author) => {
  return axios
    .post('http://localhost:5000/authors/add', author)
    .then((res) => res.data)
    .catch((error) => {
      console.error(`Error! ${error}`);
    });
};

export const getBooks = async () => {
  return axios
    .get('http://localhost:5000/books')
    .then((res) => res.data)
    .catch((error) => {
      console.error(`Error! ${error}`);
    });
};

export const addBook = async (author) => {
  return axios
    .post('http://localhost:5000/books/add', author)
    .then((res) => res.data)
    .catch((error) => {
      console.error(`Error! ${error}`);
    });
};
