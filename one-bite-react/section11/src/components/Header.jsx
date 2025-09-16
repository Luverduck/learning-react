import './Header.css';
import { memo } from 'react';

const Header = () => {
  return (
    <div className='Header'>
      <h3>오늘은 📅</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

// Header 컴포넌트가 메모이징된 컴포넌트 내보내기
// export default Header;
export default memo(Header);