import React, { useContext, useState } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

import "../App.css";

import CartBuy from "../Helper/Context";

export default function Comment() {

  const { data } = useContext(CartBuy);

  const { setDisplayCart, setCart } = useContext(CartBuy);

  const dataCartHandler = (evt) => {
    setCart(evt.target.value);
    setDisplayCart(true);
  };
  return (
    <div>
      <Container id="price">
        <h1 className="title-price"> {data && data.Cart.Comment.title}</h1>
        <Row>
          {data.Cart.Comment.tariff.map((item) => {
            return (
              <Col className="mb-3" md={6} lg={3} key={item.header} >
                <div className="price-header" style={{background:'#4caf50'}}>
                  <i className={item.icon}></i>

                  <p> {data.Cart.Comment.title}</p>
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
                    value="Comment"
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
