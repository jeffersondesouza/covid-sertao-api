import React, { useEffect, useContext, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import { ProductsToolbar } from './components';
import { Context, useSelector } from 'store/createContext';

import {
  CasesSumary,
  TotalUsers,
  TasksProgress,
  TotalProfit,
  LatestSales,
  UsersByDevice,
  LatestProducts,
  LatestCases,
  ProfileWelcome,
} from './components';
import selectCurrentUser from 'store/selectors/selectCurrentUser';
import { Maybe } from 'helpers/functors';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  },
  noPadding: {
    paddingBottom: '0 !important',
  },
  editCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const setCasesReport = location => {
  return Maybe.of(location)
    .map(loc => loc.report)
    .get({
      confirmed: 0,
      suspects: 0,
      negative: 0,
      cured: 0,
      deaths: 0,
    });
};

const Dashboard = () => {
  const classes = useStyles();
  const { loadCases, loadReports } = useContext(Context);
  const [caseReport, setReport] = useState(setCasesReport());

  const lastCases = useSelector(state => state.cases.lastCasesNotifications);
  const city = useSelector(state => state.reports.city);
  const uf = useSelector(state => state.reports.uf);
  const country = useSelector(state => state.reports.country);
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    loadCases();
    loadReports();
  }, []);

  useEffect(() => {
    if (!city || !uf || !country || !user) {
      return;
    }

    if (user.isSuperUser) {
      setReport(setCasesReport(country));
    } else {
      setReport(setCasesReport(city));
    }
  }, [city, uf, country, user]);

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} className={classes.noPadding}>
          <ProfileWelcome city={city} isSuperUser={user.isSuperUser} />
        </Grid>
        <Grid item lg={2} sm={6} xl={3} xs={12}>
          <CasesSumary
            value={caseReport.confirmed}
            title="Confirmados"
            color="confirmed"
          />
        </Grid>
        <Grid item lg={2} sm={6} xl={3} xs={12}>
          <CasesSumary
            value={caseReport.suspects}
            title="Suspeitos"
            color="suspect"
          />
        </Grid>
        <Grid item lg={2} sm={6} xl={3} xs={12}>
          <CasesSumary
            value={caseReport.negative}
            title="Descartados"
            color="negative"
          />
        </Grid>
        <Grid item lg={2} sm={6} xl={3} xs={12}>
          <CasesSumary
            value={caseReport.cured}
            title="Recuperados"
            color="cured"
          />
        </Grid>
        <Grid item lg={2} sm={6} xl={3} xs={12}>
          <CasesSumary value={caseReport.deaths} title="Óbitos" color="death" />
        </Grid>
        {user.isAdmin ||
          (user.isSuperUser && (
            <Grid
              item
              lg={2}
              sm={6}
              xl={3}
              xs={12}
              className={classes.editCard}
            >
              <NavLink to="/atualizar-boletim">
                <Button
                  color="primary"
                  size="small"
                  variant="outlined"
                  className={classes.update}
                >
                  Editar
                </Button>
              </NavLink>
            </Grid>
          ))}
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <LatestSales />
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <UsersByDevice />
        </Grid>
        <Grid item xs={12}>
          <LatestCases cases={lastCases} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
