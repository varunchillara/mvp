import React from "react";
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Heart from './Hearts.jsx';
import SubmitFormButton from './SubmitFormButton.jsx';

const categories = ['Food', 'Outdoor', 'Music', 'Misc'];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1.2),
      width: '25ch',
    },
  },
}));

function Form () {
  const [name, setName] = React.useState('Composed TextField');
  const [category, setCategory] = React.useState('Food');
  const classes = useStyles();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };


  return (
      <React.Fragment>
        <form className={classes.root} noValidate autoComplete="off">
          <div className="form">
            <div className="nameAndCategory">
              <div>
                <TextField
                  id="filled-uncontrolled"
                  label="Name"
                  defaultValue="John Doe"
                  variant="outlined"
                />
              </div>
              <div>
                <TextField
                  id="standard-select-currency"
                  select
                  label="Select Category"
                  variant="outlined"
                  value={category}
                  onChange={handleCategoryChange}
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
              label="Multiline"
              multiline
              rows={5}
              defaultValue="Write A Review"
              style = {{width: 470}}
              />
            </div>
            <div className="rating">
              <Heart />
              <SubmitFormButton />
            </div>
          </div>
        </form>
      </React.Fragment>
  )
}

export default Form;