import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import { useState } from 'react';
import { getUserInfo } from '../api/getUserInfo';

export default function MyPage({ isLogin }) {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  useEffect(() => {
    if (!isLogin) navigate('/');

    const initUserName = async () => {
      const newName = await getUserInfo();
      console.log({ newName });
      setName(JSON.stringify(newName.data));
    };
    initUserName();
  }, [isLogin]);

  return (
    <div>
      <h1>mypage</h1>
      <Nav />
      <p>Welcome To MyPage</p>
      <p>name: {name}</p>
      <button
        onClick={() => {
          navigate('/', { replace: true });
        }}
      >
        logout
      </button>
    </div>
  );
}
