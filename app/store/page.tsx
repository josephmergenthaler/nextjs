"use client";
import { useState, useEffect } from "react"; // React Hooks

export default function Page() {

    const [filteredProducts, setFilteredProducts] = useState([]) 
    const [searchString, setSearchString] = useState("") 
    useEffect(fetchAPIData, [searchString])

      function fetchAPIData() {
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((products) => {
          const filtered = products.filter((prod) => {
            return prod.title.toLowerCase().includes(searchString.toLowerCase());
          });
          const currentFilter = filtered.map((product, index) => {
            return (
              <div className="prodStyle" key={index}>
                <p style={{ fontSize: "2rem", textAlign: "center" }}>
                  ${product.price}
                </p>
                <img
                  style={{ width: "50px", display: "block", margin: "auto" }}
                  src={product.image}
                  alt={product.title}
                />
                <p style={{ fontSize: "1rem" }}>{product.title}</p>
              </div>
            );
          });
          setFilteredProducts(currentFilter);
        })}
      function handleChange(event){
        setSearchString(event.target.value)
    }

  return (
    <>
      <h1>Store</h1>
      <div>
        <p>The Search Bar</p>
        <input type="text" value={searchString} onChange={handleChange} />
        <div style={{ display: "flex", flexFlow: "row wrap" }}>
          {filteredProducts}
        </div>
      </div>
    </>);
}