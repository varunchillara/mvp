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
              props.handleFilterChange('All');
              popupState.close();
            }}>All</MenuItem>
            <MenuItem onClick={ () => {
              props.handleFilterChange('Food');
              popupState.close();
            }}>Food</MenuItem>
            <MenuItem onClick={ () => {
              props.handleFilterChange('Outdoor');
              popupState.close();
            }}>Outdoor</MenuItem>
            <MenuItem onClick={ () => {
              props.handleFilterChange('Music');
              popupState.close();
            }}>Music</MenuItem>
            <MenuItem onClick={ () => {
              props.handleFilterChange('Bars');
              popupState.close();
            }}>Bars</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
    </div>
  )
}

export default Sort;

