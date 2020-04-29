import React, { useContext } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Divider, Drawer, Hidden, Button } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import { Assignment, AssignmentInd } from '@material-ui/icons';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';

import { Context, useSelector } from 'store/createContext';

import { Profile, SidebarNav } from './components';
import useStyles from './styles';

const isProduction = () => process.env.NODE_ENV === 'production';

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const user = useSelector(state => state.auth.currentUser);
  const classes = useStyles();

  const pages = [
    {
      title: 'Início',
      href: '/dashboard',
      icon: <DashboardIcon />,
    },
    {
      title: 'Atualizar Boletim',
      href: '/atualizar-boletim',
      icon: <DashboardIcon />,
      hide: !user.isAdmin && !user.isSuperUser,
    },
    {
      title: 'Notificações',
      href: '/cases',
      icon: <Assignment />,
    },
    {
      title: 'Isolamento Domiciliar',
      href: '/cases',
      icon: <Assignment />,
    },
    {
      title: 'Equipe',
      href: '/members',
      icon: <PeopleIcon />,
      hide: !user.isAdmin,
    },
    {
      title: 'Novo Membro',
      href: '/members/add',
      icon: <AssignmentInd />,
      hide: !user.isAdmin,
    },
    {
      title: 'Novo Gestor',
      href: '/members/admin/add',
      icon: <AssignmentInd />,
      hide: !user.isSuperUser,
    },
    {
      title: 'Minha Conta',
      href: '/account',
      icon: <AccountBoxIcon />,
      hide: isProduction(),
    },
    {
      title: 'Configurações',
      href: '/settings',
      icon: <SettingsIcon />,
      hide: isProduction(),
    },
    {
      title: 'Typography',
      href: '/typography',
      icon: <TextFieldsIcon />,
      hide: isProduction(),
    },
    {
      title: 'Icons',
      href: '/icons',
      icon: <ImageIcon />,
      hide: isProduction(),
    },
  ];

  const {
    state: { auth },
    logout,
  } = useContext(Context);

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav className={classes.nav} pages={pages} />
        <Hidden lgUp>
          <Divider />
          <Button variant="text" className={classes.btnLogout} onClick={logout}>
            <InputIcon className={classes.icon} color="inherit" />
            Sair
          </Button>
        </Hidden>
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Sidebar;
