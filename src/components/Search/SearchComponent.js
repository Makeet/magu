import React, { useEffect, useState } from 'react';
import "./SearchComponent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HistoryComponent from './HistoryComponent';

const { Tmapv2 }=window
export default function SearchComponent({map}) {

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
      document.getElementById("search_box_input").focus();
    }else { // 검색어가 있을 경우
      //스토리지에 검색어 추가
      handleAddKeyword(search);
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

  //마커의 옵션을 설정해주는 함수
	function addMarker(lonlatoption){
		// 마커 생성
		const marker = new Tmapv2.Marker({
			position: new Tmapv2.LatLng(lonlatoption.lonlat.latitude(),lonlatoption.lonlat.longitude()), //Marker의 중심좌표 설정.
			map: map, //Marker가 표시될 Map 설정..
			title : lonlatoption.title //마우스 위치시 출력할 타이틀
		});
	}

  //검색어로 주소 검색
  const handleSearchPOI = (e) => {
    e.preventDefault();

    if(search === null || search === '') {
      alert("주소를 입력해주세요.");
      document.getElementById("search_box_input").focus();
    }else { // 검색어가 있을 경우
      //스토리지에 검색어 추가
      handleAddKeyword(search);
    }
      
    const center = map.getCenter();//map의 중심 좌표 값을 받아 옵니다.
    const optionObj = {
      reqCoordType:"WGS84GEO", //요청 좌표계 옵셥 설정입니다.
      resCoordType:"WGS84GEO",  //응답 좌표계 옵셥 설정입니다.
      centerLon:126.98702028,  //POI검색시 중앙좌표의 경도입니다.
      centerLat:37.56520450  //POI검색시 중앙좌표의 위도입니다.
    };
  
    const params = {
      onComplete:onComplete,
      onProgress:onProgress,
      onError:onError
  };

    const tData = new Tmapv2.extension.TData();
    tData.getPOIDataFromSearchJson(encodeURIComponent(search),optionObj,params);//encodeURIComponent함수로 해당 파라메터 값을 처리합니다.

  }
  
  //POI검색
  function onComplete() {
    console.log("onComplete");
    console.log(this._responseData); //json로 데이터를 받은 정보들을 콘솔창에서 확인할 수 있습니다.
      
    if(this._responseData.searchPoiInfo.pois.poi != ''){
      this._responseData.searchPoiInfo.pois.poi.map(function(poi){
        const name = poi.name;
        const id = poi.id;
        const lon = poi.frontLon;
        const lat = poi.frontLat;
        const lonlatoption = {
          title : name,//마커 라벨 text 설정
          lonlat: new Tmapv2.LatLng(lat,lon)//마커 라벨 좌표 설정
        }
        addMarker(lonlatoption);
      });
  }else {
      alert('검색결과가 없습니다.');
  }
    map.setCenter(new Tmapv2.LatLng(this._responseData.searchPoiInfo.pois.poi[0].frontLat, this._responseData.searchPoiInfo.pois.poi[0].frontLon));
    map.setZoom(14);

  }
  
  //데이터 로드중 실행하는 함수
  function onProgress(){
    // console.log("onProgress");
  }
  
  //데이터 로드 중 에러가 발생시 실행하는 함수
  function onError(){
    console.log("onError");
  }

  


    return (
      <div>
        <div id="search_box">
          <FontAwesomeIcon icon={faBars} className="menu_bar_icon" />
          <form onSubmit={e => handleSearchPOI(e)}>
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