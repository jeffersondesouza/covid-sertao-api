import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardHeader,
  Button,
  Divider,
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import mockData from './data';
import { CasesList } from 'view/components';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 800,
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  status: {
    marginRight: theme.spacing(1),
  },
  actions: {
    justifyContent: 'flex-end',
  },
}));

const LatestCases = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [cases] = useState(mockData);

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader
        action={
          <Button color="primary" size="small" variant="outlined">
            Novo Caso
          </Button>
        }
        title="Últimos Casos"
      />
      <Divider />
      <CasesList cases={cases} />
      <Divider />
      <CardActions className={classes.actions}>
        <Link to="/cases">
          <Button color="primary" size="small" variant="text">
            Ver todos <ArrowRightIcon />
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

LatestCases.propTypes = {
  className: PropTypes.string,
};

export default LatestCases;
