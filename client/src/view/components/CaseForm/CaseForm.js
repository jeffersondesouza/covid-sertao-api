import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import locale from 'date-fns/locale/pt-BR';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  Button,
  TextField,
  FormControlLabel,
  Typography,
  Radio,
  Checkbox,
} from '@material-ui/core';
import FieldSetHeader from './FieldSetHeader';

const useStyles = makeStyles(() => ({
  root: {
    paddingLeft: '10px',
    paddingTop: '10px',
  },
  container: {
    margin: '0 auto',
  },
  fieldset: {
    marginBottom: '1.5rem',
  },
  fieldcaption: {
    marginBottom: '15px',
  },
  action: {
    marginTop: '1.5rem',
  },
  checkboxGroup: {
    display: 'flex',
    paddingLeft: '1.5rem',
  },
}));

const schema = {
  firstname: {
    presence: { allowEmpty: false, message: 'Informe o primeiro nome' },
  },
  lastname: {
    presence: { allowEmpty: false, message: 'Informe o primeiro nome' },
  },
  uf: {
    presence: { allowEmpty: false, message: 'Informe o primeiro nome' },
  },
  city: {
    presence: { allowEmpty: false, message: 'Informe o primeiro nome' },
  },
  role: {
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

const CaseForm = props => {
  const {
    title,
    subheader,
    className,
    city,
    uf,
    saveSuccess,
    isSavingUser,
    onSaveMember,
    ...rest
  } = props;

  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState();

  const [formState, setFormState] = useState({
    isValid: false,
    values: { uf, city, role: '2' },
    touched: {},
    errors: {},
  });

  useEffect(() => {
    if (saveSuccess) {
      setFormState({
        isValid: false,
        values: { uf, city, role: '2' },
        touched: {},
        errors: {},
      });
    }
  }, [saveSuccess]);

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleDateChange = date => {
    setSelectedDate(date);
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
      onSaveMember(formState.values);
    }
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form onSubmit={handleSave}>
        <CardHeader title={title} subheader={subheader} />
        <Divider />
        {/* DADOS DO PACIENTE */}
        <CardContent>
          <FieldSetHeader title="Dados do Paciente" />
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} spacing={2}>
              <TextField
                fullWidth
                label="Nome completo"
                name="name"
                onChange={handleChange}
                type="text"
                value={formState.values.name || ''}
                variant="outlined"
                margin="dense"
              />
            </Grid>
            <Grid item xs={12} md={6} spacing={2}>
              <MuiPickersUtilsProvider utils={DateFnsUtils} locale={locale}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Data de Nascimento"
                  format="dd/MM/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  variant="outlined"
                  margin="dense"
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="CPF"
                name="docId"
                onChange={handleChange}
                type="text"
                value={formState.values.docId || ''}
                variant="outlined"
                margin="dense"
              />
            </Grid>
            <Grid item xs={6} spacing={2} className={classes.checkboxGroup}>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Não possui"
                name="hasNoCPF"
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Número do SUS"
                name="docId"
                onChange={handleChange}
                type="text"
                value={formState.values.docId || ''}
                variant="outlined"
                margin="dense"
              />
            </Grid>
            <Grid item xs={6} spacing={2} className={classes.checkboxGroup}>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Não possui"
                name="hasNoSUS"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">É profissional da Saúde?</Typography>
              <FormControlLabel
                control={<Radio color="primary" />}
                label="Sim"
                name="healthyWorker"
                value="1"
                checked={formState.values.healthyWorker === '1'}
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Radio color="primary" />}
                label="Não"
                name="healthyWorker"
                value="2"
                checked={formState.values.healthyWorker === '2'}
                onChange={handleChange}
              />
            </Grid>

            {/* ############################## */}
            {/* ############################## */}
            {/* ############################## */}
            {/* ############################## */}
            {/* ############################## */}

            <Grid item xs={12}>
              <Typography variant="body1">Tipo</Typography>
            </Grid>
            <FormControlLabel
              control={<Radio color="primary" />}
              label="Confirmado"
              name="role"
              value="1"
              checked={formState.values.role === '1'}
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              label="Suspeito"
              name="role"
              value="2"
              checked={formState.values.role === '2'}
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              label="Descartado"
              name="role"
              value="3"
              checked={formState.values.role === '3'}
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              label="Negativo"
              name="role"
              value="4"
              checked={formState.values.role === '4'}
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              label="Óbito"
              name="role"
              value="5"
              checked={formState.values.role === '5'}
              onChange={handleChange}
            />
          </Grid>

          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                error={hasError('firstname')}
                fullWidth
                helperText={
                  hasError('firstname') ? 'Informe o nome do Usuário' : null
                }
                label="Nome"
                name="firstname"
                onChange={handleChange}
                type="text"
                value={formState.values.firstname || ''}
                variant="outlined"
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                error={hasError('lastname')}
                fullWidth
                label="Sobrenome"
                name="lastname"
                onChange={handleChange}
                type="text"
                value={formState.values.lastname || ''}
                variant="outlined"
                margin="dense"
                helperText={hasError('lastname') ? 'Informe o sobrenome' : null}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={1}>
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

            <Grid item xs={11} md={5}>
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
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                onChange={handleChange}
                type="text"
                value={formState.values.email || ''}
                variant="outlined"
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Lotado em"
                placeholder="ex: Hospital Central, Posto de Saúde etc "
                name="lotation"
                onChange={handleChange}
                type="text"
                value={formState.values.lotation || ''}
                variant="outlined"
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Função"
                name="job"
                onChange={handleChange}
                type="text"
                value={formState.values.job || ''}
                variant="outlined"
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>

          <Grid item className={classes.action}>
            <Button
              color="primary"
              type="submit"
              variant="contained"
              disabled={isSavingUser}
            >
              Salvar
            </Button>
          </Grid>
        </CardContent>
      </form>
    </Card>
  );
};

CaseForm.propTypes = {
  className: PropTypes.string,
  city: PropTypes.string,
  uf: PropTypes.string,
  isSavingUser: PropTypes.bool,
  title: PropTypes.string,
  subheader: PropTypes.string,
  saveSuccess: PropTypes.bool,
  onSaveMember: PropTypes.func,
};

export default CaseForm;
