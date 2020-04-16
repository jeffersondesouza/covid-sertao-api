import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography,
} from '@material-ui/core';
import { StatusBullet } from 'view/components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  chartContainer: {
    position: 'relative',
    height: '300px',
  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
  },
  device: {
    textAlign: 'center',
    padding: theme.spacing(1),
  },
  deviceIcon: {
    color: theme.palette.icon,
  },
  legends: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '1rem',
  },
  iconLegend: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: '5px',
    marginBottom: '10px',
    minWidth: '6rem',
  },
  iconLegendLabel: {
    flex: 1,
    marginLeft: '5px',
    textTransform: 'capitalize',
  },
}));

const UsersByDevice = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const theme = useTheme();

  const MOCK_DATA = [
    { id: 'confirmed', label: 'Confirmados', value: 5 },
    { id: 'suspect', label: 'Suspeitos', value: 10 },
    { id: 'cured', label: 'Recuperados', value: 15 },
    { id: 'death', label: 'óbtos', value: 20 },
    { id: 'negative', label: 'descartados', value: 25 },
  ];

  const data = {
    datasets: [
      {
        data: MOCK_DATA.map(item => item.value),
        backgroundColor: MOCK_DATA.map(item => theme.palette.cases[item.id]),
        borderWidth: 8,
        borderColor: theme.palette.white,
        hoverBorderColor: theme.palette.white,
      },
    ],
    labels: ['Confirmados', 'Suspeitos', 'Curados', 'Óbtos', 'Descartados'],
  };

  const options = {
    legend: {
      display: false,
    },
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      borderWidth: 1,
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.white,
      titleFontColor: theme.palette.text.primary,
      bodyFontColor: theme.palette.text.secondary,
      footerFontColor: theme.palette.text.secondary,
    },
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader title="Distribuição dos Casos" />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Doughnut data={data} options={options} />
        </div>

        <div className={classes.legends}>
          {MOCK_DATA.map(item => (
            <div className={classes.iconLegend}>
              <StatusBullet color={item.id} size="md" />
              <Typography variant="caption" className={classes.iconLegendLabel}>
                {item.label}
              </Typography>
            </div>
          ))}
          <div className={classes.iconLegend} />
        </div>
      </CardContent>
    </Card>
  );
};

UsersByDevice.propTypes = {
  className: PropTypes.string,
};

export default UsersByDevice;
