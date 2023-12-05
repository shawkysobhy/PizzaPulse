import { CustomButton } from '../../ui/CustomButton';
import { formatCurrency } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { getPizzaQuantityById , addItem} from '../cart/cartSlice';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const pizzaQuantity = useSelector(getPizzaQuantityById(id));
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    const pizza = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: 1 * unitPrice,
    };
    dispatch(addItem(pizza));
  };
  return (
    <li className="   flex gap-6 border-0 border-b-2 py-4  filter      ">
      <img
        src={imageUrl}
        alt={name}
        className={`h-28 rounded-full ${soldOut ? 'grayscale filter' : ''} `}
      />
      <div className="flex grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="  capitalize italic tracking-wide text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="items-bottom mt-4 flex justify-between ">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
          {pizzaQuantity > 0 ? (
            <UpdateItemQuantity id={id} pizzaQuantity={pizzaQuantity} />
          ) : !soldOut ? (
            <CustomButton type={'small'} onClick={addToCartHandler}>
              Add to Cart
            </CustomButton>
          ) : null}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
