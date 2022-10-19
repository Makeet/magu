import React, { useEffect } from 'react';
import "./SearchComponent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import FavoriteIconComponent from '../favorite/FavoriteIconComponent';
// import FavoriteComponent from '../favorite/FavoriteComponent';

export default function SearchComponent() {

  // input에서 주소 입력 후에 엔터를 누르면 밑에 기록으로 추가

    return (
      <div>
        <div id="search_box">
          <FontAwesomeIcon icon={faBars} className="menu_bar_icon" />
          <input type="text" id="search_box_input" placeholder="지도 검색" />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search_icon" />
        </div>
        <div id="search_log_box">
          <ul className="search_log">
            <li>
              <FontAwesomeIcon icon={faClock} className="log_icon" />
              <p>log~~~~1</p>
              <span className="favorite_icon" >
                <FavoriteIconComponent />
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faClock} className="log_icon" />
              <p>log~~~~2</p>
              <span className="favorite_icon" >
                <FavoriteIconComponent />
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faClock} className="log_icon" />
              <p>log~~~~3</p>
              <span className="favorite_icon" >
                <FavoriteIconComponent />
              </span>
            </li>
          </ul>
        </div>
      </div>
      );

}