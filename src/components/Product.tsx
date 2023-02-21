import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: any) => state.products);
  const handleClick = (item: any) => {
    dispatch<any>(add(item));
  };
  return (
    <div className="App item">
      {products?.map((item: any) => (
        <div key={item?.id} className="App product-name">
          <img src={item?.image} alt="" className="productimage" />
          <div>{item?.title.slice(0, 10)}...</div>
          <div>{item?.price} $</div>
          <button onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
