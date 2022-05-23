import React, { useState,useContext } from "react";

import { Container, Row, Col } from "react-bootstrap";

import "./App.css";

import Header from "./Components/Header";

import Like from "./Components/Like";

import Servies from "./Components/Servies.";

import SiteInfo from "./Components/SiteInfo";

import Comment from "./Components/Comment";

import Footer from "./Components/Footer";

import { DataCustom } from "./Data";

import Cart from "./Components/Cart";

import CartBuy from "./Helper/Context";

export default function App() {

  const { displayCart, setDisplayCart } = useContext(CartBuy);

  return (
    <div className="app">
      <Container fluid>
        <Row>
          <Col md={12}>
            <div className="main-header">
              <Header data={DataCustom} />

              <div className="title">
                <h1> اینستا فالور</h1>
                <p> خدمات خرید فالور ولایک با کمترین قیمت ها در ایران</p>
              </div>

              <SiteInfo data={DataCustom} />
            </div>
          </Col>
        </Row>
      </Container>
      {!displayCart ? (
        <>
          {" "}
          <Servies data={DataCustom} />
          <Like />
          <Comment />
        </>
      ) : (
        <Cart data={DataCustom} />
      )}

      <Footer />
    </div>
  );
}
