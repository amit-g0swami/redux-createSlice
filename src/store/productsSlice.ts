import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductAction } from "./actions/action.product";
import ProductService from "./services/ProductService";

export enum STATUS {
  NONE = "bad request",
  ERROR = "something went wrong",
  SUCCESS = "success",
  LOADING = "loading..."
}

interface ProductsState {
  products: any;
}

const initialState = { products: [], status: STATUS.NONE } as ProductsState;

export const getProductsData = createAsyncThunk(
  "products/fetch",
  ProductService.getdata
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // getProducts(state, action) {
    //   // never do this here api calls and all because reducers are sync
    //   //   const getData = async () => {
    //   //     try {
    //   //       const res = await fetch(
    //   //         "https://fakestoreapi.com/products"
    //   //       ).then((res) => res.json());
    //   //       console.log(res);
    //   //       return (state.products = [...res]);
    //   //     } catch (error) {
    //   //       console.log(error);
    //   //     }
    //   //   };
    //   //   getData();
    //   state.products = action.payload;
    // },
    // setStatus(state: any, action) {
    //   state.status = action.payload;
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsData.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(getProductsData.fulfilled, (state, action: ProductAction) => {
        state.products = action.payload;
        state.status = STATUS.SUCCESS;
      })
      .addCase(getProductsData.rejected, (state) => {
        state.status = STATUS.ERROR;
      });
  }
});

// export actions
// export const { getProducts, setStatus } = productsSlice.actions;

// export reducers
export default productsSlice.reducer;

// // thunk old school method
// export function getProductsData() {
//   // should be async
//   return async function getdata(dispatch: any, getState: any) {
//     // const prop = getState().products
//     try {
//       dispatch(setStatus(STATUS.LOADING));
//       const res = await fetch("https://fakestoreapi.com/products").then((res) =>
//         res.json()
//       );
//       if (res) {
//         dispatch(getProducts(res));
//         dispatch(setStatus(STATUS.SUCCESS));
//       }
//     } catch (error) {
//       console.log(error);
//       dispatch(setStatus(STATUS.ERROR));
//     }
//   };
// }

// thunk toolkit method middleware
// export const getProductsData = createAsyncThunk(
//   "products/fetch",
//   ProductService.getdata
// );
