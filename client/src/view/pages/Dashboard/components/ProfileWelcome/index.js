import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Button,
  Grid,
  IconButton,
  Hidden,
} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
  root: {
    borderBottom: '1px solid rgba(38, 50, 56, 0.1)',
    padding: '0 0 10px 0',
  },
  update: {
    marginRight: '20px',
  },
}));

const ProfileWelcome = ({ city, isSuperUser }) => {
  const [updateAt, setUpdateAt] = useState();

  const classes = useStyles();

  useEffect(() => {
    if (city && city.updateAt) {
      setUpdateAt(moment().format('DD/MM/YYYY [18]:[00][h]'));
    } else {
      setUpdateAt(
        moment()
          .add(-1, 'day')
          .format('DD/MM/YYYY [18]:[00][h]')
      );
    }
  }, [city]);

  return (
    <Grid
      container
      justify="space-between"
      alignItems="flex-end"
      spacing={0}
      className={classes.root}
    >
      <Grid item xs={12}>
        {isSuperUser ? (
          <Typography variant="h3">Brasil</Typography>
        ) : (
          <Typography variant="h3">{city ? city.name : ''}</Typography>
        )}
      </Grid>
      <Grid item>
        {city && (
          <Typography variant="caption">
            Última autalização {updateAt}
          </Typography>
        )}
      </Grid>
      <Grid item>
        <IconButton size="small">
          <RefreshIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ProfileWelcome;
