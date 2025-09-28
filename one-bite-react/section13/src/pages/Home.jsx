import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

const Home = () => {  
  return (
    <div>
      {/** 헤더 영역 */}
      <Header 
        title={'2024년 2월'} 
        leftChild={<Button text={'<'}/>} 
        rightChild={<Button text={'>'} />}
      />
       {/** 본문 영역 */}
      <DiaryList />
    </div>
  );
};

export default Home;