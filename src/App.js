import logo from './logo.svg';
import './App.css';
import { Map, Marker, ZoomControl } from "pigeon-maps"
import { useEffect, useState } from 'react';

function App() {

  const [latitude, setLatitude] = useState(9.9347399);
  const [longitude, setLongitude] = useState(-84.087502);


  useEffect(() => {
    //get from navigator the location
    navigator.geolocation.getCurrentPosition(function(position) {
      // separate coordenates 
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Map height={500} defaultCenter={[latitude, longitude]} defaultZoom={11}>
        <Marker width={50} anchor={[latitude, longitude]} color="#ff0000" />
        <Marker width={50} anchor={[latitude, longitude-10]} color="#ff0000" />
        <ZoomControl />
      </Map>
      
    </div>
  );
}

export default App;
