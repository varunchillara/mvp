import React from "react";
import Map from './components/Map.jsx';
import Info from './components/Info.jsx';
import Form from './components/Form.jsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Title from './components/Title.jsx';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Roboto'],
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
  const [marker, setMarker] = React.useState({});
  const handleMarkerChange = (event) => {
    setMarker(event.target.value);
    console.log('was this handled???');
  }
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className="container">
        <div className="main">
          <div>
            <Title />
            <Form />
            <Map handleMarkerChange={handleMarkerChange}/>
          </div>
          <Info />
        </div>
      </div>
    </MuiThemeProvider>
  )
}

export default App;