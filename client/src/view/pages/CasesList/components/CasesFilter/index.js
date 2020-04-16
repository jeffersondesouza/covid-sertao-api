import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: { display: 'flex', margimTop: '21rem' },
}));

const CasesFilter = props => {
  const { className } = props;

  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <FormControlLabel
        control={<Checkbox color="primary" />}
        label="Confirmados"
      />
      <FormControlLabel
        control={<Checkbox color="primary" />}
        label="Suspeitos"
      />
      <FormControlLabel
        control={<Checkbox color="primary" />}
        label="Descartados"
      />
      <FormControlLabel
        control={<Checkbox color="primary" />}
        label="Recuperados"
      />
      <FormControlLabel control={<Checkbox color="primary" />} label="Óbitos" />
    </div>
  );
};

export default CasesFilter;
