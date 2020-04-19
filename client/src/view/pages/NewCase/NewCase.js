import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

import { CaseForm } from 'view/components';
import { Context, useSelector } from 'store/createContext';
import { Alerts } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}));

const AddCrewMember = () => {
  const classes = useStyles();

  const { saveUser, cleanUpUser } = useContext(Context);
  const auth = useSelector(state => state.auth);
  const user = useSelector(state => state.auth.currentUser);
  const saveSuccess = useSelector(state => state.user.saveUserSuccess);
  const saveFail = useSelector(state => state.user.saveUserFail);
  const isSavingUser = useSelector(state => state.user.isSavingUser);

  const handleSaveMember = user => {
    saveUser(user);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3">Novo Caso</Typography>
        </Grid>
        <Alerts success={saveSuccess} fail={saveFail} />
        <Grid item xs={12}>
          <CaseForm
            title="Registar Caso ou Suspeito"
            subheader="Após slavar, o boletim de sua cidade será automaticamente atualiza"
            city={user.city._id}
            uf={user.uf._id}
            isSavingUser={isSavingUser}
            saveSuccess={saveSuccess}
            onSave={handleSaveMember}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default AddCrewMember;
