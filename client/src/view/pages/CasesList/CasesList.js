import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { CasesList } from 'view/components';
import { ProductsToolbar } from './components';
import { Context, useSelector } from 'store/createContext';

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

const CasesListPage = () => {
  const classes = useStyles();

  const [cases, setCases] = useState([]);

  const { loadCases } = useContext(Context);

  const caseNotifications = useSelector(state => state.cases.caseNotifications);

  useEffect(() => {
    loadCases();
  }, []);

  useEffect(() => {
    setCases(caseNotifications);
  }, [caseNotifications]);


  return (
    <div className={classes.root}>
      <ProductsToolbar />
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

export default CasesListPage;
