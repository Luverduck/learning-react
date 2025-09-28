import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./DiaryList.css";
import Button from "./Button";
import DiaryItem from "./DiaryItem";

const DiaryList = ({data}) => {

  // 정렬 타입을 State로 정의
  const [sortType, setSortType] = useState('latest');

  // 정렬 타입 변경에 대한 set 함수
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  // 정렬 타입에 따라 일기 리스트를 정렬하는 함수
  const getSortedData = (data) => {
    return data.toSorted((a, b) => {
      if(sortType === 'oldest') 
        return a.createdDate - b.createdDate;
      else 
        return b.createdDate - a.createdDate;
    });
  };

  // 현재 정렬 타입으로 정렬된 일기 리스트
  const sortedData = getSortedData(data);

  // 페이지 라우팅을 위한 navigate 함수
  const nav = useNavigate();

  return (
    <div className='DiaryList'>
      {/** 메뉴바 영역 */}
      <div className='menu_bar'>
        {/** 정렬 버튼 */}
        <select onChange={onChangeSortType}>
          <option value={'latest'}>최신순</option>
          <option value={'oldest'}>오래된 순</option>
        </select>
        {/** 새 일기 버튼 */}
        <Button 
          text={'새로운 일기 쓰기'} 
          type={'POSITIVE'} 
          onClick={() => { return nav('/new')}}
        />
      </div>
      {/** 일기 리스트 영역 */}
      <div className='list_wrapper'>
        {/** 정렬된 일기 리스트 렌더링 */}
        {sortedData.map((item) => {return <DiaryItem key={item.id} {...item} />})}
      </div>
    </div>
  );
};

export default DiaryList;