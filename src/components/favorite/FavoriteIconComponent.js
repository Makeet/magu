import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as FaStarRegular } from "@fortawesome/free-regular-svg-icons";
import "./FavoriteComponent.css";

const FavoriteIconComponent = (props) => {
  const [isSelected, setFavorite] = useState(false);
  const toggleFavoriteIcon = () => {
    setFavorite((isSelected) => !isSelected);
  };
  useEffect(() => {
    setFavorite(props.buttonState)
  }, [props.buttonState]);
  
  return (
    <div onClick={toggleFavoriteIcon}>
      <FontAwesomeIcon
        icon={isSelected ? faStar : FaStarRegular}
        className="favoritesIcon"
      />
    </div>
  );
};
export default FavoriteIconComponent;
