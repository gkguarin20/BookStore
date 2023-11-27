import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Book.style.css';

function Book({ book }) {
  const [id, setId] = useState('');

  const onError = () => {
    console.log('Image no charged');
  };

  const handleClick = (item) => {
    setId(id);
    console.log(item.title);
  };
  return (
    <div className="card-book">
      <div className=" border rounded overflow-hidden flex-md-row mb-4 shadow-sm">
        <div className="col p-4 d-flex flex-column ">
          <Link to={`/details`} state={book}>
            <img src={book.coverImageUrl} onError={onError}></img>
          </Link>
        </div>
        <div className="col-auto d-none d-lg-block">
          <strong className=" mb-2 text-success">{book.title}</strong>
        </div>
      </div>
    </div>
  );
}

export default Book;
