import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'

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

function Form () {
  const [message, setMessage] = useState({
    done: '',
    comment: '',
    schedule: ''
  });

  const messageChanger = (done, comment, schedule) => {
    setMessage({
      done: done,
      comment: comment,
      schedule: schedule
    });
  }

  const messageSender = () => {
    var text = '';

    if (message.done === '') {
      alert('今日やったことが入力されていません')
      return
    }
    text += `*今日やったこと*\n\n${message.done}\n\n`;

    if (message.comment === '') {
      alert('コメントが入力されていません')
      return
    }
    text += `*コメント*\n\n${message.comment}\n\n`;

    if (message.schedule === '') {
      alert('翌営業日の予定が入力されていません')
      return
    }
    text += `*翌営業日の予定*\n\n${message.schedule}\n\n`;

    const url = window.localStorage.getItem('webhook');
    if (!url.match(/^http/g)) {
      alert('Webhook URLを指定してください')
      return
    }
    
    axios
      .post(url, {
        text: text,
        username: '日跨ぎ録筆者'
      }, {
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
      })
      .then(alert('投稿しました'))
      .catch(e => alert(e))
  }

  const classes = useStyles();

  return (
    <Paper className={classes.formInnerContainer}>
      <Typography
        variant="h5"
        component="h5"
      >今日やったこと</Typography>
      <TextField
        placeholder="今日やったことを箇条書きします"
        multiline={true}
        fullWidth={true}
        rows={1}
        rowsMax={8}
        value={message.done}
        onChange={event => messageChanger(event.target.value, message.comment, message.schedule)}
      />
      <Typography
        variant="h5"
        component="h5"
        className={classes.formTypography}
      >コメント</Typography>
      <TextField
        placeholder="今日やったことに対してコメントを書きます"
        multiline={true}
        fullWidth={true}
        rows={1}
        rowsMax={8}
        value={message.comment}
        onChange={event => messageChanger(message.done, event.target.value, message.schedule)}
      />
      <Typography
        variant="h5"
        component="h5"
        className={classes.formTypography}
      >翌営業日の予定</Typography>
      <TextField
        placeholder="翌営業日の予定を箇条書きします"
        multiline={true}
        fullWidth={true}
        rows={1}
        rowsMax={8}
        value={message.schedule}
        onChange={event => messageChanger(message.done, message.comment, event.target.value)}
      />
      <Grid container direction="row" justify="center" alignItems="center">
        <Button
          variant="contained"
          color="primary"
          className={classes.formButton}
          onClick={messageSender}
        >送信</Button>
      </Grid>
    </Paper>
  );
}

export default Form;
