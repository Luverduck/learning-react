import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { DiaryDispatchContext } from '../App';

import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';

import useDiary from '../hooks/useDiary';

const Edit = () => {

  // 동적 경로에 포함된 요청 매개변수 반환
  const params = useParams();
  
  // useNavigate를 통해 navigate 함수 반환
  const nav = useNavigate();
  
  // DiaryDispatchContext의 Provider에 전달된 onDelete, onUpdate 함수 반환
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  // useDiary를 통해 일기 ID에 해당하는 일기 데이터 반환
  const currentDiaryItem = useDiary(params.id);

  // 삭제 버튼의 onClick 이벤트에 대한 이벤트 핸들러 정의
  const onClickDelete = () => {
    if (window.confirm('일기를 정말 삭제할까요? 다시 복구되지 않아요!')) {
      onDelete(params.id);
      nav('/', { replace: true });
    };
  };

  // 작성 완료 버튼의 onClick 이벤트에 대한 이벤트 핸들러
  const onSubmit = (input) => {
    if(window.confirm('일기를 정말 수정할까요?')) {
      onUpdate(
        params.id, 
        input.createdDate.getTime(), 
        input.emotionId, 
        input.content,
      );
      nav('/', { replace:true });
    }
  };

  return (
    <div>
      <Header
        title={'일기 수정하기'}
        leftChild={
          <Button
            text={'< 뒤로 가기'}
            onClick={() => nav(-1)}
          />
        }
        rightChild={
          <Button
            text={'삭제 하기'}
            type={'NEGATIVE'}
            onClick={onClickDelete}
          />
        }
      />
      {/** 수정할 일기 데이터 전달 */}
      <Editor initData={currentDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;