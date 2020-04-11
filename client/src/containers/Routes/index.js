import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const Login = () => <div>login</div>;
const Dashboard = () => <div>dashboard</div>;
const Page404 = () => <div>Page404</div>;

const Layout = ({ children }) => (
  <div style={{ background: 'pink' }}>{children}</div>
);

const LayoutPri = ({ children }) => (
  <div style={{ background: 'lightblue' }}>{children}</div>
);

const Routes = () => {
  return (
    <Switch>
      <PublicRoute exact path="/" component={Login} layout={Layout} />
      <PrivateRoute exact path="/" component={Dashboard} layout={LayoutPri} />
      <Route path="*" component={Page404} />
    </Switch>
  );
};

export default Routes;
