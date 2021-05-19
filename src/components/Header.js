import React from 'react';

const HeaderPage = ({ handleSearch }) => {
  return (
    <header className="header">
      <div className="header__title" />
      <div className="header__search">
        <input
          type="search"
          placeholder="Search...."
          onChange={handleSearch}
        />
      </div>
    </header>
  );
};

export default HeaderPage;
