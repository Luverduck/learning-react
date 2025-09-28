import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";

import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

// 기준 날짜(달)에 작성된 일기를 반환하는 함수
const getMonthlyData = (pivotDate, data) => {
  // 기준 날짜(달)의 시작 (년, 월, 일, 시, 분, 초)
  const beginTime = new Date(
    pivotDate.getFullYear(), 
    pivotDate.getMonth(), 
    1, 
    0, 
    0, 
    0
  ).getTime();
  // 기준 날짜(달)의 끝 (년, 월, 일, 시, 분, 초)
  const endTime = new Date(
    pivotDate.getFullYear(), 
    pivotDate.getMonth() + 1, 
    0, 
    23, 
    59, 
    59
  ).getTime();
  // 기준 날짜(달)에 작성된 일기만 필터링하여 반환
  return data.filter((item) => {
    return item.createdDate >= beginTime && item.createdDate <= endTime
  });
};

const Home = () => {

  // 현재 기준 날짜를 State로 정의
  const [pivotDate, setPivotDate] = useState(new Date());

  // 모든 일기 리스트
  const data = useContext(DiaryStateContext);

  // 기준 날짜에 작성된 일기
  const monthlyData = getMonthlyData(pivotDate, data);
  
  // 기준 날짜의 달을 이전 달로 변경
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  // 기준 날짜의 달을 다음 달로 변경
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  return (
    <div>
      {/** 헤더 영역 */}
      <Header 
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text={'<'} onClick={onDecreaseMonth} />}
        rightChild={<Button text={'>'} onClick={onIncreaseMonth} />}
      />
       {/** 본문 영역 */}
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;