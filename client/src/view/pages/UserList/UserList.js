import React, { useState, useContext } from 'react';
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

  const { loadUfs, cleanUpUser, loadCities, saveUser } = useContext(Context);

  const users = useSelector(state => state.user.users);
  const isLoadingUsers = useSelector(state => state.user.isLoadingUsers);

  return (
    <div className={classes.root}>
      <UsersToolbar />
      <div className={classes.content}>
        <UsersTable users={users} isLoading={isLoadingUsers} />
      </div>
    </div>
  );
};

export default UserList;
