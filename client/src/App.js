import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Chart } from 'react-chartjs-2';
import { ThemeProvider } from '@material-ui/styles';
import validate from 'validate.js';

import { chartjs } from './helpers';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import validators from './common/validators';
import Routes from './Routes';

import ContextProvider from './store/ContextProvider';


Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw,
});

validate.validators = {
  ...validate.validators,
  ...validators,
};

export default class App extends Component {
  render() {
    return (
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ThemeProvider>
      </ContextProvider>
    );
  }
}
