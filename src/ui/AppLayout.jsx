import Header from './Header';
import CartOverView from '../features/cart/CartOverview';
import { Outlet } from 'react-router-dom';
import { useNavigation } from 'react-router-dom';
import { Loader } from './Loader';
function AppLayout() {
	const navigation = useNavigation();
	const loadingState = navigation.state === 'loading';
	return (
		<>
			{loadingState && <Loader />}
			<div>
				<Header />
				<main>
					<Outlet />
				</main>
				<CartOverView />
			</div>
		</>
	);
}

export default AppLayout;
