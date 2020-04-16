import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

import { CrewMemberForm } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  },
}));

const AddCrewAdmin = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3">Novo Administrador</Typography>
        </Grid>
        <Grid item xs={12}>
          <CrewMemberForm />
        </Grid>
      </Grid>
    </div>
  );
};

export default AddCrewAdmin;
