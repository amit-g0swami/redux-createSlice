import { createSlice } from "@reduxjs/toolkit";
import { CartAction } from "./actions/action.cart";
import { CartType } from "./action-types/actiontype.cart";

interface CartState {
  cart: any;
}

const initialState = { cart: [] } as CartState;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    [CartType.ADD](state, action: CartAction) {
      state?.cart?.push(action.payload);
    },
    [CartType.REMOVE](state, action: CartAction) {
      state.cart = state?.cart?.filter(
        (item: any) => item.id !== action.payload
      );
    }
  }
});

// export actions
export const { add, remove } = cartSlice.actions;

// export reducers
export default cartSlice.reducer;
