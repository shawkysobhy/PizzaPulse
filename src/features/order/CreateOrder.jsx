import { useState } from 'react';
import { Form, redirect, useActionData } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import { CustomButton } from '../../ui/CustomButton';
import { formatCurrency } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdress } from '../user/userSlice';
import store from '../../store';
import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice';
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  // const address=useSelector(state=>state.user.user.address)
  const actionCreateOrder = useActionData();
  const [withPriority, setWithPriority] = useState(false);
  const { userName, address, status, position } = useSelector(
    (state) => state.user,
  );
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityCost = totalCartPrice * 0.2;
  const totalPrice = !withPriority
    ? totalCartPrice
    : totalCartPrice + priorityCost;

  return (
    <div className="mx-4  mt-4 max-w-2xl">
      <h2 className="my-10 text-2xl font-semibold">
        Ready to order? Let's go!
      </h2>
      <Form method="post">
        <div className="mb-4 flex flex-col  gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            type="text"
            name="customer"
            defaultValue={userName}
            required
            className="input grow"
          />
        </div>
        <div className="mb-4 flex flex-col  gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            <div className="m-2 rounded-lg bg-red-300 px-2 text-red-500">
              {actionCreateOrder?.phone}
            </div>
          </div>
        </div>
        <div className="mb-4 flex flex-col  gap-2 sm:flex-row sm:items-center ">
          <label className="sm:basis-40">Address</label>
          <div className="relative grow">
            <input
              type="text"
              name="address"
              defaultValue={address}
              required
              className="input w-full"
            />
            {!position.latitude && !position.longitude && (
              <span className=" absolute right-0 top-[-1px]">
                <CustomButton
                  customStyle="!px-6 !py-[15px]"
                  type="small"
                  onClick={() => dispatch(fetchAdress())}
                >
                  get address
                </CustomButton>
              </span>
            )}
          </div>
        </div>
        <div className="mb-4 flex flex-row items-center gap-4">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="m-2 h-6  w-6 accent-yellow-400 focus:bg-yellow-300 focus:outline-none   focus:ring focus:ring-yellow-400  focus:ring-offset-2"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <label htmlFor="priority" className="text-lg">
            Want to yo give your order priority?
          </label>
          <div className="font-semibold text-green-500">
            cost {formatCurrency(priorityCost)}
          </div>
        </div>

        <div>
          <CustomButton>Order Now {formatCurrency(totalPrice)}</CustomButton>
        </div>
      </Form>
    </div>
  );
}
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on',
  };
  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone = 'phone number not vaild try again ........';
    return errors;
  }
  const newOrder = await createOrder(order);
  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
};
export default CreateOrder;
