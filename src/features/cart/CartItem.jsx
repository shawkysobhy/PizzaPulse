import { formatCurrency } from "../../utils/helpers";
import {CustomButton} from '../../ui/CustomButton'
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex items-center justify-between py-4">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center gap-4">
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
        <CustomButton type="small">Delete</CustomButton>
      </div>
    </li>
  );
}

export default CartItem;
