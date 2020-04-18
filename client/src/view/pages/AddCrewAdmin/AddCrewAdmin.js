import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

import { Context, useSelector } from 'store/createContext';

import { CrewAdminForm } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  },
}));

const AddCrewAdmin = () => {
  const classes = useStyles();

  const { loadUfs } = useContext(Context);

  const user = useSelector(state => state.auth.currentUser);
  const ufs = useSelector(state => state.location.ufs);
  console.log('ufs:', ufs)

  useEffect(() => {
    loadUfs();
  }, []);

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
