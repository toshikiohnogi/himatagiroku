import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';

import InputCard from './InputCard';

const useStyles = makeStyles({
  mt20: {
    marginTop: 20,
  },
  formButton: {
    justifyContent: 'center'
  }
});

function getInitialContent (key) {
  let doneOnSession = window.sessionStorage.getItem(key);
  
  if (doneOnSession === null) {
    return '';
  }

  return doneOnSession;
}

function Form () {
  const [done, setDone] = useState(getInitialContent('done'));
  const [comment, setComment] = useState(getInitialContent('comment'));
  const [todo, setTodo] = useState(getInitialContent('todo'));

  const doneChanger = (newDone) => {
    setDone(newDone);
    window.sessionStorage.setItem('done', newDone);
  }
  const commentChanger = (newComment) => {
    setComment(newComment);
    window.sessionStorage.setItem('comment', newComment);
  }
  const todoChanger = (newTodo) => {
    setTodo(newTodo);
    window.sessionStorage.setItem('todo', newTodo);
  }

  const messageSender = () => {
    var today = new Date();
    var text = '';

    var lastCommit = window.localStorage.getItem('last_commit');
    if (
      lastCommit != null &&
      lastCommit === today.toLocaleDateString()
    ) {
      alert('日跨ぎ録の投稿は1日1回までです');
      return;
    }

    if (done === '') {
      alert('今日やったことが入力されていません');
      return;
    }
    text += `*今日やったこと*\n\n${done}\n\n`;

    if (comment === '') {
      alert('コメントが入力されていません');
      return;
    }
    text += `*コメント*\n\n${comment}\n\n`;

    if (todo === '') {
      alert('翌営業日の予定が入力されていません');
      return;
    }
    text += `*翌営業日の予定*\n\n${todo}\n\n`;

    const url = window.localStorage.getItem('webhook');
    if (url === null || !url.match(/^http/g)) {
      alert('Webhook URLを指定してください');
      return;
    }
    
    axios
      .post(url, {
        text: text
      }, {
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
      })
      .then(() => {
        window.localStorage.setItem('last_commit', today.toLocaleDateString());
        alert('投稿しました');

        setDone('');
        setComment('');
        setTodo('');
        window.sessionStorage.clear();
      })
      .catch(e => alert(e))
  }

  const classes = useStyles();

  return (
    <div>
      <InputCard
        title="今日やったこと"
        placeholder="今日やったことを箇条書きします"
        value={done}
        onChange={doneChanger}
      />
      <div className={ classes.mt20 }></div>
      <InputCard
        title="コメント"
        placeholder="今日やったことに対してコメントを書きます"
        value={comment}
        onChange={commentChanger}
      />
      <div className={ classes.mt20 }></div>
      <InputCard
        title="翌営業日の予定"
        placeholder="翌営業日の予定を箇条書きします"
        value={todo}
        onChange={todoChanger}
      />
      <Grid container direction="row" justify="center" alignItems="center">
        <Button
          variant="contained"
          color="primary"
          className={classes.formButton + ' ' + classes.mt20}
          onClick={messageSender}
        >送信</Button>
      </Grid>
    </div>
  );
}

export default Form;
