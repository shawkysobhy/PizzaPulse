import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
	return (
		<header>
			<Link to='/'>Pizza.com</Link>
			welcome in our pizza compnay
			<SearchOrder />
		</header>
	);
}

export default Header;
