import { useNavigate } from "react-router-dom";

import './DiaryItem.css';
import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";

const DiaryItem = ({id, emotionId, createdDate, content}) => {

  // 페이지 라우팅을 위한 navigate 함수
  const nav = useNavigate();

  return (
    <div className='DiaryItem'>
      {/** 감정 이미지 영역 */}
      <div 
        className={`img_section img_section_${emotionId}`} 
        onClick={() => {return nav(`/diary/${id}`)}}
      >
        <img src={getEmotionImage(emotionId)} />
      </div>
      {/** 일기 내용 영역 */}
      <div 
        className='info_section' 
        onClick={() => {return nav(`/diary/${id}`)}}
      >
        <div className='created_date'>
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className='content'>{content}</div>
      </div>
      {/** 일기 버튼 영역 */}
      <div className='button_section'>
        <Button 
          text={'수정하기'} 
          onClick={() => {return nav(`/edit/${id}`)}}
        />
      </div>
    </div>
  );
};

export default DiaryItem;