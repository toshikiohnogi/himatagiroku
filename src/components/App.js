import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

import HeaderBar from '../components/headerBar';
import Form from '../containers/form';
import Webhook from '../containers/webhook';

const useStyle = makeStyles({
  rootContainer: {
    marginTop: 20
  }
});

function App() {
  const classes = useStyle();

  return (
    <Router>
      <HeaderBar />
      <Container maxWidth="sm" className={classes.rootContainer}>
        <Switch>
          <Route path='/' component={Form} exact />
          <Route path='/webhook' component={Webhook} exact />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
