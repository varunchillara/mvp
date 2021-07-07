import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import mapStyle from '../style/mapStyle.jsx';
import key from '../../config.js';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const center = {
  lat: 40.7831,
  lng: -73.9712
}
const libraries = ['places'];

function Map (props) {
  const [marker, setMarker] = React.useState({});
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: key,
    libraries
  })
  const classes = useStyle();
  const mapContainerStyle = {
    width: '950px',
    height: '450px'
  }

  if (loadError) {
    return 'error loading maps';
  }
  if (!isLoaded) {
    return 'loading Maps';
  }

  return (
    <div>
      <Paper className={classes.root} elevation={5}>
        <GoogleMap
        className="map"
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={{
          styles: mapStyle,
          disableDefaultUI: true
        }}
        onClick={ (event) => {
          setMarker({lat: event.latLng.lat(), lng: event.latLng.lng()});
          props.handleMarkerChange({lat: event.latLng.lat(), lng: event.latLng.lng()});
        }}
        ></GoogleMap>
      </Paper>
    </div>
  )
}

export default Map;