import { useEffect } from 'react';

const Even = () => {
  // 언마운트 (Unmount)
  useEffect(() => {
    return () => {
      console.log('unmount');
    };
  }, []);
  
  return (
    <div>짝수 입니다.</div>
  );
};

export default Even;