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
  formGroup: {
    marginBottom: '1rem',
  },
  fieldsetSmall: {
    marginBottom: '1rem',
  },
  fieldset: {
    marginBottom: '2rem',
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
  nospacing: {
    background: 'pink',
    marginBottom: 0,
  },
}));

const schema = {};

const CaseForm = props => {
  const {
    title,
    subheader,
    className,
    city,
    uf,
    saveSuccess,
    isSavingUser,
    onSaveCase,
    ...rest
  } = props;

  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState();

  const [formState, setFormState] = useState({
    isValid: false,
    values: { uf, city, risckFactor: [], symptoms: [], birthday: null, ...MOCK },
    touched: {},
    errors: {},
  });

  useEffect(() => {
    if (saveSuccess) {
      setFormState({
        isValid: false,
        values: { uf, city, risckFactor: [], symptoms: [] },
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

  const handleDateChange = name => date => {
    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [name]: date,
      },
      touched: {
        ...formState.touched,
        [name]: true,
      },
    }));
  };

  const handleChangeAdd = event => {
    event.persist();

    setFormState(formState => {
      const name = event.target.name;
      const value = event.target.value;
      const checked = event.target.checked;

      let values = formState.values[name].filter(item => item !== value);

      return {
        ...formState,
        values: {
          ...formState.values,
          [name]: checked ? [...values, value] : values,
        },
        touched: {
          ...formState.touched,
          [name]: true,
        },
      };
    });
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
    console.log(JSON.stringify(formState.values));
    if (formState.isValid) {
      onSaveCase(formState.values);
    }
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form onSubmit={handleSave}>
        <CardHeader title={title} subheader={subheader} />
        <Divider />
        <CardContent>
          {/* DADOS DO PACIENTE */}
          <FieldSetHeader title="Dados do Paciente" />
          <Grid container spacing={2} className={classes.fieldsetSmall}>
            <Grid item xs={12} md={6} spacing={2}>
              <TextField
                fullWidth
                label="Nome completo"
                name="fullname"
                onChange={handleChange}
                type="text"
                value={formState.values.fullname || ''}
                variant="outlined"
                margin="dense"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils} locale={locale}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Data de Nascimento"
                  format="dd/MM/yyyy"
                  value={formState.values.birthday}
                  name="birthday"
                  onChange={handleDateChange('birthday')}
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
                disabled={formState.values.noCPF}
              />
            </Grid>
            <Grid item xs={6} className={classes.checkboxGroup}>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Não possui"
                name="noCPF"
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Número do SUS"
                name="sus"
                onChange={handleChange}
                type="text"
                value={formState.values.sus || ''}
                variant="outlined"
                margin="dense"
                disabled={formState.values.noSUS}
              />
            </Grid>
            <Grid item xs={6} spacing={2} className={classes.checkboxGroup}>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Não possui"
                name="noSUS"
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
                value="0"
                checked={formState.values.healthyWorker === '0'}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          {/* CONTATOS  */}
          <FieldSetHeader title="Contatos" />
          <Grid container className={classes.fieldset}>
            <Grid container spacing={1}>
              <Grid item xs={1}>
                <TextField
                  error={hasError('phoneCod')}
                  fullWidth
                  label="DDD"
                  placeholder="88"
                  name="phoneCod"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.phoneCod || ''}
                  variant="outlined"
                  margin="dense"
                  helperText={
                    hasError('phoneCod')
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
                  error={hasError('phoneNumber')}
                  fullWidth
                  label="Telefone"
                  placeholder="98888-8888"
                  name="phoneNumber"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.phoneNumber || ''}
                  variant="outlined"
                  margin="dense"
                  helperText={
                    hasError('phoneNumber')
                      ? 'Informe o telefone do usuário'
                      : null
                  }
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} md={5}>
                <TextField
                  fullWidth
                  label="Rua"
                  name="street"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.street || ''}
                  variant="outlined"
                  margin="dense"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item md={1}>
                <TextField
                  fullWidth
                  label="Número"
                  name="houseNumber"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.houseNumber || ''}
                  variant="outlined"
                  margin="dense"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Bairro"
                name="neighborhood"
                onChange={handleChange}
                type="text"
                value={formState.values.neighborhood || ''}
                variant="outlined"
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>

          {/* AVALIAÇÃO  */}
          <FieldSetHeader title="Avaliação premilimar com relação ao COVID" />
          <Grid container className={classes.fieldset}>
            <Grid container>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label="Confirmado"
                  name="covidStatus"
                  value="1"
                  checked={formState.values.covidStatus === '1'}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label="Suspeito"
                  name="covidStatus"
                  value="2"
                  checked={formState.values.covidStatus === '2'}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label="Negativo/Descartado"
                  name="covidStatus"
                  value="3"
                  checked={formState.values.covidStatus === '3'}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label="Curado"
                  name="covidStatus"
                  value="5"
                  checked={formState.values.covidStatus === '5'}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label="Óbito"
                  name="covidStatus"
                  value="4"
                  checked={formState.values.covidStatus === '4'}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label="Isolamento por Precaução"
                  name="covidStatus"
                  value="6"
                  checked={formState.values.covidStatus === '6'}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Dados Clínicos e Epidemiológicos  */}
          <FieldSetHeader title="Dados Clínicos e Epidemiológicos" />
          <Grid container className={classes.fieldset}>
            <Grid container className={classes.formGroup}>
              <Grid item xs={12}>
                <Typography variant="body2">
                  Histórico de viagem para cidade com confirmação de casos nos
                  último 14 dias?
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label="Sim"
                  name="travelFromFocus"
                  value="1"
                  checked={formState.values.travelFromFocus === '1'}
                  onChange={handleChange}
                />
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label="Não"
                  name="travelFromFocus"
                  value="0"
                  checked={formState.values.travelFromFocus === '0'}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Nome da Cidade"
                  name="focusTravelCity"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.focusTravelCity || ''}
                  variant="outlined"
                  margin="dense"
                  disabled={formState.values.travelFromFocus !== '1'}
                />
              </Grid>
            </Grid>

            <Grid container className={classes.formGroup}>
              <Grid item xs={12}>
                <Typography variant="body2">
                  Contato direto com pessoas vindas de cidade com confirmação de
                  casos nos último 14 dias?
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label="Sim"
                  name="infectedContact"
                  value="1"
                  checked={formState.values.infectedContact === '1'}
                  onChange={handleChange}
                />
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label="Não"
                  name="infectedContact"
                  value="0"
                  checked={formState.values.infectedContact === '0'}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Nome da Cidade"
                  name="infectedContactCity"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.infectedContactCity || ''}
                  variant="outlined"
                  margin="dense"
                  disabled={formState.values.infectedContact !== '1'}
                />
              </Grid>
            </Grid>

            <Grid container className={classes.formGroup}>
              <Grid item xs={12}>
                <Typography variant="body2">Sintomático?</Typography>
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label="Sim"
                  name="symptomatic"
                  value="1"
                  checked={formState.values.symptomatic === '1'}
                  onChange={handleChange}
                />
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label="Não"
                  name="symptomatic"
                  value="0"
                  checked={formState.values.symptomatic === '0'}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={12} className={classes.formGroup}>
                <Typography variant="body2">Início dos sintomas</Typography>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={locale}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    format="dd/MM/yyyy"
                    name="symptomsInit"
                    value={formState.values.symptomsInit}
                    onChange={handleDateChange('symptomsInit')}
                    variant="outlined"
                    margin="dense"
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
            </Grid>

            <Grid container className={classes.formGroup}>
              <Grid item xs={12}>
                <Typography variant="body2">Sinais e Sintomas</Typography>
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Febre"
                  value="Febre"
                  name="symptoms"
                  onChange={handleChangeAdd}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Tosse"
                  value="Tosse"
                  name="symptoms"
                  onChange={handleChangeAdd}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Dor de Garganta "
                  value="Dor de Garganta "
                  name="symptoms"
                  onChange={handleChangeAdd}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Dispneia"
                  value="Dispneia"
                  name="symptoms"
                  onChange={handleChangeAdd}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Desconforto Respiratório"
                  value="Desconforto Respiratório"
                  name="symptoms"
                  onChange={handleChangeAdd}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Saturação Oxigênio < 95%"
                  value="Saturação Oxigênio < 95%"
                  name="symptoms"
                  onChange={handleChangeAdd}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Diarreia"
                  value="Diarreia"
                  name="symptoms"
                  onChange={handleChangeAdd}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Vômito"
                  value="Vômito"
                  name="symptoms"
                  onChange={handleChangeAdd}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Outros"
                  name="symptomsOthers"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.symptomsOthers || ''}
                  variant="outlined"
                  margin="dense"
                />
              </Grid>
            </Grid>

            <Grid container className={classes.formGroup}>
              <Grid item xs={12}>
                <Typography variant="body2">
                  Possui fatores de risco/comorbidades
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label="Sim"
                  name="hasRiskFactor"
                  value="1"
                  onChange={handleChange}
                />
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label="Não"
                  name="hasRiskFactor"
                  value="2"
                  checked={formState.values.hasRiskFactor === '2'}
                  onChange={handleChange}
                />
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Puérpera (até 45 dias do parto)"
                    value="Puérpera (até 45 dias do parto)"
                    name="risckFactor"
                    onChange={handleChangeAdd}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Síndrome de Down "
                    value="Síndrome de Down "
                    name="risckFactor"
                    onChange={handleChangeAdd}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Diabetes mellitus"
                    value="Diabetes mellitus"
                    name="risckFactor"
                    onChange={handleChangeAdd}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Imunodeficiência/Imunodepressão "
                    value="Imunodeficiência/Imunodepressão "
                    name="risckFactor"
                    onChange={handleChangeAdd}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Doença Cardiovascular Crônica "
                    value="Doença Cardiovascular Crônica "
                    name="risckFactor"
                    onChange={handleChangeAdd}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label=" Doença Hepática Crônica"
                    value=" Doença Hepática Crônica"
                    name="risckFactor"
                    onChange={handleChangeAdd}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Doença Neurológica Crônica "
                    value="Doença Neurológica Crônica "
                    name="risckFactor"
                    onChange={handleChangeAdd}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Doença Renal Crônica"
                    value="Doença Renal Crônica"
                    name="risckFactor"
                    onChange={handleChangeAdd}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Doença Hematológica Crônica"
                    value="Doença Hematológica Crônica"
                    name="risckFactor"
                    onChange={handleChangeAdd}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Asma"
                    value="Asma"
                    name="risckFactor"
                    onChange={handleChangeAdd}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Outra Pneumopatia Crônica"
                    value="Outra Pneumopatia Crônica"
                    name="risckFactor"
                    onChange={handleChangeAdd}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Obesidade"
                    value="Obesidade"
                    name="risckFactor"
                    onChange={handleChangeAdd}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Outros"
                    name="name"
                    onChange={handleChange}
                    type="text"
                    value={formState.values.name || ''}
                    variant="outlined"
                    margin="dense"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid container className={classes.formGroup}>
              <Grid item xs={12}>
                <Typography variant="body2">
                  Recebeu vacina contra Gripe na última campanha
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label="Sim"
                  name="lastVactination"
                  value="1"
                  checked={formState.values.healthyWorker === '1'}
                  onChange={handleChange}
                />
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label="Não"
                  name="lastVactination"
                  value="0"
                  checked={formState.values.healthyWorker === '0'}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography variant="body2">Data da vacinação</Typography>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={locale}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    format="dd/MM/yyyy"
                    value={formState.values.lastVactinationAt}
                    onChange={handleDateChange('lastVactinationAt')}
                    variant="outlined"
                    margin="dense"
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
            </Grid>
            <Grid item className={classes.action}>
              <Button
                color="primary"
                type="submit"
                variant="contained"
                // disabled={loading}
              >
                Salvar
              </Button>
            </Grid>
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

const MOCK = {
  uf: '5e8babf51c9d44000083b976',
  city: '5e8bd73fe4196130f6c34014',
  risckFactor: [
    'Imunodeficiência/Imunodepressão ',
    'Doença Cardiovascular Crônica ',
  ],
  symptoms: ['Febre', 'Dor de Garganta ', 'Dispneia'],
  birthday: null,
  fullname: 'Jefferson de Souza',
  phoneCod: '11',
  street: 'Rua do Prado',
  houseNumber: '1',
  docId: '111',
  sus: '111',
  healthyWorker: '0',
  phoneNumber: '11111',
  neighborhood: 'Centro',
  covidStatus: '2',
  travelFromFocus: '1',
  focusTravelCity: '11',
  infectedContact: '1',
  infectedContactCity: '1111',
  symptomatic: '1',
  hasRiskFactor: '1',
};
