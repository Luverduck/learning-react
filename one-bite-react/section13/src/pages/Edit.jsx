import { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { DiaryStateContext, DiaryDispatchContext } from '../App';

import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';

const Edit = () => {

  // 동적 경로에 포함된 요청 매개변수 반환
  const params = useParams();
  
  // useNavigate로부터 navigate 함수 반환
  const nav = useNavigate();

  // DiaryStateContext의 Provider에 전달된 data 함수 반환
  const data = useContext(DiaryStateContext);
  
  // DiaryDispatchContext의 Provider에 전달된 onDelete, onUpdate 함수 반환
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  // 삭제 버튼의 onClick 이벤트에 대한 이벤트 핸들러 정의
  const onClickDelete = () => {
    if (window.confirm('일기를 정말 삭제할까요? 다시 복구되지 않아요!')) {
      onDelete(params.id);
      nav('/', { replace: true });
    };
  };

  // useState를 통해 현재 일기 데이터를 State로 정의
  const [currentDiaryItem, setCurrentDiaryItem] = useState();

  // useEffect를 통해 마운트 후 수정할 일기 데이터를 현재 일기 데이터로 설정
  useEffect(() => {
    // data에서 동적 경로에 포함된 ID의 일기 데이터 반환
    const currentDiaryItem = data.find((item) => String(item.id) === String(params.id));
    // 해당하는 일기 데이터가 없을 경우 경고창 출력 및 Home 페이지로 이동
    if(!currentDiaryItem) {
      window.alert('존재하지 않는 일기입니다.');
      nav('/', { replace:true });
    }
    // 동적 경로에 포함된 ID의 일기 데이터를 현재 일기 데이터로 설정
    setCurrentDiaryItem(currentDiaryItem);
  }, [params.id]);

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