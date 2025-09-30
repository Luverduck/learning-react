import { useContext } from 'react';
import { DiaryDispatchContext } from '../App'
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';

const New = () => {

  // useContext를 통해 DiaryDispatchContext의 Provider에 전달한 onCreate 함수 반환
  const { onCreate } = useContext(DiaryDispatchContext);

  // useNavigate를 통해 navigate 함수 반환
  const nav = useNavigate();

  // 작성 완료 버튼의 onClick 이벤트에 대한 이벤트 핸들러
  const onSubmit = (input) => {
    onCreate(
      input.createdDate.getTime(), 
      input.emotionId, 
      input.content
    );
    // 새 일기 추가 후 Home 페이지로 이동 및 브라우저의 이전 히스토리 삭제
    nav('/', { replace: true });
  };

  return (
    <div>
      <Header 
        title={'새 일기 쓰기'}
        leftChild={
          <Button 
            text={'< 뒤로 가기'}
            onClick={() => nav(-1)} 
          />
        }
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;