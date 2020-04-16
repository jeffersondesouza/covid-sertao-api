import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './view/components';
import { Main as MainLayout, Minimal as MinimalLayout } from './view/layouts';

import {
  AddCrewMember as AddCrewMemberView,
  AddCrewAdmin as AddCrewAdminView,
  Dashboard as DashboardView,
  CasesList as CasesListView,
  UserList as UserListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView,
} from './view/pages';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />

      <RouteWithLayout
        component={CasesListView}
        exact
        layout={MainLayout}
        path="/cases"
      />

      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/members"
      />

      <RouteWithLayout
        component={AddCrewMemberView}
        exact
        layout={MainLayout}
        path="/members/add"
      />

      <RouteWithLayout
        component={AddCrewAdminView}
        exact
        layout={MainLayout}
        path="/members/admin/add"
      />

      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path="/typography"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/icons"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      {/*  <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      /> */}
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/login"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
