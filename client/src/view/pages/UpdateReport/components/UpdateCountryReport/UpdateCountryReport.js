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
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    padding: '10px',
    marginBottom: '2rem',
  },
  select: {
    textTransform: 'capitalize',
    option: {
      textTransform: 'capitalize',
    },
  },
  action: {
    marginTop: '1.5rem',
  },
  selectMsg: {
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
  },
}));

const LABELS = {
  confirmed: 'Confirmados',
  negative: 'Negativos',
  suspects: 'Suspeito',
  recovered: 'Recuperados',
  deaths: 'Óbitos',
  monitoring: 'Acompanhamentos',
  tests: 'Testes Realizados',
};

const UpdateCountryReport = props => {
  const {
    ufs = [],
    cities = [],
    loading,
    className,
    report,
    localeId,
    updateUf,
    isSuperUser,
    title,
    updateCity,
    onUpdateNotChanges,
    onLoadUfCities,
    onUpdateReport,
    onLoadUfReport,
    ...rest
  } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
    schema: {},
  });

  const [inputFields, setInputFields] = useState([]);
  const [ufId, setUfId] = useState(null);

  useEffect(() => {
    if (!report || !report.report) {
      return;
    }

    const fields = Object.getOwnPropertyNames(report.report).map(item => ({
      label: LABELS[item],
      name: item,
      value: report.report[item],
    }));

    setInputFields(fields);

    const formSchema = fields.reduce(
      (itemA, itemB) => ({
        ...itemA,
        [itemB.name]: {
          presence: {
            allowEmpty: false,
            message: 'O campo deve ser informado',
          },
        },
      }),
      {}
    );

    const formValue = fields.reduce(
      (itemA, itemB) => ({
        ...itemA,
        [itemB.name]: itemB.value || 0,
      }),
      {}
    );

    setFormState(formState => ({
      ...formState,
      schema: formSchema,
      values: formValue,
    }));
  }, [report]);

  useEffect(() => {
    const errors = validate(formState.values, formState.schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChangeUf = event => {
    const id = event.target.value;
    if (updateUf) {
      onLoadUfReport({ uf: id });
    }

    if (updateCity) {
      setUfId(id);
      onLoadUfCities(id);
    }
  };

  const handleChangeCity = event => {
    const id = event.target.value;
    onLoadUfReport({ city: id, uf: ufId });
  };

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: +event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const handleSave = event => {
    event.preventDefault();

    if (formState.isValid && localeId) {
      onUpdateReport({ ...formState.values, localeId });
    }
  };

  const handleUpdateNotChanges = () => {
    if (report && report.report) {
      onUpdateNotChanges({...report.report, localeId});
    }
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <Grid container alignItems="center" justify="space-between">
        <Grid>
          <CardHeader title={`${title} - ${report.name || ''}`} />
        </Grid>
        <Grid>
          <Button
            color="secondary"
            type="button"
            variant="contained"
            disabled={loading}
            style={{ marginRight: '2rem' }}
            onClick={handleUpdateNotChanges}
          >
            Clique aqui se não houveram alterações Hoje
          </Button>
        </Grid>
      </Grid>
      <Divider />
      {isSuperUser && (
        <Grid container spacing={4}>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Estado"
              name="uf"
              onChange={handleChangeUf}
              type="text"
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
                <option>Selecione o Estado desejado</option>
                {[...ufs].map(option => (
                  <option key={option._id} value={option._id}>
                    {option.name.toUpperCase()}
                  </option>
                ))}
              </>
            </TextField>
          </Grid>
          {updateCity && (
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Cidade"
                onChange={handleChangeCity}
                type="text"
                variant="outlined"
                margin="dense"
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                className={classes.select}
              >
                <>
                  <option>Selecione a Cidde desejada</option>
                  {[...cities].map(option => (
                    <option key={option._id} value={option._id}>
                      {option.name.toUpperCase()}
                    </option>
                  ))}
                </>
              </TextField>
            </Grid>
          )}
        </Grid>
      )}
      <form onSubmit={handleSave}>
        <CardContent>
          {inputFields.length <= 0 && (
            <div className={classes.selectMsg}>
              {updateUf ? (
                <Typography align="center" variant="subtitle1">
                  Selecione o estado desejado
                </Typography>
              ) : (
                <Typography align="center" variant="subtitle1">
                  Selecione o estado e a cidade
                </Typography>
              )}
            </div>
          )}
          {inputFields.map(item => (
            <Grid key={item.name} container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  error={hasError(item.name)}
                  fullWidth
                  helperText={
                    hasError(item.name) ? 'O campo deve ser informado' : null
                  }
                  label={item.label}
                  name={item.name}
                  onChange={handleChange}
                  type="number"
                  value={formState.values[item.name]}
                  variant="outlined"
                  margin="dense"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          ))}

          <Grid container className={classes.action} justify="center">
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

UpdateCountryReport.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool,
  onUpdateReport: PropTypes.func,
  onLoadUfCities: PropTypes.func,
};

export default UpdateCountryReport;
