import './DiaryItem.css';
import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";

const DiaryItem = () => {

  // 감정 이미지 영역 테스트용 emotionId
  const emotionId = 3;

  return (
    <div className='DiaryItem'>
      {/** 감정 이미지 영역 */}
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} />
      </div>
      {/** 일기 내용 영역 */}
      <div className='info_section'>
        <div className='created_date'>
          {new Date().toLocaleDateString()}
        </div>
        <div className='content'>
          일기 컨텐츠
        </div>
      </div>
      {/** 일기 버튼 영역 */}
      <div className='button_section'>
        <Button text={'수정하기'}/>
      </div>
    </div>
  );
};

export default DiaryItem;