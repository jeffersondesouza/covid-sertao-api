import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Button,
  Grid,
  IconButton,
  Hidden,
} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles(theme => ({
  root: {
    borderBottom: '1px solid rgba(38, 50, 56, 0.1)',
    padding: '0 0 10px 0',
  },
  update: {
    marginRight: '20px',
  },
}));

const ProfileWelcome = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="space-between"
      alignItems="flex-end"
      spacing={0}
      className={classes.root}
    >
      <Grid item>
        <Typography variant="caption">
          Última autalização 10/04/2021 18:30h
        </Typography>
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
