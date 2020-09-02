import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

import HeaderBar from '../Components/HeaderBar';
import Form from '../Components/Form/Container';
import SettingContainer from '../Components/Setting/Container';

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
          <Route path='/setting' component={SettingContainer} exact />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
