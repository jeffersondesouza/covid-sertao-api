import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  Grid,
  CircularProgress,
  // TablePagination,
  // CardActions,
} from '@material-ui/core';

import { getInitials } from 'helpers';
import { Edit, Delete } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 1050,
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    textTransform: 'capitalize',
  },
  avatar: {
    marginRight: theme.spacing(2),
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
  alert: {
    marginTop: '3rem',
    textAlign: 'center',
  },
}));

const UsersTable = props => {
  const {
    className,
    users,
    isLoading,
    onSelectEdit,
    onSelectDelete,
    ...rest
  } = props;

  const classes = useStyles();

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  if (isLoading) {
    return (
      <div className={classes.alert}>
        <CircularProgress />
      </div>
    );
  }

  if (!users.length) {
    return (
      <Typography variant="body1" className={classes.alert}>
        Sem Usuários Cadastrados
      </Typography>
    );
  }

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Membro</TableCell>
                  <TableCell>Telefone</TableCell>
                  <TableCell>Lotação</TableCell>
                  <TableCell>Cargo</TableCell>
                  <TableCell>Acesso</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {users.slice(0, rowsPerPage).map(user => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={user.id}
                    selected={selectedUsers.indexOf(user.id) !== -1}
                  >
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Avatar
                          className={classes.avatar}
                          src={user.avatarUrl}
                          style={{ backgroundColor: '#3b5c66' }}
                        >
                          {getInitials(user.name)}
                        </Avatar>
                        <Typography variant="body1" className={classes.name}>
                          {user.name}
                        </Typography>
                      </div>
                    </TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.lotation}</TableCell>
                    <TableCell>{user.job}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell align="center">
                      <Grid container>
                        <div className={classes.btnAction}>
                          <IconButton
                            className={classes.btnDanger}
                            onClick={onSelectDelete(user.id)}
                          >
                            <Delete />
                          </IconButton>
                          <Typography className={classes.smallLabel}>
                            Remover
                          </Typography>
                        </div>
                        <div className={classes.btnAction}>
                          <IconButton onClick={onSelectEdit(user.id)}>
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
      {/*  <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={users.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions> */}
    </Card>
  );
};

UsersTable.propTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  users: PropTypes.array.isRequired,
};

export default UsersTable;
