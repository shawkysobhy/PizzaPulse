import { CustomButton } from '../../ui/CustomButton';
import { useDispatch } from 'react-redux';
import { increaseItem, decreaceItem } from './cartSlice';
import  {DeleteItem}  from './DeleteItem';
function UpdateItemQuantity({ id, pizzaQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="space-x-2">
      <CustomButton type={'small'} onClick={() => dispatch(increaseItem(id))}>
        +
      </CustomButton>
      <span>{pizzaQuantity}</span>
      <CustomButton type={'small'} onClick={() => dispatch(decreaceItem(id))}>
        -
      </CustomButton>
      <DeleteItem pizzaId={id} />
    </div>
  );
}

export default UpdateItemQuantity;
