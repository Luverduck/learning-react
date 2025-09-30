import './Editor.css';
import EmotionItem from './EmotionItem';
import Button from './Button';

const emotionList = [
  {emotionId: 1, emotionName: '완전 좋음'},
  {emotionId: 2, emotionName: '좋음'},
  {emotionId: 3, emotionName: '그럭저럭'},
  {emotionId: 4, emotionName: '나쁨'},
  {emotionId: 5, emotionName: '완전 나쁨'},
];

const Editor = () => {

  // 오늘의 감정 선택 테스트
  const emotionId = 5;

  return (
    <div className='Editor'>
      {/** 오늘의 날짜 영역 */}
      <section className='date_section'>
        <h4>오늘의 날짜</h4>
        <input type='date' />
      </section>
      {/** 오늘의 감정 영역 */}
      <section className='emotion_section'>
        <h4>오늘의 감정</h4>
        <div className='emotion_list_wrapper'>
          {emotionList.map((item) => <EmotionItem key={item.emotionId} {...item} isSelected={item.emotionId === emotionId} />)}
        </div>
      </section>
      {/** 오늘의 일기 영역 */}
      <section className='content_section'>
        <h4>오늘의 일기</h4>
        <textarea placeholder='오늘은 어땟나요?' />
      </section>
      {/** 버튼 영역 */}
      <section className='button_section'>
        <Button text={'취소하기'} />
        <Button text={'작성완료'} type='POSITIVE' />
      </section>
    </div>
  );
};

export default Editor;