import React from 'react';
import MapComponent from '../components/Map/MapComponent';
import SearchComponent from '../components/Search/SearchComponent';
import FavoriteComponent from '../components/favorite/FavoriteButtonComponent';
export default function MainPage() {
    return (
        <div style={{
            position: "relative",
          }}>
            <SearchComponent />
            <MapComponent/>
            <FavoriteComponent/>
        </div>
    )
}
