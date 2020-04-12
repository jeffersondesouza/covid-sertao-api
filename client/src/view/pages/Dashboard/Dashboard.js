import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  CasesSumary,
  TotalUsers,
  TasksProgress,
  TotalProfit,
  LatestSales,
  UsersByDevice,
  LatestProducts,
  LatestOrders,
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={2} sm={6} xl={3} xs={12}>
          <CasesSumary title="Confirmados" color="danger" />
        </Grid>
        <Grid item lg={2} sm={6} xl={3} xs={12}>
          <CasesSumary title="Suspeitos" color="warning" />
        </Grid>
        <Grid item lg={2} sm={6} xl={3} xs={12}>
          <CasesSumary title="Descartados" color="info"/>
        </Grid>
        <Grid item lg={2} sm={6} xl={3} xs={12}>
          <CasesSumary title="Recuperados" color="success" />
        </Grid>
        <Grid item lg={2} sm={6} xl={3} xs={12}>
          <CasesSumary title="Óbtos" color="black" />
        </Grid>
        <Grid item lg={2} sm={6} xl={3} xs={12}>
          <CasesSumary title="Isolamentos"  />
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <LatestSales />
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <UsersByDevice />
        </Grid>
        <Grid item xs={12}>
          <LatestOrders />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
