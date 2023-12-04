import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { CustomButton } from '../../ui/CustomButton';
const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="mx-4 my-8">
      <Link
        to="/menu"
        className="text-lg text-blue-800 underline-offset-4 hover:text-blue-500 hover:underline"
      >
        &larr; Back to menu
      </Link>

      <h2 className="mt-8 text-xl font-semibold text-stone-700">
        Your cart , Alex
      </h2>
      <ul className="mt-4 divide-y divide-stone-300 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.key} />
        ))}
      </ul>

      <div className="mt-4 flex items-center gap-4">
        <CustomButton to="order/new" type="primary">
          Order pizzas
        </CustomButton>
        <CustomButton type="secondary">Clear cart</CustomButton>
      </div>
    </div>
  );
}

export default Cart;
