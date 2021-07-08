import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import mapStyle from '../style/mapStyle.jsx';
import key from '../../config.js';
import Search from './Search.jsx';
// import '@reach/combobox/styles.css';
import axios from 'axios';

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

let center = {
  lat: 40.7831,
  lng: -73.9712
}

const mapContainerStyle = {
  width: '950px',
  height: '450px'
}

const libraries = ['places'];

function Map ({marker, markers, handleMarkerChange, category}) {
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  const panTo = React.useCallback(({lat, lng}) => {
    mapRef.current.panTo({lat, lng});
    mapRef.current.setZoom(15);
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: key,
    libraries
  })

  const [selected, setSelected] = React.useState(null);
  const classes = useStyle();

  if (loadError) {
    return 'error loading maps';
  }
  if (!isLoaded) {
    return 'loading Maps';
  }

  let currentUrl = '/../../emojis/burger.png';
  let currentScale = new window.google.maps.Size(30, 30);

  if (category === 'Outdoor') {
    currentUrl = '/../../emojis/outdoor.png';
    currentScale = new window.google.maps.Size(40, 40);
  } else if (category === 'Music') {
    currentUrl = '/../../emojis/music.png';
    currentScale = new window.google.maps.Size(32, 32);
  } else if (category === 'Bars') {
    currentUrl = '/../../emojis/beer.png';
    currentScale = new window.google.maps.Size(32, 32);
  }

  // console.log(console.log('*******', marker.category));
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
          handleMarkerChange({lat: event.latLng.lat(), lng: event.latLng.lng(), time: new Date()});
        }}
        onLoad={onMapLoad}
        // onClick={() => {
        //   setSelected(marker)
        // }}
        >
          <Marker
          icon={
            {
            url: currentUrl,
            scaledSize: currentScale,
            origin: new window.google.maps.Point(0,0),
            anchor: new window.google.maps.Point(15, 15)
          }}
          key={marker.time}
          position={{lat: marker.lat, lng: marker.lng}}/>
          <Search panTo={panTo}/>
          {markers.map((marker, i) => {
            let url = '/../../emojis/burger.png';
            let scale = new window.google.maps.Size(30, 30);
            if (marker.category === 'Outdoor') {
              url = '/../../emojis/outdoor.png';
              scale = new window.google.maps.Size(40, 40);
            } else if (marker.category === 'Music') {
              url = '/../../emojis/music.png';
              scale = new window.google.maps.Size(32, 32);
            } else if (marker.category === 'Bars') {
              url = '/../../emojis/beer.png';
              scale = new window.google.maps.Size(32, 32);
            }
            return (<Marker
              key={i}
              position={{lat: Number(marker.lat), lng: Number(marker.lng)}}
              onClick={() => {
                setSelected(marker);
              }}
              icon={{
                url: url,
                scaledSize: scale,
                origin: new window.google.maps.Point(0,0),
                anchor: new window.google.maps.Point(15, 15)
              }}
              />)
          })}
          {selected ? (<InfoWindow position={{lat: Number(selected.lat) + .001, lng: Number(selected.lng)}}
          onCloseClick={() => {
            setSelected(null);
          }}
          >
            <div>
              <h2>{selected.name}</h2>
              <p>{selected.user} - {selected.summary}</p>
            </div>
          </InfoWindow>) : null}
        </GoogleMap>
      </Paper>
    </div>
  )
}

export default Map;