import React, { useState } from "react";
import "./FavoriteComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as FaStarRegular } from "@fortawesome/free-regular-svg-icons";

export default function FavoriteComponent() {
  const [isSelected, setFavorite] = useState(false);
  const toggleFavoriteButton = () =>{
    setFavorite(isSelected => !isSelected)
  }
  return (
    <>
      <div className="favoritesWrapper">
        <button className="favoriteButton" onClick={toggleFavoriteButton}>
          <FontAwesomeIcon icon={isSelected?faStar:FaStarRegular} className="favoritesIcon" />
        </button>
      </div>
      
    </>
  );
}
