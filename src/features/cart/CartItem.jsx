import { formatCurrency } from '../../utils/helpers';
import  UpdateItemQuantity  from './UpdateItemQuantity';
import { useSelector } from 'react-redux';
import { getPizzaQuantityById } from './cartSlice';
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const pizzaQuantity=useSelector(getPizzaQuantityById(pizzaId))
  return (
    <li className="flex items-center justify-between py-4">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center gap-4">
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity id={pizzaId} pizzaQuantity={pizzaQuantity} />
      </div>
    </li>
  );
}

export default CartItem;
