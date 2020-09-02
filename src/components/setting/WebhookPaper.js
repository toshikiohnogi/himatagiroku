import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

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

function WebhookPaper () {
  const [url, setUrl] = useState(() => {
    let urlOnLocalStorage = window.localStorage.getItem('webhook');

    if (urlOnLocalStorage === null) {
      return '';
    }

    return urlOnLocalStorage;
  });

  const submitWebhookUrl = () => {
    try {
      window.localStorage.setItem('webhook', url);
    } catch (e) {
      alert('Failed to access to Local Strage.');
      return;
    }

    axios
      .post(url, {
        text: 'This webhook url has been set from Himatagiroku.',
      }, {
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
      })
      .then(() => {
        alert('登録しました。');
      })
      .catch(() => {
        window.localStorage.removeItem('webhook');
        alert('登録に失敗しました。');
      })
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
          className={classes.formButton}
          onClick={submitWebhookUrl}
        >登録</Button>
      </Grid>
    </Paper>
  );
}

export default WebhookPaper;
