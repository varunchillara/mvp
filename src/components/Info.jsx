import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import StaticHearts from './StaticHearts.jsx';

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
    <div className="info">
      <List className={classes.root}>
      {props.markers.map((marker, i) => {
        return (
          <React.Fragment key={i}>
          <ListItem alignItems="flex-start">
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
        </React.Fragment>
        )
      })}
      </List>
    </div>
  )
}

export default Info;
