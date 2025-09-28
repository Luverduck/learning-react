import "./DiaryList.css";
import Button from "./Button";
import DiaryItem from "./DiaryItem";

const DiaryList = () => {
  return (
    <div className='DiaryList'>
      {/** 메뉴바 영역 */}
      <div className='menu_bar'>
        {/** 정렬 버튼 */}
        <select>
          <option value={'latest'}>최신순</option>
          <option value={'oldest'}>오래된 순</option>
        </select>
        {/** 새 일기 버튼 */}
        <Button text={'새로운 일기 쓰기'} type={'POSITIVE'}/>
      </div>
      {/** 일기 리스트 영역 */}
      <div className='list_wrapper'>
        <DiaryItem />
      </div>
    </div>
  );
};

export default DiaryList;