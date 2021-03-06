import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

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
  SignIn as SignInView,
  NotFound as NotFoundView,
  NewCase as NewCaseView,
  UpdateReport as UpdateReportView,
  CasesHomeIsolation as CasesHomeIsolationListView,
} from './view/pages';
import { LoggedGuard } from 'view/guards';

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/login"
      />
      <RouteWithLayout
        exact
        path="/dashboard"
        layout={MainLayout}
        component={DashboardView}
        guard={LoggedGuard}
      />

      <RouteWithLayout
        exact
        path="/atualizar-boletim"
        layout={MainLayout}
        component={UpdateReportView}
        guard={LoggedGuard}
      />

      <RouteWithLayout
        component={CasesListView}
        exact
        layout={MainLayout}
        path="/cases"
        guard={LoggedGuard}
      />
      <RouteWithLayout
        component={NewCaseView}
        exact
        layout={MainLayout}
        path="/cases/new"
        guard={LoggedGuard}
      />

      <RouteWithLayout
        component={CasesHomeIsolationListView}
        exact
        layout={MainLayout}
        path="/isolamento-domiciliar"
        guard={LoggedGuard}
      />

      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/members"
        guard={LoggedGuard}
      />
      <RouteWithLayout
        component={AddCrewMemberView}
        exact
        layout={MainLayout}
        path="/members/add"
        guard={LoggedGuard}
      />
      <RouteWithLayout
        component={AddCrewAdminView}
        exact
        layout={MainLayout}
        path="/members/admin/add"
        guard={LoggedGuard}
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
      {/* <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
 */}
      <Route path="*" component={NotFoundView} />
    </Switch>
  );
};

export default Routes;
