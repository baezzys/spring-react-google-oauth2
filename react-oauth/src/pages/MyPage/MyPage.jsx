import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Nav from '../../components/Nav';

export default function MyPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = Cookies.get('isLogin');
    if (!isLogin) navigate('/', { replace: true });
  }, []);

  return (
    <div>
      <h1>mypage</h1>
      <Nav />
      <p>Welcome To MyPage</p>
      <button
        onClick={() => {
          Cookies.remove('isLogin');
          navigate('/', { replace: true });
        }}
      >
        logout
      </button>
    </div>
  );
}
