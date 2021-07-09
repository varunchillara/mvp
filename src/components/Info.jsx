import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import StaticHearts from './StaticHearts.jsx';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '325px',
    maxWidth: '325px',
  },
  inline: {
    display: 'inline',
  },
}));

function Info (props) {
  const classes = useStyles();
  return (
    <div className="info" >
      <Paper className={classes.root} elevation={1} style={{ backgroundColor: 'rgb(250, 250, 250)' }}>
      <List className={classes.root} style={{maxHeight: '695px', overflow: 'auto'}}>
      {props.markers.map((marker, i) => {
        return (
          <div key={i} >
          <ListItem alignItems="flex-start" >
            <ListItemText
            primary={marker.name}
            secondary={
            <React.Fragment>
              <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {marker.user + ' - '}
              </Typography>
              {marker.summary}
              </React.Fragment>
              }/>
        </ListItem>
        <hr className="solid" />
        </div>
        )
      })}
      </List>
      </Paper>
    </div>

  )
}

export default Info;
