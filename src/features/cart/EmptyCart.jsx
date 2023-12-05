import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="py-8 text-2xl font-semibold text-stone-800">
      <h1>
        📤 There No Pizza in Cart add More by going to{' '}
        <Link
          className="text-blue-500 underline underline-offset-4 hover:text-blue-200"
          to="/menu"
        >
          Menu &rarr;
        </Link>
      </h1>
    </div>
  );
}

export default EmptyCart;
