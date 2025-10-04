import { useParams, useNavigate } from "react-router-dom";

import Header from '../components/Header';
import Button from '../components/Button';
import Viewer from '../components/Viewer';

import useDiary from '../hooks/useDiary';
import usePageTitle from '../hooks/usePageTitle';
import { getStringedDate } from '../util/get-stringed-date';

const Diary = () => {

  // 동적 경로에 포함된 요청 매개변수 반환
  const params = useParams();

  // 컴포넌트 호출 시 페이지 타이틀 변경
  usePageTitle(`${params.id}번 일기`);

  // useNavigate를 통해 navigate 함수 반환
  const nav = useNavigate();

  // useDiary를 통해 일기 ID에 해당하는 일기 데이터 반환
  const currentDiaryItem = useDiary(params.id);

  // useDiary 최초로 호출할 때 currentDiaryItem이 undefined인 경우에 대한 처리
  if (!currentDiaryItem) {
    return (<div>데이터 로딩 중...!</div>);
  };

  // 일기 데이터를 구조 분해 할당
  const { createdDate, emotionId, content } = currentDiaryItem;

  // 일기 제목
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={
          <Button
            text={'< 뒤로 가기'}
            onClick={() => nav(-1)}
          />
        }
        rightChild={
          <Button
            text={'수정하기'}
            onClick={() => nav(`/edit/${params.id}`)}
          />
        }
      />
      {/** 표시할 일기 데이터 전달 */}
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;