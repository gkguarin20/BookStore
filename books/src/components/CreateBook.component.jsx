import React, { useEffect, useState } from 'react';
import Button from './ui/Button.component';
import { getAuthors, addBook } from '../lib/apiServices';
import { useNavigate } from 'react-router-dom';
import Select from './ui/Select';

const CreateBook = () => {
  const [book, setBook] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);

  const navigate = useNavigate();
  const formImputRef = React.useRef(null);

  useEffect(() => {
    const handleAuthors = async () => {
      const authorsResponse = await getAuthors();
      console.log(authorsResponse);
      if (authorsResponse !== undefined) {
        const shortData = authorsResponse.map((data) => ({
          name: data['name'],
        }));
        setBook({ authors: shortData });
      } else {
        console.error('error');
      }
    };
    handleAuthors();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookData = {
      title: book.title,
      description: book.description,
      authors: selectedAuthors,
      coverImageUrl: book.urlImage,
    };

    addBook(bookData)
      .then((res) => {
        console.log(res.data);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setBook((prevData) => ({ ...prevData, [name]: value }));
  };

  function setItems(item) {
    setSelectedAuthors([item]);
  }

  const { title, description, urlImage } = book;
  return (
    <React.Fragment>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <h2>Create a book</h2>
          <div className="form-group">
            <label className="form-label">Title</label>
            <input
              ref={formImputRef}
              className="form-control"
              type="text"
              name="title"
              value={title}
              onChange={handleOnchange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              type="text"
              name="description"
              value={description}
              onChange={handleOnchange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">CoverUrlImage</label>
            <input
              className="form-control"
              type="text"
              name="urlImage"
              value={urlImage}
              onChange={handleOnchange}
            />
          </div>
          <div className="form-group">
            <Select
              className="form-control"
              items={book.authors}
              labelItems="Authors"
              setItems={setItems}
            />
          </div>

          <div className="form-group">
            <Button type="submit" className="btn btn-primary" value="Submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default CreateBook;
