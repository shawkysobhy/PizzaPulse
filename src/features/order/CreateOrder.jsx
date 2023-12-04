import { Form, redirect, useActionData } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import { CustomButton } from '../../ui/CustomButton';
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

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

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const actionCreateOrder = useActionData();
  const cart = fakeCart;

  return (
    <div className="mx-4  mt-4 max-w-2xl">
      <h2 className="mb-4 text-2xl font-semibold">Ready to order? Let's go!</h2>
      <Form method="post">
        <div className="mb-4 flex flex-col  gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input type="text" name="customer" required className="input grow" />
        </div>
        <div className="mb-4 flex flex-col  gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            <div className='m-2 px-2 bg-red-300 rounded-lg text-red-500' >{actionCreateOrder?.phone}</div>
          </div>
        </div>
        <div className="mb-4 flex flex-col  gap-2 sm:flex-row sm:items-center ">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
            />
          </div>
        </div>
        <div className="mb-4 flex flex-row items-center gap-4">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="m-2 h-6  w-6 accent-yellow-400 focus:bg-yellow-300 focus:outline-none   focus:ring focus:ring-yellow-400  focus:ring-offset-2"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <label htmlFor="priority" className="text-lg">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <CustomButton>Order Now</CustomButton>
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
  console.log(newOrder);
  return redirect(`/order/${newOrder.id}`);
};
export default CreateOrder;
