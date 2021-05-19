import React from 'react';
import UserItem from './UserItem';
import Masony from 'react-masonry-component';

const masonryOptions = {
  fitWidth: false,
  columnWidth: 300,
  gutter: 22,
  itemSelector: ".photo-item",
};
const UsersList = ({ users, isLoading }) => {
  return (
    <div className="users-list">
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : ( 
      <Masony
        className={"photo-list"}
        elementType={"ul"}
        options={masonryOptions}
      >
        {users.map((user, index) => (
          <div>
            <UserItem key={index} {...user} />
         </div>  
          ))}
      </Masony>
      )}
    </div>
  );
};

export default UsersList;
