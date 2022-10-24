import React, { useEffect } from "react";
import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";

export default function MapComponent() {
  useEffect(() => {
    const script = document.createElement("script");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let pos = position.coords;
        script.innerHTML =
          `         
          function initTmap() {
              var map = new Tmapv2.Map("TMapApp", {
                  center: new Tmapv2.LatLng(` +
          pos.latitude +
          `,` +
          pos.longitude +
          `),
                  width: "100%",
                  height: "100%",
                  zoom:15
              });
          }
          
          initTmap();
     `;
      });
    }
    // TODO -기기에서 현 위치 조회 안 될 때 작업해야함
    script.type = "text/javascript";
    script.async = "async";
    document.head.appendChild(script);
  }, []);

  return (
    <div
      id="TMapApp"
      style={{
        height: "100%",
        width: "100%",
        position: "fixed",
      }}
    />
  );
}
