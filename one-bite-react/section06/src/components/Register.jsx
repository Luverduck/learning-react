import { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('이름');
  const [birth, setBirth] = useState('');
  const [country, setCountry] = useState('');
  const [biography, setBiography] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
  }

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  }

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  }

  const onChangeBiography = (e) => {
    setBiography(e.target.value);
  }

  return (
    <div>
      <div>
        <input 
          value={name}
          onChange={onChangeName} 
          placeholder={'이름'} 
        />  
      </div>
      <div>
        <input 
          value={birth}
          onChange={onChangeBirth}
          type='date' 
        />
      </div>
      <div>
        <select 
          value={country}
          onChange={onChangeCountry}
        >
          <option value=''></option>
          <option value='kr'>한국</option>
          <option value='us'>미국</option>
          <option value='jp'>일본</option>
        </select>
      </div>
      <div>
        <textarea 
          value={biography} 
          onChange={onChangeBiography}
        />
      </div>
    </div>
  );
}

export default Register;