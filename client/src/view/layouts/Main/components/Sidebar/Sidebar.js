import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Divider,
  Drawer,
  IconButton,
  Hidden,
  Badge,
  Button,
} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import { Assignment, AssignmentInd } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import { Context } from 'store/createContext';

import { Profile, SidebarNav } from './components';

const isProduction = () => process.env.NODE_ENV === 'production';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)',
    },
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1),
  },
  btnLogout: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
}));

const Sidebar = props => {
  const { open, variant, onClose, history, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Início',
      href: '/dashboard',
      icon: <DashboardIcon />,
    },
    {
      title: 'Casos',
      href: '/cases',
      icon: <Assignment />,
    },
    {
      title: 'Equipe',
      href: '/members',
      icon: <PeopleIcon />,
    },
    {
      title: 'Adicionar Admin',
      href: '/members/admin/add',
      icon: <AssignmentInd />,
    },
    {
      title: 'Minha Conta',
      href: '/account',
      icon: <AccountBoxIcon />,
      hideOnProd: isProduction(),
    },
    {
      title: 'Configurações',
      href: '/settings',
      icon: <SettingsIcon />,
      hideOnProd: isProduction(),
    },
    {
      title: 'Typography',
      href: '/typography',
      icon: <TextFieldsIcon />,
      hideOnProd: isProduction(),
    },
    {
      title: 'Icons',
      href: '/icons',
      icon: <ImageIcon />,
      hideOnProd: isProduction(),
    },
  ];

  const {
    state: { auth },
    logout,
  } = useContext(Context);

  const handleLogout = event => {
    logout();
    event.preventDefault();
    history.push('/login');
  };

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
          <Button
            variant="text"
            className={classes.btnLogout}
            onClick={handleLogout}
          >
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

export default withRouter(Sidebar);
