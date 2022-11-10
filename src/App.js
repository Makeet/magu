import MainPage from './pages/MainPage';
import React, { useEffect, useState } from "react";
import './App.css';

function App() {

  const [map, setMap] = useState(null);
  const lng=126.98502302169841;
  const lat=37.566481622437934;
  let zoom = 10;

  if(window.screen.width >= 768) {
    zoom = 15;
  }
  
  
  function createMap(lng, lat) { 
    setMap(new window.Tmapv2.Map("TMapContainer", {
      center: new window.Tmapv2.LatLng(lat, lng),
      width: "100%",
      height: "100vh",
      zoom: zoom,
      https: true,
    }));
   
  }

  useEffect(() => {

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        lng=position.coords.longitude
        lat=position.coords.latitude
      });
    }
    else { 
      alert("현재 위치를 찾을 수 없습니다.")
    }
    createMap(lng, lat)
  }, []);


  return (
    <div className="App">
      <MainPage  map={map} />
      <div id="TMapContainer" />
    </div>
  );
}

export default App;
