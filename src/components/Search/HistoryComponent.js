import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import FavoriteIconComponent from '../Favorite/FavoriteIconComponent';


export default function HistoryComponent({keywords, onClearKeywords, onRemoveKeyword, onClickLog}) {

    // list maximum size 5
    const listkeywords = keywords.slice(0, 5).map((keyword) =>
        (
            <li onClick={() => {onClickLog(keyword.text)}}>
                <FontAwesomeIcon icon={faClock} className="log_icon" />
                <p>{keyword.text}</p>
                <button class="remove_btn btn" onClick={() => {onRemoveKeyword(keyword.id)}}>X</button>
                <span className="favorite_icon" >
                    <FavoriteIconComponent />
                </span>
            </li>
        )

    
  );

    //검색 기록이 있을 경우에만 clear_box가 생기도록 수정


  return (
    <div id="search_log_box">
        <ul className="search_log">
            {listkeywords}
        </ul>
        <div className="clear_box">
            <button className="clear_btn btn" onClick={onClearKeywords}>전체 삭제</button>
        </div>
    </div>
  )
}