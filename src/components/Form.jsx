import React from "react";
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Heart from './Hearts.jsx';
import SubmitFormButton from './SubmitFormButton.jsx';
import axios from 'axios';


const categories = ['Food', 'Outdoor', 'Music', 'Bars'];

const useStyles = makeStyles(theme => ({
  root: {
      '& .MuiTextField-root': {
          margin: theme.spacing(.97),
          width: '25ch'
      },
      '& label.Mui-focused': {
          color: 'black',
      },
      '& .MuiInput-underline:after': {
          borderBottomColor: 'black',
      },
      '& .MuiOutlinedInput-root': {
          '& fieldset': {
              borderColor: 'black',
          },
          '&:hover fieldset': {
              borderColor: 'black',
          },
          '&.Mui-focused fieldset': {
              borderColor: 'grey',
          },
      },
  },
}))

function Form (props) {
  const [name, setName] = React.useState('');
  const [review, setReview] = React.useState('');
  const [rating, setRating] = React.useState(2);
  const [user, setUser] = React.useState('');
  const classes = useStyles();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };
  const handleRatingChange = (value) => {
    setRating(value);
  };
  const handleUserChange = (event) => {
    setUser(event.target.value);
  }

  const handleFormSubmit = () => {
    const formInformation = [user, name, props.category, review, rating, props.marker.lat, props.marker.lng, 0];
    axios.post('/entry', {array: formInformation})
    .then(() => {
      props.setMarkersOnSubmit();
    })
    .catch((error) => {
      console.log('****', error);
    })
    setName('');
    setReview('');
    setUser('');
    setRating(2);
    props.handleMarkerChange({lat: 1, lng: 1, time: '1'});
  }


  return (
      <React.Fragment>
         <Paper className={classes.root} elevation={1} style={{ backgroundColor: 'rgb(250, 250, 250)' }}>
        <form className={classes.root} noValidate autoComplete="off">
          <div className="form">
            <div className="nameAndCategory">
              <div>
                <TextField
                  id="user"
                  size="small"
                  label="User"
                  variant="outlined"
                  value={user}
                  onChange={handleUserChange}
                />
              </div>
              <div>
                <TextField
                  id="name"
                  size="small"
                  label="Location"
                  variant="outlined"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <div>
                <TextField
                  size="small"
                  id="category"
                  select
                  label="Select Category"
                  variant="outlined"
                  value={props.category}
                  onChange={props.handleCategoryChange}
                >
                {categories.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
                </TextField>
              </div>
            </div>
            <div className="review">
              <TextField
              id="review"
              variant="outlined"
              label="Toughts On Location"
              multiline
              rows={6}
              value = {review}
              style = {{width: 470}}
              onChange={handleReviewChange}
              />
            </div>
            <div className="rating">
              <Heart handleRatingChange={handleRatingChange}/>
              <SubmitFormButton handleFormSubmit={handleFormSubmit}/>
            </div>
          </div>
        </form>
        </Paper>
      </React.Fragment>
  )
}

export default Form;