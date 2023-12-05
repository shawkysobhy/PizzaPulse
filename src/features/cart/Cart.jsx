import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { CustomButton } from '../../ui/CustomButton';
import { useSelector } from 'react-redux';
import { getCart } from './cartSlice';
import { clearCart } from './cartSlice';
import { useDispatch } from 'react-redux';
import EmptyCart from './EmptyCart';

function Cart() {
  const userName = useSelector((state) => state.user.userName);
  const cart = useSelector((state) => getCart(state));
  const dispatch = useDispatch();
  return (
    <div className="mx-4 my-8">
      <Link
        to="/menu"
        className="text-lg text-blue-800 underline-offset-4 hover:text-blue-500 hover:underline"
      >
        &larr; Back to menu
      </Link>
      <h2 className="mt-8 text-xl font-semibold text-stone-700">
        Your cart , {userName}
      </h2>
      {cart.length <= 0 ? <EmptyCart /> : null}
      <ul className="mt-4 divide-y divide-stone-300 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-4 flex items-center gap-4">
        <CustomButton to="/order/new" type="primary">
          Order pizzas
        </CustomButton>
        <CustomButton type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </CustomButton>
      </div>
    </div>
  );
}

export default Cart;
