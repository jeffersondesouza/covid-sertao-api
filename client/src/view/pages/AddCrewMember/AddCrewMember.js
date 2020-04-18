import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

import { Context, useSelector } from 'store/createContext';
import { CrewMemberForm } from './components';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
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

  useEffect(() => {
    return () => {
      cleanUpUser();
    };
  }, [cleanUpUser]);

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3">Novo Membro</Typography>
        </Grid>
        <Grid item xs={12}>
          {saveSuccess && (
            <Alert severity="success">
              <AlertTitle>Sucesso</AlertTitle>
              Usuário adicionado com sucesso
            </Alert>
          )}
          {saveFail && (
            <Alert severity="error">
              <AlertTitle>Erro</AlertTitle>O usuário não pôde ser criado.
              Certifique-se que o email ou telefone nao estão em uso por outro
              membro da equipe
            </Alert>
          )}
        </Grid>
        <Grid item xs={12}>
          <CrewMemberForm
            city={user.city._id}
            uf={user.uf._id}
            isSavingUser={isSavingUser}
            saveSuccess={saveSuccess}
            onSaveMember={handleSaveMember}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default AddCrewMember;
