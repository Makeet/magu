import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as FaStarRegular } from "@fortawesome/free-regular-svg-icons";
import "./FavoriteComponent.css";

const FavoriteIconComponent = (props) => {
  return (
    <FontAwesomeIcon
      icon={props.iconState ? faStar : FaStarRegular}
      className="favoritesIcon"
    />
  );
};
export default FavoriteIconComponent;
