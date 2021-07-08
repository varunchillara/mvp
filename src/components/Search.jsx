import React from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';

function Search (props) {
  const {ready, value, suggestions: {status, data}, setValue, clearSuggestion} = usePlacesAutocomplete({
    requestOptions: {
      location: {
        lat: () => 40.7831,
        lng: () => -73.9712
      },
      radius: 200 * 1000
    }
  })
  return (
    <div className="search">
      <Combobox onSelect={ (address) => {
        getGeocode({address})
        .then((results) => {
          getLatLng(results[0])
          .then(({lat, lng}) => {
            props.panTo({lat, lng});
          })
        });
        }}>
        <ComboboxInput
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        disabled={!ready}
        placeholder="enter in address"
        />
        <ComboboxPopover style={{backgroundColor:"#F0F0F0", opacity:0.9}}>
          {status === "OK" && data.map(({ id, description }, i) => {
            return (<ComboboxOption key={i} value={description} />);
          })}
        </ComboboxPopover>
      </Combobox>
    </div>
  )
}

export default Search;