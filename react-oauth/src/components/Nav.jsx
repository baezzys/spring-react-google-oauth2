import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/mypage">MyPage</Link>
        </li>
      </ul>
    </nav>
  );
}
