import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="bg-stone-800 px-4 py-4 uppercase text-sm md:text-base   text-stone-300 flex items-center justify-between">
      <p className=" font-semibold space-x-2 md:space-x-6">
        <Link to="/menu" />
        <span>23 pizzas </span>
        <span>$23.45</span>
      </p>
      <a href="/cart" className=" font-semibold ">
        Open cart &rarr;
      </a>
    </div>
  );
}

export default CartOverview;
