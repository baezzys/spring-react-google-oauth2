import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { oauth } from '../../recoil/oauth';

export default function MyPage() {
  const navigate = useNavigate();
  const [token] = useRecoilState(oauth);

  useEffect(() => {
    if (!token) navigate('/', { replace: true });
  }, [token]);

  return (
    <>
      <h1>mypage</h1>
      <p>Welcome To MyPage</p>
    </>
  );
}
