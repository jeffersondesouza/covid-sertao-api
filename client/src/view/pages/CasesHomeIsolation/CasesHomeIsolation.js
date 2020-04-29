import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { CasesList } from 'view/components';
import { ProductsToolbar } from './components';
import { Context, useSelector } from 'store/createContext';
import { Maybe } from 'helpers/functors';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(2),
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
}));

const CasesHomeIsolation = () => {
  const classes = useStyles();

  const caseNotifications = useSelector(
    state => state.cases.lastCasesNotifications
  );

  const [cases, setCases] = useState([]);

  const { loadCases } = useContext(Context);

  useEffect(() => {
    loadCases();
  }, []);

  useEffect(() => {
    const isolations = Maybe.of(caseNotifications)
      .get([])
      .filter(item => item.covidStatus === '6');

    console.log('isolations:', isolations);
    setCases(isolations);
  }, [caseNotifications]);

  const handleFilter = filter => {
    const isolations = Maybe.of(caseNotifications)
      .get([])
      .filter(
        item =>
          item.covidStatus === '6' &&
          item.fullname.toLowerCase().includes(filter.toLowerCase())
      );

    setCases(isolations);
  };

  return (
    <div className={classes.root}>
      <ProductsToolbar onFilter={handleFilter} />
      <div className={classes.content}>
        <CasesList cases={cases} />
      </div>
      <div className={classes.pagination}>
        <Typography variant="caption">1-6 of 20</Typography>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default CasesHomeIsolation;
