import { useEffect } from 'react';

const usePageTitle = (title) => {
  useEffect(() => {
    // 태그 이름이 title인 모든 태그 중 첫 번째 태그 선택
    // * 관례상 DOM 요소를 저장하는 변수 앞에 $를 붙인다.
    const $title = document.getElementsByTagName('title')[0];
    // title 태그 내부의 텍스트 변경
    $title.innerText = title;
  }, [title]);
};

export default usePageTitle;