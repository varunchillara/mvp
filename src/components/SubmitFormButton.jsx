import React from "react";
import Button from '@material-ui/core/Button';

function SubmitFormButton (props) {
  return (
    <div>
      <Button size="large" variant="contained" disableElevation onClick={props.handleFormSubmit}>Submit</Button>
    </div>
  )
}

export default SubmitFormButton;