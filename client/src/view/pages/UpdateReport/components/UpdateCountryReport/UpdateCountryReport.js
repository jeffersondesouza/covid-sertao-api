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

const LABELS = {
  confirmed: 'Confirmados',
  negative: 'Negativos',
  suspects: 'Suspeito',
  recovered: 'Recuperados',
  deaths: 'Óbitos',
  monitoring: 'Acompanhamentos',
};

const UpdateCountryReport = props => {
  const {
    ufs = [],
    cities = [],
    loading,
    className,
    report,
    localeId,
    onLoadUfCities,
    onUpdateReport,
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

    if (formState.isValid) {
      onUpdateReport({ ...formState.values, localeId });
    }
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form onSubmit={handleSave}>
        <CardHeader title="Atualizar Boletim do Brasil" />
        <Divider />
        <CardContent>
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
              color="secondary"
              type="button"
              variant="contained"
              disabled={loading}
              style={{ marginRight: '2rem' }}
            >
              Não houveram alterações Hoje
            </Button>
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
