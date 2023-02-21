import { useSelector } from "react-redux";

const Loader = () => {
  const { status } = useSelector((state: any) => state.products);
  return (
    <div className="loader">
      <h4>{status}</h4>
    </div>
  );
};

export default Loader;
