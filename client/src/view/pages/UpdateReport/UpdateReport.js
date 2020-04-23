import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { Alert, AlertTitle } from '@material-ui/lab';

import { Context, useSelector } from 'store/createContext';

import { UpdateCountryReport, Messages } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  },
  alerts: {},
}));

const UpdateReport = () => {
  const classes = useStyles();

  const { loadUfs, cleanUpUser, loadCities, saveUser } = useContext(Context);

  const loading = useSelector(
    state => state.location.isLoadingUfs || state.location.isLoadingCities
  );
  const user = useSelector(state => state.auth.currentUser);
  const ufs = useSelector(state => state.location.ufs);
  const cities = useSelector(state => state.location.cities);
  const saveSuccess = useSelector(state => state.user.saveUserSuccess);
  const saveFail = useSelector(state => state.user.saveUserFail);

  useEffect(() => {
    loadUfs();
    return () => {
      cleanUpUser();
    };
  }, []);

  const handleLoadUfCities = uf => loadCities(uf);

  const handleSaveAdmin = user => saveUser({ ...user, role: 1 });

  if (!user.isSuperUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3">Atualizar Boletim</Typography>
        </Grid>
        <Messages saveSuccess={saveSuccess} saveFail={saveFail}/>

        <Grid item xs={12}>
          <UpdateCountryReport
            ufs={ufs}
            cities={cities}
            loading={loading}
            onLoadUfCities={handleLoadUfCities}
            onSaveAdmin={handleSaveAdmin}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default UpdateReport;
