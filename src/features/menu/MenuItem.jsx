import { CustomButton } from '../../ui/CustomButton';
import { formatCurrency } from '../../utils/helpers';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

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
          {!soldOut ? (
            <CustomButton type={'small'}>Add to Cart</CustomButton>
          ) : null}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
