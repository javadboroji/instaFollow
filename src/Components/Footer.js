import React, { useContext } from "react";
import CartBuy from "../Helper/Context";
import { Container, Row, Col } from "react-bootstrap";
export default function Footer() {
  const { data } = useContext(CartBuy);
  return (
    <div className="footer ">
      <h5 className="text-center m-3 p-3">
        {" "}
        تمامی اطلاعات این سایت محوظ می باشد .هرگونه کپی ازآن پی گرد قانونی دارد
      </h5>
      <Container>
        <Row className="justify-content-center align-item-center m-3">
          {data.Menu.map((item) => {
            return (
              <Col md={2} key={item.id}>
                <a href="#" className="footer-menu-item text-center p-3">
                  {" "}
                  <h6 > {item.title}</h6>
                </a>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
