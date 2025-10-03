import './Viewer.css';

import { emotionList } from '../util/constants';
import { getEmotionImage } from '../util/get-emotion-image';

const Viewer = ({ emotionId, content }) => {

  // 감정 ID에 해당하는 감정 데이터 반환
  const emotionItem = emotionList.find((item) => String(item.emotionId) === String(emotionId));

  return (
    <div className='Viewer'>
      {/** 오늘의 감정 영역 */}
      <section className='img_section'>
        <h4>오늘의 감정</h4>
        <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
          <img src={getEmotionImage(emotionId)} />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      {/** 오늘의 일기 영역 */}
      <section className='content_section'>
        <h4>오늘의 일기</h4>
        <div className='content_wrapper'>
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;