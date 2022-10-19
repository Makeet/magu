import React, { useState } from "react";
import "./FavoriteComponent.css";
import FavoriteIcon from "./FavoriteIconComponent";

const FavoriteComponent = () => {
  const [isSelected, setFavorite] = useState(false);
  const toggleFavoriteButton = () =>{
    setFavorite(isSelected => !isSelected)
  }
  return (
    <>
      <div className="favoritesWrapper">
        <button className="favoriteButton" onClick={toggleFavoriteButton}>
          <FavoriteIcon buttonState={isSelected}/>
        </button> 
      </div>
      
    </>
  );
}

export default FavoriteComponent;