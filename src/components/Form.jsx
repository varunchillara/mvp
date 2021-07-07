import React from "react";
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

function Form () {
  const classes = useStyle();
  return (
    <Paper className={classes.root} elevation={5}>
      <div className="form"></div>
    </Paper>
  )
}

export default Form;