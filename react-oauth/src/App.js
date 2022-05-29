import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import MyPage from './pages/MyPage/MyPage';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="mypage" element={<MyPage />} />
        </Routes>
      </RecoilRoot>
    </div>
  );
}
