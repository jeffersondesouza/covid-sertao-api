import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

import { Context, useSelector } from 'store/createContext';

import { CrewAdminForm } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  },
}));

const AddCrewAdmin = () => {
  const classes = useStyles();

  const state = useSelector();
  console.log('state:', state)

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
