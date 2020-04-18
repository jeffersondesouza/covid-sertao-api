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
  alert: {
    marginTop: '3rem',
    textAlign: 'center',
  },
}));

const UserList = () => {
  const classes = useStyles();

  const { loadUfs, cleanUpUser, loadCities, saveUser } = useContext(Context);

  const users = useSelector(state => state.user.users);

  return (
    <div className={classes.root}>
      <UsersToolbar />
      <div className={classes.content}>
        {users.length ? (
          <UsersTable users={users} />
        ) : (
          <Typography variant="body1" className={classes.alert}>
            Sem Usuários Cadastrados
          </Typography>
        )}
      </div>
    </div>
  );
};

export default UserList;
