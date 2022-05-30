import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from '../../components/GoogleLogin';
import Cookies from 'js-cookie';
import Nav from '../../components/Nav';
import { getLoginToken } from '../../utils/getLoginToken';

export default function Login() {
  const navigate = useNavigate();

  const onGoogleSignIn = async res => {
    const { credential } = res;
    const isLogin = await getLoginToken(credential);

    if (!isLogin) return;

    Cookies.set('isLogin', JSON.stringify(isLogin), { secure: true });
    navigate('/mypage', { replace: true });
  };

  useEffect(() => {
    const isLogin = Cookies.get('isLogin');
    if (!isLogin) return;

    navigate('/mypage', { replace: true });
  }, []);

  return (
    <div>
      <h1>Goggle Login</h1>
      <Nav />
      <GoogleLogin onGoogleSignIn={onGoogleSignIn} text="로그인" />
    </div>
  );
}
