import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import WebhookPaper from '../components/setting/WebhookPaper';
import ResetParameterPaper from '../components/setting/ResetParameterPaper';

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
      <div className={classes.paperMarginTop}></div>
      <ResetParameterPaper />
    </div>
  );
}

export default SettingContainer;
