import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter(
        (pizza) => pizza.pizzaId !== action.payload,
      );
    },
    increaseItem: (state, action) => {
      const id = action.payload;
      const newCart = state.cart.map((item) => {
        if (item.pizzaId === id) {
          item.quantity++;
          item.totalPrice = item.quantity * item.unitPrice;
        }
        return item;
      });
      state.cart = newCart;
    },
    decreaceItem: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item.quantity === 1) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});
export const { addItem, deleteItem, decreaceItem, increaseItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
export const getCart = (state) => state.cart.cart;
export const getPizzaQuantityById = (id) => (state) => {
  let num = state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
  return num;
};
export const getTotalCartNumber = (state) =>
  state.cart.cart.reduce((acc, curr) => (acc = acc + curr.quantity), 0);
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((acc, curr) => acc + curr.totalPrice, 0);
