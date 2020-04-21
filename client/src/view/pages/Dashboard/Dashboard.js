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

const Dashboard = () => {
  const classes = useStyles();
  const { loadCases } = useContext(Context);

  const lastCases = useSelector(state => state.cases.lastCasesNotifications);

  useEffect(() => {
    loadCases();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} className={classes.noPadding}>
          <ProfileWelcome />
        </Grid>
        <Grid item lg={2} sm={6} xl={3} xs={12}>
          <CasesSumary title="Confirmados" color="confirmed" />
        </Grid>
        <Grid item lg={2} sm={6} xl={3} xs={12}>
          <CasesSumary title="Suspeitos" color="suspect" />
        </Grid>
        <Grid item lg={2} sm={6} xl={3} xs={12}>
          <CasesSumary title="Descartados" color="negative" />
        </Grid>
        <Grid item lg={2} sm={6} xl={3} xs={12}>
          <CasesSumary title="Recuperados" color="cured" />
        </Grid>
        <Grid item lg={2} sm={6} xl={3} xs={12}>
          <CasesSumary title="Óbitos" color="death" />
        </Grid>
        <Grid item lg={2} sm={6} xl={3} xs={12} className={classes.editCard}>
          <NavLink to="/members/add">
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
        {/*  <Grid item lg={8} md={12} xl={9} xs={12}>
          <LatestSales />
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <UsersByDevice />
        </Grid> */}
        <Grid item xs={12}>
          <LatestCases cases={lastCases} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
