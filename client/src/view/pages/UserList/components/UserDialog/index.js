import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Dialog,
  DialogTitle,
  Grid,
  Typography,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  userName: {
    textTransform: 'capitalize',
  },
  body: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  footer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: '0 2rem 0 2rem',
  },
  delete: {
    color: theme.palette.white,
    backgroundColor: theme.palette.error.main,
    borderColor: theme.palette.error.main,
  },
}));

const UserDialog = ({ open, user, onClose, onConfirmDelete }) => {
  const classes = useStyles();

  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">
        Tem certeza que deseja deletar o usuário?
      </DialogTitle>

      {!!user && (
        <Grid container justify="center" className={classes.body}>
          <Grid item>
            <Typography variant="body1" className={classes.userName}>
              {user.name}
            </Typography>
          </Grid>
        </Grid>
      )}
      <Grid container justify="space-between" className={classes.footer}>
        <Button variant="outlined" onClick={onClose}>
          Cancelar
        </Button>
        <Button
          variant="outlined"
          className={classes.delete}
          onClick={onConfirmDelete}
        >
          Deletar
        </Button>
      </Grid>
    </Dialog>
  );
};

export default UserDialog;
