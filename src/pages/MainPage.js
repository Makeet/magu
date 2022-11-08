import React from 'react';
import MapComponent from '../components/Map/MapComponent';
import SearchComponent from '../components/Search/SearchComponent';
import FavoriteComponent from '../components/Favorite/FavoriteButtonComponent';
import NavigationComponent from '../components/Navigation/NavigationComponent';
export default function MainPage({map}) {
    // const props = map;

    return (
        <div style={{
            position: "relative",
          }}>
            <SearchComponent map={map} />
            {/* <MapComponent/> */}
            <FavoriteComponent/>
            <NavigationComponent/>
        </div>
    )
}
