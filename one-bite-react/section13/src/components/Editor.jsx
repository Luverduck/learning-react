import './Editor.css';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import EmotionItem from './EmotionItem';
import Button from './Button';

const emotionList = [
  {emotionId: 1, emotionName: '완전 좋음'},
  {emotionId: 2, emotionName: '좋음'},
  {emotionId: 3, emotionName: '그럭저럭'},
  {emotionId: 4, emotionName: '나쁨'},
  {emotionId: 5, emotionName: '완전 나쁨'},
];

// Date 타입을 String 타입으로 변환하는 함수
const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();
  // 월, 일이 10 이하일 경우 '01' 형태로 변환
  if(month < 10) month = `0${month}`;
  if(date < 10) date = `0${date}`;
  // 날짜를 'YYYY-MM-DD' 형태의 문자열 반환
  return `${year}-${month}-${date}`;
}

const Editor = ({ initData, onSubmit }) => {

  // useState를 통해 사용자 입력을 State로 정의
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: '',
  });

  // 입력 요소의 onChange 이벤트에 대한 이벤트 핸들러
  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // 이벤트 발생 대상이 오늘의 날짜일 경우
    if (name === 'createdDate') {
      value = new Date(value);
    }
    // 사용자 입력 State 변경
    setInput({
      ...input,
      [name]: value,
    });
  };

  // 부모 컴포넌트로부터 전달받은 onSubmit 함수를 실행하는 함수
  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  // useNavigate를 통해 navigate 함수 반환
  const nav = useNavigate();

  // useEffect를 통해 마운트 후 수정할 일기 데이터를 사용자 입력으로 설정
  useEffect(() => {
    if(initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      })
    }
  }, [initData]);

  return (
    <div className='Editor'>
      {/** 오늘의 날짜 영역 */}
      <section className='date_section'>
        <h4>오늘의 날짜</h4>
        <input 
          type='date' 
          name='createdDate'
          value={getStringedDate(input.createdDate)}
          onChange={onChangeInput}
        />
      </section>
      {/** 오늘의 감정 영역 */}
      <section className='emotion_section'>
        <h4>오늘의 감정</h4>
        <div className='emotion_list_wrapper'>
          {emotionList.map((item) => (
            <EmotionItem 
              key={item.emotionId} 
              {...item} 
              isSelected={item.emotionId === input.emotionId}
              onClick={() => 
                onChangeInput({
                  target: {
                    name: 'emotionId',
                    value: item.emotionId,
                  }
                })
              } 
            />
          ))}
        </div>
      </section>
      {/** 오늘의 일기 영역 */}
      <section className='content_section'>
        <h4>오늘의 일기</h4>
        <textarea 
          name='content'
          value={input.content}
          onChange={onChangeInput}
          placeholder='오늘은 어땟나요?' 
        />
      </section>
      {/** 버튼 영역 */}
      <section className='button_section'>
        <Button 
          text={'취소하기'}
          onClick={() => nav(-1)} 
        />
        <Button 
          text={'작성완료'} 
          type='POSITIVE'
          onClick={onClickSubmitButton} 
        />
      </section>
    </div>
  );
};

export default Editor;