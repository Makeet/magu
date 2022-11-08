import React, { useEffect, useState } from 'react';
import "./SearchComponent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCommentsDollar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HistoryComponent from './HistoryComponent';

export default function SearchComponent() {

  //검색어
  const [search, setSearch] = useState("");
  
  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }
  
  const onSearch = (e) => {
    e.preventDefault();
    if(search === null || search === '') {
      alert("주소를 입력해주세요.");
    }else { // 검색어가 있을 경우
      handleAddKeyword(search);
      //input에 입력된 글자 제거
      setSearch("");
    }
  }

  // 로컬 스토리지에 검색어 저장
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem('keywords') || '[]'),
  )

  //keyword에 변화가 일어날때만 랜더링
  useEffect(() => {
    //array 타입을 string형태로 바꾸기 위해 json.stringfy를 사용
    localStorage.setItem('keywords', JSON.stringify(keywords))
  }, [keywords])

  //검색어 추가
  const handleAddKeyword = (text) => {
    // console.log('text', text)
    const newKeyword = {
      id: Date.now(),
      text: text,
    }
    setKeywords([newKeyword, ...keywords])
  }

  //검색어 삭제
  const handleRemoveKeyword = (id) => {
    const nextKeyword = keywords.filter((thisKeyword) => {
      return thisKeyword.id != id
    })
    setKeywords(nextKeyword)
  }

  //검색어 전체 삭제
  const handleClearKeywords = () => {
    setKeywords([])
  }

    return (
      <div>
        <div id="search_box">
          <FontAwesomeIcon icon={faBars} className="menu_bar_icon" />
          <form onSubmit={e => onSearch(e)}>
            <input type="text" id="search_box_input" placeholder="지도 검색" onChange={onChangeSearch} value={search} />
            <button type="submit" className="submit_btn btn">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="search_icon" />
            </button>
          </form>
          <HistoryComponent 
            keywords={keywords}
            onClearKeywords={handleClearKeywords}
            onRemoveKeyword={handleRemoveKeyword}
          />
        </div>
      </div>
      );

}