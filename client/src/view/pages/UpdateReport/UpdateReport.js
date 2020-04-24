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

const selectLoading = state =>
  state.location.isLoadingUfs ||
  state.location.isLoadingCities ||
  state.reports.isLoadingReports;

const UpdateReport = () => {
  const classes = useStyles();

  const {
    loadUfs,
    cleanUpUser,
    loadCities,
    saveUser,
    loadCases,
    loadReports,
  } = useContext(Context);

  const loading = useSelector(selectLoading);
  const user = useSelector(state => state.auth.currentUser);
  const ufs = useSelector(state => state.location.ufs);
  const cities = useSelector(state => state.location.cities);
  const saveSuccess = useSelector(state => state.user.saveUserSuccess);
  const saveFail = useSelector(state => state.user.saveUserFail);

  const countryReport = useSelector(state => state.reports.country || {});
  const ufReport = useSelector(state => state.reports.uf || {});
  const cityReport = useSelector(state => state.reports.city || {});
  console.log('cityReport:', cityReport);

  useEffect(() => {
    loadUfs();
    loadCases();
    loadReports();
    return () => {
      cleanUpUser();
    };
  }, []);

  const handleLoadUfCities = uf => loadCities(uf);

  const handleSaveAdmin = user => saveUser({ ...user, role: 1 });

  const handleUpdateReport = values => {
    console.log('values:', values);
  };

  const handleUpdateNotChanges = id => {
    console.log('id:', id);
  };

  const handleLoadUfReport = payload => {
    loadReports(payload);
  };

  if (!user.isSuperUser && !user.isAdmin) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3">Atualizar Boletim</Typography>
        </Grid>
        <Messages saveSuccess={saveSuccess} saveFail={saveFail} />

        <Grid item xs={12}>
          <UpdateCountryReport
            updateCity
            updateUf={false}
            isSuperUser={user.isSuperUser}
            title={ufReport.name}
            ufs={ufs}
            cities={cities}
            loading={loading}
            report={cityReport}
            localeId={cityReport.id}
            onLoadUfCities={handleLoadUfCities}
            onUpdateReport={handleUpdateReport}
            onLoadUfCities={handleLoadUfCities}
            onLoadUfReport={handleLoadUfReport}
            onUpdateNotChanges={handleUpdateNotChanges}
          />
          {user.isSuperUser && (
            <UpdateCountryReport
              title={ufReport.name}
              updateUf
              isSuperUser={user.isSuperUser}
              ufs={ufs}
              loading={loading}
              report={ufReport}
              localeId={ufReport.id}
              onLoadUfCities={handleLoadUfCities}
              onUpdateReport={handleUpdateReport}
              onLoadUfCities={handleLoadUfCities}
              onLoadUfReport={handleLoadUfReport}
              onUpdateNotChanges={handleUpdateNotChanges}
            />
          )}
          {user.isSuperUser && (
            <UpdateCountryReport
              loading={loading}
              report={countryReport}
              localeId={countryReport.id}
              onUpdateReport={handleUpdateReport}
              onUpdateNotChanges={handleUpdateNotChanges}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default UpdateReport;
