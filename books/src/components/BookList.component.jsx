import React, { useState, useEffect } from 'react';
import { getBooks } from '../lib/apiServices';
import Book from './Book.component';
import SearchBar from './ui/SearchBar.component';
import CategoryList from '../layouts/CategoryList';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const books = async () => {
      const response = await getBooks();
      console.log(response);
      setBooks(response);
      setFilteredBooks(response);
    };
    books();
  }, []);

  function setInputSearch(input) {
    if (input !== undefined) {
      setFilteredBooks(
        books?.filter((book) =>
          book.title?.toLowerCase().includes(input?.toLowerCase())
        )
      );
    } else {
      setFilteredBooks(books);
    }
  }

  const bookList = filteredBooks?.map((item) => {
    return <Book key={item._id} book={item}></Book>;
  });

  return (
    <React.Fragment>
      <CategoryList />
      <SearchBar setInputSearch={setInputSearch} />
      <div className="content">
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {bookList}
        </div>
      </div>
    </React.Fragment>
  );
};

export default BookList;
