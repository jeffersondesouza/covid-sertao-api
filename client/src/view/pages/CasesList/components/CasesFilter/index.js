import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { FormControlLabel, Checkbox } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: { display: 'flex', margimTop: '21rem' },
}));

const CasesFilter = props => {
  const { className, onChangeFilters } = props;
  const [selectedStatus, setSelectedStatus] = useState([]);

  const classes = useStyles();

  const handleSelect = ({ target }) => {
    const { name, value, checked } = target;

    const actual = selectedStatus.filter(item => {
      return item !== value;
    });

    if (checked) {
      const newState = [...actual, value];
      setSelectedStatus(newState);
      onChangeFilters(newState);
    } else {
      setSelectedStatus(actual);
      onChangeFilters(actual);
    }
  };

  return (
    <div className={clsx(classes.root, className)}>
      <FormControlLabel
        control={<Checkbox color="primary" />}
        label="Confirmados"
        value={1}
        name="confirmed"
        onChange={handleSelect}
      />
      <FormControlLabel
        control={<Checkbox color="primary" />}
        label="Suspeitos"
        name="suspects"
        value={2}
        onChange={handleSelect}
      />
      <FormControlLabel
        control={<Checkbox color="primary" />}
        label="Descartados"
        name="negative"
        value={3}
        onChange={handleSelect}
      />
      <FormControlLabel
        control={<Checkbox color="primary" />}
        name="recovered"
        label="Recuperados"
        value={5}
        onChange={handleSelect}
      />
      <FormControlLabel
        control={<Checkbox color="primary" />}
        label="Óbitos"
        name="deaths"
        value={4}
        onChange={handleSelect}
      />
      <FormControlLabel
        control={<Checkbox color="primary" />}
        name="homeIsolation"
        label="Isolamento Domiciliar"
        value={6}
        onChange={handleSelect}
      />
    </div>
  );
};

export default CasesFilter;
