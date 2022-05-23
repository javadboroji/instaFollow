import React, { useContext } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

import CartBuy from "../Helper/Context";

import "../App.css";

export default function Like() {

  const { setDisplayCart, setCart,data } = useContext(CartBuy);



  const dataCartHandler = (evt) => {
    setCart(evt.target.value);

    setDisplayCart(true)
  };
  return (
    <div>
      <Container id="price">
        <h1 className="title-price"> {data && data.Cart.Like.title}</h1>
        <Row>
          {data.Cart.Like.tariff.map((item) => {
            return (
              <Col className="mb-3" md={6} lg={3} key={item.header}>

                <div className="price-header">

                  <i className={item.icon}></i>

                  <p> { data.Cart.Like.title}</p>

                </div>

                <div className="price-description">

                  <h3>{item.header} </h3>

                  <ul className="price-description-list">

                    <li> استارت سریع</li>

                    <li> بدون نیاز به پسورد</li>

                    <li> بدون نیاز به لایک کردن </li>

                    <li className="price-unactive"> {item.price}</li>

                    

                  </ul>
                  <Button
                    className="btn-price-buy"
                    type="button"
                    id={item.header}
                    value="Like"
                    onClick={(evt) => dataCartHandler(evt)}
                  >
                    {item.price}
                  </Button>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
