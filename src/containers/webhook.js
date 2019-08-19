import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  formInnerContainer: {
    padding: theme.spacing(3, 2),
  },
  formTypography: {
    marginTop: 20
  },
  formButton: {
    marginTop: 20,
    justifyContent: 'center'
  }
}));

const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

function Webhook () {
  const [url, setUrl] = useState(() => {
    let urlOnLocalStorage = window.localStorage.getItem('webhook');

    if (urlOnLocalStorage === null) {
      return '';
    }

    return urlOnLocalStorage;
  });

  const submitWebhookUrl = () => {
    window.localStorage.setItem('webhook', url);
    alert('登録しました');
  }

  const classes = useStyles();

  return (
    <Paper className={classes.formInnerContainer}>
      <Typography
        variant="h5"
        component="h5"
        className={classes.formTypography}
      >Webhook URL</Typography>
      <TextField
        placeholder="Slack Incoming WebhookのURL"
        multiline={false}
        fullWidth={true}
        value={url}
        onChange={event => setUrl(event.target.value)}
      />
      <Grid container direction="row" justify="center" alignItems="center">
        <Button
          variant="contained"
          color="primary"
          component={AdapterLink}
          to="/"
          className={classes.formButton}
          onClick={submitWebhookUrl}
        >登録</Button>
      </Grid>
    </Paper>
  )
}

export default Webhook;
