import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteWithLayout = props => {
  const { layout: Layout, component: Component, guard: Guard, ...rest } = props;

  if (Guard) {
    return (
      <Route
        {...rest}
        render={matchProps => (
          <Guard {...matchProps}>
            <Layout>
              <Component {...matchProps} />
            </Layout>
          </Guard>
        )}
      />
    );
  }

  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
};

export default RouteWithLayout;
