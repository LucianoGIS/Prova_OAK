import React, { useState } from "react";
import "./styles/app.css";

import Navbar from "./components/navbar";
import ProductForm from "./components/productForm";
import ProductList from "./components/productList";


function App() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const sortedProducts = [...products].sort((a, b) => a.value - b.value);

  return (
    <div className="app">
      <Navbar /> {/* Renderize o Navbar diretamente dentro do div .app */}
      <div className="container">
        <ProductForm onAddProduct={handleAddProduct} />
        <ProductList products={sortedProducts} />
      </div>
    </div>
  );
}

export default App;