import React from 'react';
import { useLocation } from 'react-router-dom';

const BookDetails = (props) => {
  const location = useLocation();
  const propsData = location.state;

  return (
    <div className="content">
      <div className="row">
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <a>
            <img src={propsData.coverImageUrl}></img>
          </a>
        </div>
        <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
          <div className="row">
            <h2>{propsData.title}</h2>
          </div>
          <p>{propsData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
