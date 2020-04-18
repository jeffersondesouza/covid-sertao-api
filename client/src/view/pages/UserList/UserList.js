import React, { useState, useContext, useEffect, useReducer } from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersToolbar, UsersTable } from './components';
import mockData from './data';

import { Context, useSelector } from 'store/createContext';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(2),
  },
}));

const UserList = () => {
  const classes = useStyles();

  const { loadUfs, cleanUpUser, loadUsers } = useContext(Context);

  const usersList = useSelector(state => state.user.users);
  const isLoadingUsers = useSelector(state => state.user.isLoadingUsers);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(() => {
    setUsers(usersList);
  }, [usersList]);

  const handleChange = filter => {
    const name = filter.toLowerCase();
    const filteredUsers = usersList.filter(user =>
      user.name.toLowerCase().includes(name)
    );

    setUsers(filteredUsers);
  };

  return (
    <div className={classes.root}>
      <UsersToolbar onChange={handleChange} />
      <div className={classes.content}>
        <UsersTable users={users} isLoading={isLoadingUsers} />
      </div>
    </div>
  );
};

export default UserList;
