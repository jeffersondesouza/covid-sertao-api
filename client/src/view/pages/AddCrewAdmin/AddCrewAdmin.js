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

  const { loadUfs, loadCities } = useContext(Context);

  const user = useSelector(state => state.auth.currentUser);
  const ufs = useSelector(state => state.location.ufs);
  const cities = useSelector(state => state.location.cities);
  const loading = useSelector(
    state => state.location.isLoadingUfs || state.location.isLoadingCities
  );

  useEffect(() => {
    loadUfs();
  }, []);

  const handleLoadUfCities = uf => loadCities(uf);

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
          <CrewAdminForm
            ufs={ufs}
            cities={cities}
            loading={loading}
            onLoadUfCities={handleLoadUfCities}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default AddCrewAdmin;
