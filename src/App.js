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
      width: "100vw",
      height: "100vh",
      zoom: zoom,
      https: true,
    }));
   
  }

  useEffect(() => {
    //현재 위치를 찾을 수 없을 경우
    if(!navigator.geolocation){
      alert("현재 위치를 찾을 수 없습니다. 기본 위치로 안내합니다.")
      const lng=126.98502302169841;
      const lat=37.566481622437934;
      createMap(lat, lng)
    }
    else { //현재 위치를 찾을 수 있는 경우
      navigator.geolocation.getCurrentPosition((position) => {
        const lng=position.coords.longitude
        const lat=position.coords.latitude
        createMap(lng, lat)
      });
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
