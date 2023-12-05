// Test ID: IIDSAT
import { useLoaderData } from 'react-router-dom';
import OrderItem from '../order/OrderItem';
import { getOrder } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';


function Order() {
  const order = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="px-4 py-8">
      <div className="flex items-center justify-between px-6 ">
        <h2 className="text-xl font-semibold text-stone-800">
          Order <span className="text-stone-500">#{id}</span> Status
        </h2>
        <div className='flex items-center gap-4 uppercase text-white'>
          {priority && <span className='bg-red-500  px-2 py-1 rounded-full'>Priority</span>}
          <span className=' px-2 py-1 bg-green-500 rounded-full'>{status} order</span>
        </div>
      </div>

      <div className="m-2 mt-8 flex items-center justify-between bg-stone-200 p-6">
        <p className="font-bold text-stone-800">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-sm text-stone-600">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>
      <ul className="dive-stone-200 mt-8 divide-y border-b border-t">
        {cart.map((item) => (
          <OrderItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-8 space-y-2 bg-stone-200  p-6">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="text-lg font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}
export const loader = async ({ params }) => {
  const order = await getOrder(params.orderId);
  console.log(order);
  return order;
};
export default Order;
