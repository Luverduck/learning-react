export const getStringedDate = (targetDate) => {

  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  // 월, 일이 10 이하일 경우 '01' 형태로 변환
  if (month < 10) month = `0${month}`;
  if (date < 10) date = `0${date}`;
  
  // 날짜를 'YYYY-MM-DD' 형태의 문자열 반환
  return `${year}-${month}-${date}`;
};