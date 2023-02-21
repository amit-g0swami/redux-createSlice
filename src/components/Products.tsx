import { useEffect } from "react";
import Product from "./Product";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData, STATUS } from "../store/productsSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state: any) => state.products);
  useEffect(() => {
    dispatch<any>(getProductsData());
  }, [dispatch]);
  return (
    <div className="products">
      <div className="home">Products</div>
      {status === STATUS.SUCCESS ? <Product /> : <Loader />}
    </div>
  );
};

export default Products;
