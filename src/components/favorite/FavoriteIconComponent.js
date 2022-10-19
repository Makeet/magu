import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as FaStarRegular } from "@fortawesome/free-regular-svg-icons";
import "./FavoriteComponent.css";

const FavoriteIconComponent = (props) => {
  const [isSelected, setFavorite] = useState(false);
  const toggleFavoriteIcon = () => {
    setFavorite((isSelected) => !isSelected);
  };
  return (
    <div onClick={toggleFavoriteIcon}>
      <FontAwesomeIcon
        icon={props.buttonState|isSelected ? faStar : FaStarRegular}
        className="favoritesIcon"
      />
    </div>
  );
};
export default FavoriteIconComponent;
