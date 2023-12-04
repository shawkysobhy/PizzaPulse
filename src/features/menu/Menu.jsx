import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';
function Menu() {
	const menuList = useLoaderData();
	return (
		<ul className='flex flex-col justify-stretch mx-4'>
			{menuList.map((pizza) => (
				<MenuItem pizza={pizza} key={pizza.id} />
			))}
		</ul>
	);
}

export const loader = async () => await getMenu();
export default Menu;
