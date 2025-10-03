import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";

const useDiary = (id) => {

  // DiaryStateContext의 Provider에 전달된 data 함수 반환
  const data = useContext(DiaryStateContext);
  
  // useState를 통해 현재 일기 데이터를 State로 정의
  const [currentDiaryItem, setCurrentDiaryItem] = useState();

  // useNavigate를 통해 navigate 함수 반환
  const nav = useNavigate();

  // useEffect를 통해 마운트 후 수정할 일기 데이터를 현재 일기 데이터로 설정
  useEffect(() => {
    // data에서 동적 경로에 포함된 ID의 일기 데이터 반환
    const currentDiaryItem = data.find((item) => String(item.id) === String(id));
    // 해당하는 일기 데이터가 없을 경우 경고창 출력 및 Home 페이지로 이동
    if(!currentDiaryItem) {
      window.alert('존재하지 않는 일기입니다.');
      nav('/', { replace:true });
    }
    // 동적 경로에 포함된 ID의 일기 데이터를 현재 일기 데이터로 설정
    setCurrentDiaryItem(currentDiaryItem);
  }, [id]);

  return currentDiaryItem;
};

export default useDiary;