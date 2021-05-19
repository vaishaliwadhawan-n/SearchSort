import React from 'react';
import Select from 'react-select';

const Filters = ({ handleSort, sortOrder }) => {
  const options = [
    { value: 'asc', label: 'Ascending' },
    { value: 'desc', label: 'Descending' }
  ];

  return (
      <Select
        value={sortOrder}
        className="select-filter"
        onChange={handleSort}
        options={options}
        placeholder="Sort here..."
      />
  
  );
};

export default Filters;
