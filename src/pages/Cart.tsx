import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: any) => state.cart);
  const handleClick = (id: number) => {
    dispatch(remove(id));
  };
  return (
    <div className="App item">
      {cart?.map((item: any) => (
        <div key={item?.id} className="App product-name">
          <img src={item?.image} alt="" className="productimage" />
          <div>{item?.title.slice(0, 10)}...</div>
          <div>{item?.price} $</div>
          <button onClick={() => handleClick(item.id)}>Remove from Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
