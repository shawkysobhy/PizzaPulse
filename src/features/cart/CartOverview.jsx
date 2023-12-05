import { Link } from 'react-router-dom';
import { getTotalCartNumber, getTotalCartPrice } from './cartSlice';
import { useSelector } from 'react-redux';
function CartOverview() {
  const totalPizzaNum = useSelector((state) => getTotalCartNumber(state));
  const totalCartPrice = useSelector((state) => getTotalCartPrice(state));
  if (!totalPizzaNum) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4   text-sm uppercase text-stone-300 md:text-base">
      <p className=" space-x-2 font-semibold md:space-x-6">
        <Link to="/menu" />
        <span>{totalPizzaNum} pizzas </span>
        <span>${totalCartPrice}</span>
      </p>
      <Link to="/cart" className=" font-semibold ">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
