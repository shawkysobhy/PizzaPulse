import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';
function Menu() {
	const menuList = useLoaderData();
	return (
		<ul>
			{menuList.map((pizza) => (
				<MenuItem pizza={pizza} key={pizza.id} />
			))}
		</ul>
	);
}

export const loader = async () => await getMenu();
export default Menu;
