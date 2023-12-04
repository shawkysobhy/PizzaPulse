import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="flex items-center justify-between px-6 py-4">
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
      </div>
        <p className='font-bold'>{formatCurrency(totalPrice)}</p>
    </li>
  );
}

export default OrderItem;
