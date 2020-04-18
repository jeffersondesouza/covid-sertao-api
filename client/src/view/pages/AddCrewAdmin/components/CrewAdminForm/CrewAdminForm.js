import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  Button,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  select: {
    textTransform: 'capitalize',
    option: {
      textTransform: 'capitalize',
    },
  },
  action: {
    marginTop: '1.5rem',
  },
}));

const schema = {
  firstName: {
    presence: { allowEmpty: false, message: 'Informe o primeiro nome' },
  },
  lastName: {
    presence: { allowEmpty: false, message: 'Informe o primeiro nome' },
  },
  uf: {
    presence: { allowEmpty: false, message: 'Informe o primeiro nome' },
  },
  city: {
    presence: { allowEmpty: false, message: 'Informe o primeiro nome' },
  },
  email: {
    presence: { allowEmpty: false, message: 'Informe o primeiro nome' },
  },
  phone: {
    presence: { allowEmpty: false, message: 'Informe o primeiro nome' },
    length: {
      minimum: 8,
      maximum: 9,
    },
  },
  cod: {
    presence: { allowEmpty: false, message: 'Informe o primeiro nome' },
    length: {
      minimum: 2,
      maximum: 2,
    },
  },
};

const CrewAdminForm = props => {
  const {
    ufs = [],
    cities = [],
    loading,
    className,
    onSaveAdmin,
    onLoadUfCities,
    ...rest
  } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {
      firstName: 'firstName',
      lastName: 'lastName',
      lotation: 'lotation',
      job: 'job',
      cod: 'cod',
      phone: 'phone',
      email: 'email',
    },
    touched: {},
    errors: {},
  });

  useEffect(() => {
    if (!ufs.length) {
      return;
    }

    const uf = ufs[0]._id;

    onLoadUfCities(uf);

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        uf,
      },
      touched: {
        ...formState.touched,
        uf: true,
      },
    }));
  }, [ufs]);

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChangeUf = event => {
    const uf = event.target.value;
    onLoadUfCities(uf);

    handleChange(event);
  };

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const handleSave = event => {
    event.preventDefault();
    console.log('formState:', formState);

    if (formState.isValid) {
      onSaveAdmin(formState.values);
    }
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form onSubmit={handleSave}>
        <CardHeader
          title="Administrador de Equipe"
          subheader="Este membro fará parte da secretaria de saúde indicada"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Selecione o Estado"
                name="uf"
                onChange={handleChangeUf}
                type="text"
                value={formState.values.uf}
                variant="outlined"
                margin="dense"
                helperText={hasError('uf') ? 'Informe o Estado' : null}
                error={hasError('uf')}
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                className={classes.select}
              >
                <>
                  <option>Selecione seu Estado</option>
                  {[...ufs].map(option => (
                    <option key={option._id} value={option._id}>
                      {option.name.toUpperCase()}
                    </option>
                  ))}
                </>
              </TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Selecione a Cidade"
                name="city"
                onChange={handleChange}
                type="text"
                value={formState.values.city}
                variant="outlined"
                margin="dense"
                helperText={hasError('city') ? 'Informe a Cidade' : null}
                error={hasError('city')}
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
              >
                <>
                  <option>Selecione sua Cidade</option>
                  {cities.map(option => (
                    <option key={option._id} value={option._id}>
                      {option.name.toUpperCase()}
                    </option>
                  ))}
                </>
              </TextField>
            </Grid>
          </Grid>
          {/* NAME */}
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                error={hasError('firstName')}
                fullWidth
                helperText={
                  hasError('firstName') ? 'Informe o nome do Usuário' : null
                }
                label="Nome"
                name="firstName"
                onChange={handleChange}
                type="text"
                value={formState.values.firstName || ''}
                variant="outlined"
                margin="dense"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                error={hasError('lastName')}
                fullWidth
                label="Sobrenome"
                name="lastName"
                onChange={handleChange}
                type="text"
                value={formState.values.lastName || ''}
                variant="outlined"
                margin="dense"
                helperText={hasError('lastName') ? 'Informe o sobrenome' : null}
              />
            </Grid>
          </Grid>

          {/* FUNCTION */}
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Lotado em"
                name="lotation"
                onChange={handleChange}
                type="text"
                value={formState.values.lotation || ''}
                variant="outlined"
                margin="dense"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Cargo"
                name="job"
                onChange={handleChange}
                type="text"
                value={formState.values.job || ''}
                variant="outlined"
                margin="dense"
              />
            </Grid>
          </Grid>

          {/* CONTACT */}
          <Grid container spacing={3}>
            <Grid item md={2} xs={2}>
              <TextField
                error={hasError('cod')}
                fullWidth
                label="DDD"
                placeholder="88"
                name="cod"
                onChange={handleChange}
                type="text"
                value={formState.values.cod || ''}
                variant="outlined"
                margin="dense"
                helperText={
                  hasError('cod')
                    ? 'Informe um DDD com dois número ex: 87'
                    : null
                }
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                error={hasError('phone')}
                fullWidth
                label="Telefone"
                placeholder="98888-8888"
                name="phone"
                onChange={handleChange}
                type="text"
                value={formState.values.phone || ''}
                variant="outlined"
                margin="dense"
                helperText={
                  hasError('phone') ? 'Informe o telefone do usuário' : null
                }
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                error={hasError('email')}
                fullWidth
                helperText={hasError('email') ? 'Informe o email' : null}
                label="Email"
                name="email"
                onChange={handleChange}
                type="text"
                value={formState.values.email || ''}
                variant="outlined"
                margin="dense"
              />
            </Grid>
          </Grid>

          <Grid item className={classes.action}>
            <Button
              color="primary"
              type="submit"
              variant="contained"
              disabled={loading}
            >
              Salvar
            </Button>
          </Grid>
        </CardContent>
      </form>
    </Card>
  );
};

CrewAdminForm.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool,
  onSaveAdmin: PropTypes.func,
};

export default CrewAdminForm;
