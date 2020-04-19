import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: '10px',
  },
}));

const FieldSetHeader = ({ title }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root)}>
      <Typography variant="subtitle2">{title}</Typography>
      <Divider />
    </div>
  );
};

FieldSetHeader.propTypes = {
  title: PropTypes.string,
};

export default FieldSetHeader;
