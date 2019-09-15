import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  paperStyle: {
    padding: theme.spacing(3, 2),
  },
  formTypography: {
    marginTop: 20
  },
  innerGrid: {
    marginTop: 20,
    textAlign: 'center'
  }
}));

function ResetParameterPaper () {
  const resetDateStamp = () => {
    window.localStorage.removeItem('last_commit');
    alert('リセットしました。');
  }

  const classes = useStyles();

  return (
    <Paper className={classes.paperStyle}>
      <Typography
        variant="h5"
        component="h5"
        className={classes.formTypography}
      >パラメータのリセット</Typography>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.myGrid}
      >
        <Grid item xs={4} className={classes.innerGrid}>
          <Button
            variant="contained"
            color="primary"
            onClick={resetDateStamp}
          >投稿日時</Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ResetParameterPaper;
