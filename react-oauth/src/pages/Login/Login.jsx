import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import GoogleLogin from '../../components/GoogleLogin';
import { oauth } from '../../recoil/oauth';

export default function Login() {
  const navigate = useNavigate();
  const [token, setToken] = useRecoilState(oauth);

  const onGoogleSignIn = res => {
    console.log('[login success]', { res });
    const { credential } = res;
    setToken(credential);
  };

  useEffect(() => {
    if (!token) return;
    navigate('/mypage', { replace: true });
  }, [token]);

  return (
    <>
      <h1>Goggle Login</h1>
      <GoogleLogin onGoogleSignIn={onGoogleSignIn} text="로그인" />
    </>
  );
}
