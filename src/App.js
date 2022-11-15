import MainPage from './pages/MainPage';
import React, { useEffect, useState } from "react";
import './App.css';

const { Tmapv2 }=window
function App() {

  const [map, setMap] = useState(null);
  let zoom = 10;

  if(window.screen.width >= 768) {
    zoom = 15;
  }
  
  
  function createMap(lng, lat) { 
    setMap(new Tmapv2.Map("TMapContainer", {
      center: new window.Tmapv2.LatLng(lat, lng),
      width: "100%",
      height: "100vh",
      zoom: zoom,
      https: true,
    }));

  }

  useEffect(() => {
    const lng=126.98502302169841;
    const lat=37.566481622437934;

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("true")
        const lng=position.coords.longitude
        const lat=position.coords.latitude
        console.log(lng, lat)
        createMap(lng, lat)
      });
    }
    else { 
      alert("현재 위치를 찾을 수 없습니다.")
      createMap(lng, lat)
    }
  }, []);


  return (
    <div className="App">
      <MainPage  map={map} />
      <div id="TMapContainer" />
    </div>
  );
}

export default App;
