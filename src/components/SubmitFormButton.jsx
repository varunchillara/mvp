import React from "react";
import Button from '@material-ui/core/Button';

function SubmitFormButton (props) {
  return (
    <div>
      <Button size="large" variant="contained" onClick={props.handleFormSubmit} style={{ backgroundColor: 'rgb(236, 236, 236)', marginTop: "10px" }}>Submit</Button>
    </div>
  )
}

export default SubmitFormButton;
