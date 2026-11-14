import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

function Cart(props) {
  const cartItems = props.products.filter((product) => product.value > 0);

  return (
    <div className="cart mx-5 mt-4">
      <h5 className="cart-title">Your Cart Items</h5>
      {cartItems.length === 0 ? (
        <React.Fragment>
          <p className="cart-empty">
            There are {props.totalValue} items in your cart.
          </p>
          <Link to="/" className="btn btn-success btn-sm">
            Continue Shop
          </Link>
        </React.Fragment>
      ) : (
        <React.Fragment>
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
          <Link to="/signin" className="btn btn-primary btn-sm mt-3">
            Check Out
          </Link>
        </React.Fragment>
      )}
    </div>
  );
}

export default Cart;
