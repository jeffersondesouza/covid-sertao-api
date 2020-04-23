import React from 'react';
import { Grid } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

const Messages = ({ saveSuccess, saveFail }) => {
  return (
    <>
      {saveSuccess && (
        <Grid container>
          <Grid item xs={12}>
            <Alert severity="success">
              <AlertTitle>Sucesso</AlertTitle>
              Boletim atualizado com Sucesso
            </Alert>
          </Grid>
        </Grid>
      )}
      {saveFail && (
        <Grid container>
          <Grid item xs={12}>
            <Alert severity="error">
              <AlertTitle>Erro</AlertTitle> O Boletim não pôde ser atualizado
            </Alert>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Messages;
