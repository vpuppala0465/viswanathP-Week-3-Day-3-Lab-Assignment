import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

function Cart(props) {
  const cartItems = props.products.filter((product) => product.value > 0);

  return (
    <div className="cart mx-5 mt-4">
      <h5 className="cart-title">Your Cart Items</h5>
      <ListGroup>
        {cartItems.map((product) => (
          <ListGroupItem key={product.id} className="cart-item rounded-0">
            <div className="d-flex">
              <div className="text-center">
                <img
                  src={product.image}
                  alt={product.desc}
                  className="cart-image"
                />
                <p className="cart-name m-0">{product.desc}</p>
              </div>
              <p className="cart-quantity ml-5 mt-3">
                Quantity: {product.value}
              </p>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default Cart;
