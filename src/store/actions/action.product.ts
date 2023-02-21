import { STATUS } from "../productsSlice";

interface fulfilledAction {
  payload?: [];
  status?: STATUS.SUCCESS;
}

export type ProductAction = fulfilledAction;
