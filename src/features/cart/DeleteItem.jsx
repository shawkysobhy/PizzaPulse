import React from 'react';
import { CustomButton } from '../../ui/CustomButton';
import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';
export const DeleteItem = ({pizzaId}) => {
  const dispatch = useDispatch();
  console.log(pizzaId)
  return (
    <CustomButton type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </CustomButton>
  );
};
