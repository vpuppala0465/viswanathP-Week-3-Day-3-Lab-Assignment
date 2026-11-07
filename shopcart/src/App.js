import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteName: "Shop to React",
      products: [
        { id: 1, image: "./products/cologne.jpg", desc: "Unisex Cologne", value: 0 },
        { id: 2, image: "./products/iwatch.jpg", desc: "Apple iWatch", value: 0 },
        { id: 3, image: "./products/mug.jpg", desc: "Unique Mug", value: 0 },
        { id: 4, image: "./products/wallet.jpg", desc: "Mens Wallet", value: 0 }
      ]
    };
  }

  render() {
    return (
      <div className="container mt-4">
        <Header siteName={this.state.siteName} products={this.state.products} />
        <Products products={this.state.products} />
      </div>
    );
  }
}

function Header(props) {
  const totalItems = props.products
    .map((product) => product.value)
    .reduce((total, value) => total + value, 0);

  return (
    <div className="site-header d-flex justify-content-between align-items-center px-4">
      <h1 className="site-name m-0">{props.siteName}</h1>
      <span className="cart-total">
        <FontAwesomeIcon icon={faShoppingCart} className="mr-3" />
        {totalItems} items
      </span>
    </div>
  );
}

function Products(props) {
  return (
    <ListGroup>
      {props.products.map((product) => (
        <ListGroupItem key={product.id} className="product rounded-0">
          <h5 className="product-name">{product.desc}</h5>
          <div className="d-flex align-items-center">
            <img src={product.image} alt={product.desc} className="product-image" />
            <span className="quantity-box">{product.value}</span>
            <span className="quantity-label">quantity</span>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default App;
