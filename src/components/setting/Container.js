import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import WebhookPaper from './WebhookPaper';
import ResetParameterPaper from './ResetParameterPaper';

const useStyles = makeStyles(() => ({
  paperMarginTop: {
    marginTop: 20
  }
}));

function SettingContainer () {
  const classes = useStyles();

  return (
    <div>
      <WebhookPaper />
      <div className={classes.paperMarginTop}>
        <ResetParameterPaper />
      </div>
    </div>
  );
}

export default SettingContainer;
