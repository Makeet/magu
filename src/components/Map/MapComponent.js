import React, { useEffect } from "react";
import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";

const { Tmapv2 }=window
export default function MapComponent() {
  let map;
  function createMap() {
    map = new window.Tmapv2.Map("TMapContainer", {
      center: new window.Tmapv2.LatLng(37.566481622437934, 126.98502302169841),
      width: "100vw",
      height: "100vh",
      zoom: 15,
      https: true,
    });
    console.log("tmap!!!!")
  }
  useEffect(() => {
    createMap();
    
    // // TODO - 기기에서 현 위치 조회 안 될 때 작업해야함
    // // TODO - 모바일 기기에서도 처리 가능하도록 https:// 환경으로 변경필요
  }, [map]);

  return (
    <div
      id="TMapContainer"
    />
  );
}
