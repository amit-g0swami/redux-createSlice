const getdata = async () => {
  const res = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  return res;
};

const ProductService = {
  getdata
};

export default ProductService;
