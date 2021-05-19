
import React, { useState, useEffect, useRef } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { loadUsers } from '../actions/users';
import UsersList from './UsersList';
import Header from './Header';
import Filters from './Filters';

const HomePage = (props) => {
  const [users, setUsers] = useState(props.users);
  const [sortOrder, setSortOrder] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    setIsLoading(true);
    props.dispatch(loadUsers());
    inputRef.current=onSearchText;
   // inputRef.current = _.debounce(onSearchText,1000);
  }, []);

  useEffect(() => {
    if (props.users.length > 0) {
      setUsers(props.users);
      setIsLoading(false);
    }
  }, [props.users]);

  function onSearchText(text, props) {
    let filtered;
    if (text) {
      filtered = props.users.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())||
        user.discription.toLowerCase().includes(text.toLowerCase())
      );
    } else {
      filtered = props.users;
    }
    setUsers(filtered);
    setSortOrder('');
  }

  function handleSearch(event) {
    inputRef.current(event.target.value, props);
  }

  function handleSort(sortOrder) {
    setSortOrder(sortOrder);
    if (sortOrder.value) {
      setUsers(_.orderBy(users, ['age'], [sortOrder.value]));
    }
  }
  return (
    <div>
      <Header handleSearch={handleSearch} />
      <Filters handleSort={handleSort} sortOrder={sortOrder} />
      <UsersList users={users} isLoading={isLoading} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  users: state.users
});
export default connect(mapStateToProps)(HomePage);
