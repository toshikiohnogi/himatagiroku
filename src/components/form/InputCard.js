import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  innerPaper: {
    padding: theme.spacing(3, 2),
  }
}));

function InputCard (props) {
  const classes = useStyles();
  
  return (
    <div>
      <Paper className={classes.innerPaper}>
        <Typography
          variant="h5"
          component="h5"
        >{ props.title }</Typography>
        <TextField
          placeholder={ props.placeholder }
          multiline={true}
          fullWidth={true}
          rows={1}
          rowsMax={8}
          value={props.value}
          onChange={event => props.onChange(event.target.value)}
        />
      </Paper>
    </div>
  );
}

export default InputCard;
