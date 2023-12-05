import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';
import { useSelector } from 'react-redux';
function Menu() {
  const menuList = useLoaderData();
  const { cart } = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <ul className="mx-4 flex flex-col justify-stretch">
      {menuList.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export const loader = async () => await getMenu();
export default Menu;
