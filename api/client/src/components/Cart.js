import { useEffect, useState } from "react";
import { Button, Col,Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";
import StripeCheckout from "react-stripe-checkout";
import './Cart.css'

const Cart = () => {
  const KEY = process.env.REACT_APP_STRIPE;


  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
  
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image className='cartItemImg' src={prod.img} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.title}</span>
                </Col>
                <Col md={2}>shs {prod.price}</Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: shs {total}</span>
        
 <StripeCheckout
              name="perez backeries"
              image=""
              billingAddress
              shippingAddress
              description={`Your total is ${total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
       <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>  
        </StripeCheckout>
      </div>
    </div>
  
  );
};

export default Cart;
