import React from "react";
import Map from './components/Map.jsx';
import Info from './components/Info.jsx';
import Form from './components/Form.jsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Title from './components/Title.jsx';
import axios from 'axios';
import Sort from './components/Sort.jsx';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Archivo', 'sans-serif'],
  },
  palette: {
    primary: {
      main: '#e0f7fa',
    },
    background: {
      default: '#e0f7fa',
    },
  },
});

function App () {
  const [marker, setMarker] = React.useState({lat: 1, lng: 1, time: '1'});
  const [markers, setMarkers] = React.useState([]);
  const [category, setCategory] = React.useState('Food');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  React.useEffect(() => {
    if (markers.length === 0) {
      axios.get('/entry')
      .then((result) => {
        setMarkers(result.data);
      })
    }
  }, []);

  const setMarkersOnSubmit = () => {
    axios.get('/entry')
    .then((result) => {
      setMarkers(result.data);
    })
  }

  const handleMarkerChange = (value) => {
    setMarker(value);
  }
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className="container">
        <div className="main">
          <div>
            <div style={{display:"flex"}}>
              <Title />
              <Sort />
            </div>
            <Form marker={marker} setMarkersOnSubmit={setMarkersOnSubmit} category={category} handleCategoryChange={handleCategoryChange}/>
            <Map category={category} marker={marker} handleMarkerChange={handleMarkerChange} markers={markers}/>
          </div>
          <Info markers={markers}/>
        </div>
      </div>
    </MuiThemeProvider>
  )
}

export default App;