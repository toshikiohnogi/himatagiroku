import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import Settings from '@material-ui/icons/Settings';

const useStyles = makeStyles({
  titleTypography: {
    flexGrow: 1
  },
  titleLink: {
    textDecoration: 'none',
    color: 'white'
  }
});

const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

function HeaderBar () {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.titleTypography}>
          <Link to="/" className={classes.titleLink}>日跨ぎ録</Link>
        </Typography>
        <IconButton
          color="inherit"
          component={AdapterLink}
          to="/setting"
        >
          <Settings />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderBar;
