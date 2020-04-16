import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button,
  Select,
} from '@material-ui/core';

import { data, options } from './chart';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
  },
  chartContainer: {
    height: 400,
    position: 'relative',
  },
  actions: {
    justifyContent: 'flex-end',
  },
  select: {
    borderBottom: 'none !important',
    textTransform: 'uppercase !important',
    fontWeight: '500',
  },
  option: {
    display: 'block',
    borderBottom: 'none !important',
    textTransform: 'uppercase !important',
  },
}));

const timesRanges = [
  { value: 1, label: 'Todos' },
  { value: 2, label: 'Última Semana' },
  { value: 3, label: 'Último mês' },
];

const LatestSales = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const [timeRange, setTimeRange] = useState(1);

  const handleChange = e => {
    setTimeRange(e.target.value);
    console.log('value:', e.target.value);
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader
        action={
          <Select
            className={classes.select}
            multiple={false}
            value={timeRange}
            onChange={handleChange}
          >
            {timesRanges.map(item => (
              <Button
                key={item.value}
                value={item.value}
                className={classes.option}
              >
                {item.label}
              </Button>
            ))}
          </Select>
        }
        title="Evolução dos casos"
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Bar data={data} options={options} />
        </div>
      </CardContent>
      {/*
      <Divider />
        <CardActions className={classes.actions}>
        <Button color="primary" size="small" variant="text">
          Overview <ArrowRightIcon />
        </Button>
      </CardActions> */}
    </Card>
  );
};

LatestSales.propTypes = {
  className: PropTypes.string,
};

export default LatestSales;
