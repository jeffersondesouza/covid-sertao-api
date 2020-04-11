import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter, useHistory, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const PrivateRoute = props => {
  const { component: Component, layout: Layout, redirectPath, ...rest } = props;

  const history = useHistory();

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Helmet>
            <title>Covid Sertão</title>
          </Helmet>
          <Component {...props} />
        </Layout>
      )}
    />
  );

  // return <div>Loading...</div>;
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  isValidatingToken: PropTypes.bool,
  hasCallTokenValidation: PropTypes.bool,
  exact: PropTypes.bool,
  redirectPath: PropTypes.string,
  component: PropTypes.func.isRequired,
  layout: PropTypes.func.isRequired,
};

export default withRouter(PrivateRoute);
