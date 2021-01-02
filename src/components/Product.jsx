import React from "react";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>
          The Lean Startup: How constant innovation creates radically successful
          businesses.
        </p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>⭐️</p>
          {/* <p>⭐️</p>
          <p>⭐️</p>
          <p>⭐️</p> */}
        </div>
      </div>
      <img
        className="product__image"
        src="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
        alt="the lean startup"
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
