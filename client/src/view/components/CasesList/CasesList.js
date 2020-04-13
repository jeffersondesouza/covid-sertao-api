import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
  TableSortLabel,
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { StatusBullet } from 'view/components';
import TableHeader from './TableHeader';

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

const statusColors = {
  delivered: 'success',
  pending: 'info',
  refunded: 'danger',
  1: 'confirmed',
  2: 'suspect',
  3: 'cured',
  4: 'death',
  5: 'negative',
};

const CasesList = props => {
  const { cases, className, ...rest } = props;

  const classes = useStyles();

  return (
    <CardContent className={classes.content}>
      <PerfectScrollbar>
        <div className={classes.inner}>
          <Table>
            <TableHeader />
            <TableBody>
              {cases.map(item => (
                <TableRow hover key={item.id}>
                  {/* <TableCell>{item.ref}</TableCell> */}
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    <div className={classes.statusContainer}>
                      <StatusBullet
                        className={classes.status}
                        color={statusColors[item.status]}
                        size="sm"
                      />
                    </div>
                  </TableCell>
                  <TableCell>{item.contact}</TableCell>
                  <TableCell>
                    {item.createdAt}
                  </TableCell>
                  <TableCell>
                    {item.updateAt}
                  </TableCell>
                  <TableCell>{item.monitoringDays}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </PerfectScrollbar>
    </CardContent>
  );
};

CasesList.propTypes = {
  className: PropTypes.string,
};

export default CasesList;
