import React, { useState } from 'react';

const ListItems = ({ items, labelItems, setItems }) => {
  const [selectedItem, setSelectedItem] = useState([]);
  let listItems = '';

  const handleSelectChange = (option) => {
    setSelectedItem((prevData) => ({ ...prevData, selectedItem: option }));
    setItems(option);
  };

  if (items !== undefined) {
    listItems = items.map((item, index) => (
      <option
        key={item._id}
        value={item._id}
        onClick={() => {
          handleSelectChange(item.name);
        }}
        className={
          selectedItem === item.id ? 'list-group active' : 'list-group'
        }
      >
        {item.name}
      </option>
    ));
  }

  return (
    <>
      <div className="form-group">
        <label className="form-label">{labelItems}</label>
        <select
          autoFocus={true}
          multiple={true}
          className="form-select"
          aria-label="multiple select example"
        >
          {listItems}
        </select>
      </div>
    </>
  );
};

export default ListItems;
