import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state: any) => state.cart);
  return (
    <div className="App">
      <div className="nav">
        Redux Store
      </div>
      <div className="box">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/cart">
          Cart {cart?.length}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
