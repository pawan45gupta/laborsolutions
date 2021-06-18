import React, { useState } from "react";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import Pagination from "@material-ui/lab/Pagination";
import PopperPopupState from "./Popper";

const Home = ({ products }) => {
  const [productData, setProductData] = useState(products);
  const [cartItems, setCartItems] = useState([]);
  const onSearch = (e) => {
    if (e.target.value) {
      const product = products.filter((product) => product?.name.indexOf(e?.target?.value) > -1);
      setProductData(product);
    } else {
      setProductData(products);
    }
  };

  const addToCart = (id) => {
    setCartItems([...cartItems, id]);
  };
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div>
      <PrimarySearchAppBar products={products} onSearch={onSearch} cartItems={cartItems} />
      <div className="product-container">
        {productData?.map((product) => (
          <div className="product">
            <PopperPopupState product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
      <div className="product-container-pagination">
        <Pagination count={10} page={page} onChange={handleChange} />
      </div>
    </div>
  );
};

export default Home;
