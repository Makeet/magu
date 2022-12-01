import MainPage from './pages/MainPage';
import React, { useEffect, useState } from "react";
import './App.css';
import useCurrentLocation from './utils/hooks/useCurrentLocation';
import { geolocationOptions } from './utils/constants/geolocationOptions';
function App() {

  const [map, setMap] = useState(null);
  let zoom = 10;

  if(window.screen.width >= 768) {
    zoom = 15;
  }
  
  
  function createMap(lat, lng) { 
    setMap(new window.Tmapv2.Map("TMapContainer", {
      center: new window.Tmapv2.LatLng(lat, lng),
      width: "100%",
      height: "100vh",
      zoom: zoom,
      https: true,
    }));
   
  }
  const { location: currentLocation, error: currentError  } = useCurrentLocation(geolocationOptions);
  useEffect(()=>{
    if (!currentLocation) return;
    if (currentError) alert(currentError);
    // console.log(currentLocation.latitude, currentLocation.longitude);
    createMap(currentLocation.latitude, currentLocation.longitude)
  },[currentLocation])

  return (
    <div className="App">
      <MainPage  map={map} />
      <div id="TMapContainer" />
    </div>
  );
}

export default App;
