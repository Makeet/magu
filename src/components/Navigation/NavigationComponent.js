import React from "react";
import "./NavigationComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusSimple,
  faCar,
  faTrainSubway,
  faPersonWalking,
} from "@fortawesome/free-solid-svg-icons";
const NavigationComponent = () => {
  return (
    <div className="navigation">
      <div className="icons car">
        <FontAwesomeIcon icon={faCar} className="iconFont" />
      </div>
      <div className="icons bus">
        <FontAwesomeIcon icon={faBusSimple} className="iconFont" />
      </div>
      <div className="icons subway">
        <FontAwesomeIcon icon={faTrainSubway} className="iconFont" />
      </div>

      <div className="icons walking">
        <FontAwesomeIcon icon={faPersonWalking} className="iconFont" />
      </div>
    </div>
  );
};
export default NavigationComponent;
