import React from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Delete, Edit } from '@material-ui/icons';
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableRow,
  IconButton,
  Typography,
  Grid,
} from '@material-ui/core';

import { StatusBullet } from 'view/components';
import TableHeader from './TableHeader';
import moment from 'moment';

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
    justifyContent: 'center',
  },
  status: {
    marginRight: theme.spacing(1),
  },
  actions: {
    justifyContent: 'flex-end',
  },
  btnAction: {
    position: 'relative',
  },
  btnDanger: {
    color: theme.palette.error.light,
  },
  smallLabel: {
    fontSize: '10px',
    marginTop: '-10px',
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
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHeader />
              <TableBody>
                {cases.map(item => (
                  <TableRow hover key={item.id}>
                    {/* <TableCell>{item.ref}</TableCell> */}
                    <TableCell>{item.fullname}</TableCell>
                    <TableCell align="center">
                      <div className={classes.statusContainer}>
                        <StatusBullet
                          className={classes.status}
                          color={statusColors[item.covidStatus]}
                          size="sm"
                        />
                      </div>
                    </TableCell>
                    <TableCell>{item.situation}</TableCell>
                    <TableCell>
                      ({item.phoneCod})&nbsp;{item.phoneNumber}
                    </TableCell>
                    <TableCell>
                      {item.registeredAt}
                    </TableCell>
                    <TableCell>{item.updatedAt}</TableCell>
                    <TableCell align="center">{item.monitoringDays}</TableCell>
                    <TableCell align="center">
                      <Grid container>
                        <div className={classes.btnAction}>
                          <IconButton>
                            <Edit />
                          </IconButton>
                          <Typography className={classes.smallLabel}>
                            Editar
                          </Typography>
                        </div>
                      </Grid>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

CasesList.propTypes = {
  className: PropTypes.string,
  cases: PropTypes.array,
};

export default CasesList;
