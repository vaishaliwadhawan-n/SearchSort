import axios from 'axios';

//action creator for asynchronous code.

export const setUsers = (users) => ({
  type: 'SET_USERS',
  users
});

export const loadUsers = () => {
  return async (dispatch) => {
    try {
      const users = await axios.get('./users.json');
      return dispatch(setUsers(users.data));
    } catch (error) {
      console.log('error:', error);
    }
  };
};

/*export const InfiniteScrollAction = (items) => {
return {
type: "InfiniteScrollAction",
items:items.data.items,
}
}
export const InfiniteScrollFailureAction = () => {
return {
type: "InfiniteScrollFailureAction",
failure:true
}
}*/