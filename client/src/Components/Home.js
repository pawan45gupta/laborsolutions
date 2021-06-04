import React, { useState } from "react";
import Card from "./Card";
import PrimarySearchAppBar from "./PrimarySearchAppBar";

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
  return (
    <div>
      {/* <NavLink to="/"> Home </NavLink> */}
      <PrimarySearchAppBar products={products} onSearch={onSearch} cartItems={cartItems} />
      <div className="product-container">
        {productData?.map((product) => (
          <div className="product">
            <Card product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
