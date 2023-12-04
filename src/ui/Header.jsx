import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';

function Header() {
  return (
    <header className="flex items-center justify-between  border-b border-stone-200 bg-yellow-400 px-6 py-4 uppercase">
      <Link to="/" className="text-base tracking-widest md:text-xl">
        Pizza Pulse Co .
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
