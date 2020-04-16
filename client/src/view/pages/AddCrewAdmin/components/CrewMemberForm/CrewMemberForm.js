import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
}));

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 64,
    },
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128,
    },
  },
};

const CrewMemberForm = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

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
    console.log(formState);
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form onSubmit={handleSave}>
        <CardHeader
          title="Administrador de Cidade"
          subheader="Este membro fará parte da secretaria de saúde indicada"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                error={hasError('email')}
                fullWidth
                helperText={
                  hasError('email') ? formState.errors.email[0] : null
                }
                label="Email ou Telefone cadastrado"
                name="email"
                onChange={handleChange}
                type="text"
                value={formState.values.email || ''}
                variant="outlined"
                margin="dense"
              />
            </Grid>
          </Grid>
          <Button
            color="primary"
            disabled={!formState.isValid}
            type="submit"
            variant="contained"
          >
            Salvar
          </Button>
        </CardContent>
      </form>
    </Card>
  );
};

CrewMemberForm.propTypes = {
  className: PropTypes.string,
};

export default CrewMemberForm;

const states = [
  {
    value: 'alabama',
    label: 'Alabama',
  },
  {
    value: 'new-york',
    label: 'New York',
  },
  {
    value: 'san-francisco',
    label: 'San Francisco',
  },
];

const cities = [
  {
    value: '1',
    label: 'Santa terezinha',
  },
  {
    value: '2',
    label: 'São José',
  },
  {
    value: '3',
    label: 'Triunfo',
  },
];
