import React, { useState, useContext } from "react";

import { Container, Row, Col } from "react-bootstrap";

import CartBuy from "../Helper/Context";

import "../App.css";

export default function () {
  const { cart ,setDisplayCart,data} = useContext(CartBuy);

  const [disble, setDisble] = useState(true);


  const warningHandler = () => {
    setDisble(false);
  };

  const btnCloseCartHandler=()=>{
    setDisplayCart(false)
  }

  const buyHandler = () => {};

  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className="cart-main">
            <div className="cart-header-box">
              <h2> خرید {cart}</h2>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={btnCloseCartHandler}
              >
                بستن!
              </button>
            </div>
            <input type="text" className="inp-cat" placeholder="username" />

            {disble && (
              <div className="cart-warning">
                <p> کاربر گرامی ثبت خرید شما ،پیج باید به حالت public باشد</p>

                <button
                  type="button"
                  className="btn btn-secondary mr-3"
                  onClick={warningHandler}
                >
                  متوجه شدم{" "}
                </button>
              </div>
            )}
            <Container>
              <Row >
                {cart === "Like" &&
                  data.Cart.Like.tariff.map((item) => {
                    return (
                      <Col md={3} sm={12} >
                        <button
                          type="button"
                          className="btn btn-outline-success btn-buy"
                          disabled={disble}
                          onClick={buyHandler}
                        >
                          {item.header} {"*"} {item.price}
                        </button>
                      </Col>
                    );
                  })}

                {cart === "Comment" &&
                  data.Cart.Comment.tariff.map((item) => {
                    return (
                      <Col md={3} sm={12}>
                        <button
                          type="button"
                          className="btn btn-outline-success btn-buy"
                          disabled={disble}
                          onClick={buyHandler}
                        >
                          {item.header} {"*"} {item.price}
                        </button>
                      </Col>
                    );
                  })}
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
