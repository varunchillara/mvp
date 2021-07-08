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
          margin: theme.spacing(1),
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

  const handleFormSubmit = () => {
    const formInformation = ['varun', name, props.category, review, rating, props.marker.lat, props.marker.lng, 0];
    axios.post('/entry', {array: formInformation})
    .then(() => {
      props.setMarkersOnSubmit();
    })
    .catch((error) => {
      console.log('****', error);
    })
    setName('');
    setReview('');
    setRating(2);
  }


  return (
      <React.Fragment>
        <form className={classes.root} noValidate autoComplete="off">
          <div className="form">
            <div className="nameAndCategory">
              <div>
                <TextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  onChange={handleNameChange}
                />
              </div>
              <div>
                <TextField
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
              rows={5}
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
      </React.Fragment>
  )
}

export default Form;