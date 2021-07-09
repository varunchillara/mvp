import React from "react";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state/index';

function Sort (props) {
  return (
    <div style={{marginLeft: "auto", "marginTop":"20px"}} className="sort">
      <PopupState variant="popover" popupId="demo-popup-menu">
        {popupState => (
        <React.Fragment>
          <Button style={{ backgroundColor: 'rgb(236, 236, 236)' }} size="large" variant="contained" {...bindTrigger(popupState)}>
            Filter
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={ () => {
              popupState.close();
              console.log('clicked all');
            }}>All</MenuItem>
            <MenuItem onClick={ () => {
              popupState.close();
              console.log('Food');
            }}>Food</MenuItem>
            <MenuItem onClick={ () => {
              popupState.close();
              console.log('Outdoor');
            }}>Outdoor</MenuItem>
            <MenuItem onClick={ () => {
              popupState.close();
              console.log('Music');
            }}>Music</MenuItem>
            <MenuItem onClick={ () => {
              popupState.close();
              console.log('Bars');
            }}>Bars</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
    </div>
  )
}

export default Sort;

