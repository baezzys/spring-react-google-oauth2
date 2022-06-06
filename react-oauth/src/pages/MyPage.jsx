import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getUserInfo } from '../api/getUserInfo';

export default function MyPage({ isLogin }) {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    email: '',
    firstName: '',
    lastName: '',
  });

  useEffect(() => {
    if (!isLogin) navigate('/');

    const initUserinfo = async () => {
      const newinfo = await getUserInfo();
      setInfo(newinfo);
    };
    initUserinfo();
  }, [isLogin]);

  return (
    <div>
      <h1>mypage</h1>
      <p>Welcome To MyPage</p>
      <p>email: {info.email}</p>
      <p>name: {`${info.lastName} ${info.firstName}`}</p>
    </div>
  );
}
