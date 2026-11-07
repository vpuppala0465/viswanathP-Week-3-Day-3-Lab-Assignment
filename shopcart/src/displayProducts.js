import { useState } from "react";
import { Modal } from "react-bootstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DisplayProducts(props) {
  const [show, setShow] = useState(false);
  const [showImge, setShowImge] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setShow(true);
    setShowImge(product);
  };

  return (
    <div>
      <ListGroup>
        {props.products.map((product) => (
          <ListGroupItem key={product.id} className="product rounded-0">
            <h5 className="product-name">{product.desc}</h5>
            <div className="d-flex align-items-center">
              <img
                src={product.image}
                alt={product.desc}
                className="product-image"
                onClick={() => handleShow(product)}
              />
              <button
                className="btn btn-secondary btn-qty ml-4"
                onClick={() => props.onIncrement(product)}
              >
                <FontAwesomeIcon icon={faPlusCircle} />
              </button>
              <button
                className="btn btn-secondary btn-qty ml-2"
                onClick={() => props.onDecrement(product)}
              >
                <FontAwesomeIcon icon={faMinusCircle} />
              </button>
              <div className="quantity ml-4">
                <span className="quantity-label">Quantity</span>
                <span className="quantity-box">{product.value}</span>
              </div>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{showImge.desc}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={showImge.image}
            width="350"
            alt={showImge.desc}
            className="mx-5"
          />
          <p>
            <span className="text-dark">Ratings:</span> {showImge.ratings}/5
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DisplayProducts;
