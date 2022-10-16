import React, { useEffect } from 'react';
import "./SearchComponent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchComponent() {

    return (
        <div id="search_box">
          <FontAwesomeIcon icon={faBars} className="menu_bar_icon" />
          <input type="text" id="search_box_input" placeholder="지도 검색" />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search_icon" />
        </div>
      );

}