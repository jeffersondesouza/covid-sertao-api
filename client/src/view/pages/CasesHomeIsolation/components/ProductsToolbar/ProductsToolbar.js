import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button, Typography, Grid } from '@material-ui/core';

import { SearchInput } from 'view/components';
import CasesFilter from '../CasesFilter';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1),
  },
  row2: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  spacer: {
    flexGrow: 1,
  },
  importButton: {
    marginRight: theme.spacing(1),
  },
  exportButton: {
    marginRight: theme.spacing(1),
  },
  searchInput: {
    marginRight: theme.spacing(1),
  },
}));

const ProductsToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.row}>
        <Typography variant="h2">Isolamento Domiciliar</Typography>
        <span className={classes.spacer} />
        <Link to="/cases/new">
          <Button color="primary" variant="contained" className={classes.btn}>
            Nova Notificação
          </Button>
        </Link>
      </div>
      <Grid container className={classes.row2}>
        <Grid item xs={12} md={6}>
          <SearchInput
            className={classes.searchInput}
            placeholder="Buscar por nome"
          />
        </Grid>
      </Grid>
    </div>
  );
};

ProductsToolbar.propTypes = {
  className: PropTypes.string,
};

export default ProductsToolbar;
