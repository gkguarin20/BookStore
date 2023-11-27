import React from 'react';
import Multiselect from 'multiselect-react-dropdown';

const Select = ({ items, labelItems, setItems }) => {
  function onSelect(selectedList, selectedItem) {
    setItems(selectedList.map((test) => test.name));
  }
  function onRemove(selectedList, removedItem) {
    setItems(selectedList.map((test) => test.name));
  }
  return (
    <>
      <div>
        <label className="form-label">{labelItems}</label>
        <Multiselect
          options={items}
          onSelect={onSelect}
          onRemove={onRemove}
          displayValue="name"
          emptyRecordMsg="No data found"
        />
      </div>
    </>
  );
};

export default Select;
