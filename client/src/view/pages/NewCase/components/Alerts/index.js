import React from 'react';
import PropTypes from 'prop-types';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Grid } from '@material-ui/core';

const Alerts = ({ success, fail }) => {
  if (!success || !fail) {
    return null;
  }

  return (
    <>
      {success && (
        <Grid item xs={12}>
          <Alert severity="success">
            <AlertTitle>Sucesso</AlertTitle>
            Usuário adicionado com sucesso
          </Alert>
        </Grid>
      )}
      {fail && (
        <Grid item xs={12}>
          <Alert severity="error">
            <AlertTitle>Erro</AlertTitle>O usuário não pôde ser criado.
            Certifique-se que o email ou telefone nao estão em uso por outro
            membro da equipe
          </Alert>
        </Grid>
      )}
    </>
  );
};

Alerts.propTypes = {
  fail: PropTypes.bool,
  success: PropTypes.bool,
};

export default Alerts;
