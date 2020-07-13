import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Qualification from '../../components/Resume/Qualification';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Link1
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Link2
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Link3
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Link4
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Link5
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Link6
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Link7
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Link8
          </Typography>


          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}