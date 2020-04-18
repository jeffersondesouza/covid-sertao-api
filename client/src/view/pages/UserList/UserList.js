import React, { useState, useContext, useEffect, useReducer } from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersToolbar, UsersTable, UserDialog } from './components';

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
  const [users, setUsers] = useState([]);
  const [deletingUser, setDeletingUser] = useState(null);
  const [open, setOpen] = useState(false);

  const { loadUsers, deleteCrewUser, cleanUpUser } = useContext(Context);

  const usersList = useSelector(state => state.user.users);
  const isLoadingUsers = useSelector(state => state.user.isLoadingUsers);
  const isDeletingUser = useSelector(state => state.user.isDeletingUser);
  const deleteUserSuccess = useSelector(state => state.user.deleteUserSuccess);
  const deleteUserFail = useSelector(state => state.user.deleteUserFail);

  useEffect(() => {
    loadUsers();
    return () => {
      cleanUpUser();
    };
  }, []);

  useEffect(() => {
    setUsers(usersList);
  }, [usersList]);

  useEffect(() => {
    if (deleteUserSuccess) {
      const filteredUsers = usersList.filter(
        user => user.id !== deletingUser.id
      );

      setUsers(filteredUsers);
      setDeletingUser(null);
      setOpen(false);
    }
  }, [deleteUserSuccess]);

  const handleChange = filter => {
    const name = filter.toLowerCase();
    const filteredUsers = usersList.filter(user =>
      user.name.toLowerCase().includes(name)
    );

    setUsers(filteredUsers);
  };

  const handleConfirmDelete = () => {
    deleteCrewUser(deletingUser.id);
  };

  const handleClose = () => {
    if (!isDeletingUser) {
      setDeletingUser(null);
      setOpen(false);
    }
  };

  const handleSelectDelete = id => () => {
    const user = usersList.find(user => user.id === id);
    setDeletingUser(user);
    setOpen(true);
  };

  const handleSelectEdit = id => () => {
    console.log('id:', id);
  };

  return (
    <div className={classes.root}>
      <UsersToolbar onChange={handleChange} />
      <div className={classes.content}>
        <UsersTable
          users={users}
          isLoading={isLoadingUsers}
          onSelectDelete={handleSelectDelete}
          onSelectEdit={handleSelectEdit}
        />
      </div>
      <UserDialog
        open={open}
        user={deletingUser}
        onClose={handleClose}
        onConfirmDelete={handleConfirmDelete}
      />
    </div>
  );
};

export default UserList;
