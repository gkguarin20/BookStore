import React from 'react';
import { useState } from 'react';
import Button from './ui/Button.component';
import { useNavigate } from 'react-router-dom';
import { addAuthor } from '../lib/apiServices';

const CreateAuthor = () => {
  const [name, setName] = useState('');
  const author = {
    name: name,
  };
  const navigate = useNavigate();

  const handleOnchange = (e) => {
    setName(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    const succ = async () => {
      const response = await addAuthor(author);
      if (response !== undefined) {
        navigate('/Create');
      }
    };
    succ();
  };

  return (
    <div className="content">
      <h3>Create Author</h3>
      <form onSubmit={handelSubmit}>
        <div className="form-group">
          <label className="form-label">Author Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            name={name}
            required
            onChange={handleOnchange}
          ></input>
        </div>
        <div className="form-group">
          <Button type="submit" className="btn btn-primary" value="Submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateAuthor;
