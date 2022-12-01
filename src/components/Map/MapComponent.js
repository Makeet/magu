import React, { useEffect } from "react";

const { Tmapv2 }=window
export default function MapComponent() {
  let map;

  function createMap(lng, lat) { 
    map = new window.Tmapv2.Map("TMapContainer", {
      center: new window.Tmapv2.LatLng(lat, lng),
      width: "100vw",
      height: "100vh",
      zoom: 17,
      https: true,
    });
    //현 위치 마커 생성
    const marker = new Tmapv2.Marker({
			position: new Tmapv2.LatLng(lat, lng), //Marker의 중심좌표 설정.
			map: map //Marker가 표시될 Map 설정..
		});
  }

  useEffect(() => {
    if(!navigator.geolocation){
      alert("위치를 찾을 수 없습니다. 기본 위치로 안내합니다.")
      const lng=126.98502302169841;
      const lat=37.566481622437934;
      createMap(lat, lng)
    }
    else { 
      navigator.geolocation.getCurrentPosition((position) => {
      const lng=position.coords.longitude
      const lat=position.coords.latitude
      createMap(lng, lat)
    });
  }
    
    // // TODO - 기기에서 현 위치 조회 안 될 때 작업해야함
    // // TODO - 모바일 기기에서도 처리 가능하도록 https:// 환경으로 변경필요
  }, []);

  return (
    <div
      id="TMapContainer"
    />
  );
}
