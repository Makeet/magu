import React from 'react';
import MapComponent from '../components/Map/MapComponent';
import SearchComponent from '../components/Search/SearchComponent';

export default function MainPage() {
    return (
        <div style={{
            position: "relative",
          }}>
            <SearchComponent />
            <MapComponent/>
        </div>
    )
}
