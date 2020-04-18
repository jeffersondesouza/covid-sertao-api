import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

import { Context, useSelector } from 'store/createContext';

import { CrewAdminForm } from './components';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  },
}));

const AddCrewAdmin = () => {
  const classes = useStyles();

  const auth = useSelector(state => state.auth);
  console.log('auth:', auth)
  const user = useSelector(state => state.auth.currentUser);
  console.log('user:', user)

  if (!user.isSuperUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3">Novo Administrador</Typography>
        </Grid>
        <Grid item xs={12}>
          <CrewAdminForm />
        </Grid>
      </Grid>
    </div>
  );
};

export default AddCrewAdmin;
