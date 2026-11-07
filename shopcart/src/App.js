import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { products } from "./products";
import Navbar from "./navbar";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteName: "Shop to React",
      products: products
    };
  }

  handleIncrement = (product) => {
    const products = this.state.products.map((item) =>
      item.id === product.id ? { ...item, value: item.value + 1 } : item
    );
    this.setState({ products: products });
  };

  handleDecrement = (product) => {
    const products = this.state.products.map((item) =>
      item.id === product.id && item.value > 0
        ? { ...item, value: item.value - 1 }
        : item
    );
    this.setState({ products: products });
  };

  render() {
    return (
      <div className="container mt-4">
        <Navbar
          siteName={this.state.siteName}
          products={this.state.products}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default App;
