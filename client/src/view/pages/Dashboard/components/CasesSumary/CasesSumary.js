import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

import { StatusBullet } from 'view/components';

const statusColors = {
  confirmed: 'danger',
  suspect: 'suspect',
  negative: 'info',
  cured: 'success',
  death: 'black',

  delivered: 'success',
  pending: 'info',
  refunded: 'danger',
  neutral: 'neutral',
  primary: 'primary',
  info: 'info',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  black: 'black',
};

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  content: {
    alignItems: 'center',
    display: 'flex',
  },
  card: {
    paddingBottom: '10px !important',
  },
  title: {
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  subtitle: {
    marginBottom: '10px',
  },
  avatar: {
    backgroundColor: theme.palette.error.main,
    height: 56,
    width: 56,
  },
  icon: {
    height: 32,
    width: 32,
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
  },
  differenceIcon: {
    color: theme.palette.error.dark,
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1),
  },
  caption: {
    marginTop: '10px',
  },
}));

const CasesSumary = props => {
  const { value, title, color = 'neutral', className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.card}>
        <Grid container justify="space-between">
          <Grid item lg={3} sm={6} xl={3} xs={10}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              {title}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <StatusBullet color={statusColors[color]} size="md" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3" className={classes.subtitle}>
              {value || 0}
            </Typography>
          </Grid>
          {/*           <Grid item xs={12}>
            <Typography className={classes.caption} variant="caption">
              Atualizado em 12/04/21
            </Typography>
          </Grid> */}
        </Grid>
      </CardContent>
    </Card>
  );
};

CasesSumary.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
};

export default CasesSumary;
