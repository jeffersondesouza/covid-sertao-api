import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'components';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const Login = () => <div>login</div>;
const Dashboard = () => <div>dashboard</div>;
const Page404 = () => <div>Page404</div>;

const Routes = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <PublicRoute exact path="/login" component={Login} layout={Layout} />
      <PrivateRoute
        exact
        path="/dashboard"
        component={Dashboard}
        layout={Layout}
      />
      <PrivateRoute
        exact
        path="/dashboard/cases"
        component={Dashboard}
        layout={Layout}
      />
      <PrivateRoute
        exact
        path="/dashboard/cases/add"
        component={Dashboard}
        layout={Layout}
      />
      <PrivateRoute
        exact
        path="/dashboard/members"
        component={Dashboard}
        layout={Layout}
      />
      <PrivateRoute
        exact
        path="/dashboard/members/add"
        component={Dashboard}
        layout={Layout}
      />
      <Route path="*" component={Page404} />
    </Switch>
  );
};

export default Routes;
