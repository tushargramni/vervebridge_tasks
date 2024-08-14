import React, { useEffect } from "react";
import { useState } from "react";
import "../styles/cart.css";

const Cart = ({ cart, setCart, handlechange }) => {
  const [price, setprice] = useState(0);

  const handleremove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setprice(ans);
  };
  useEffect(() => {
    handlePrice();
  });
  return (
    <div>
      <article>
        {cart?.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.img} alt="img" />
              <p>
                {item.title} <span className="item_price">${item.price}</span>
              </p>
            </div>
            <div className="add_subtractbtn">
              <button onClick={() => handlechange(item, +1)}> + </button>
              <button> {item.amount}</button>
              <button onClick={() => handlechange(item, -1)}> - </button>
            </div>
            <div className="price_btn">
              <button onClick={() => handleremove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className="total">
          <span>Total Price of your Cart</span>
          <span>=$ {price}</span>
        </div>
      </article>
    </div>
  );
};

export default Cart;
