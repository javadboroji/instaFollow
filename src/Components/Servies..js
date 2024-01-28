import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
export default function ({ data }) {
  return (
    <Container id="servies">
      <Row>
        {data.Services.map((item) => {
          return (
            <Col className="mt-3" key={item.title} lg={3} md={6} sm={6}>
              <div className={item.class}>
                <div className="servies-header" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <i className={item.icon} style={{fontSize:'14px'}}></i>
                  <h5> {item.title}</h5>
                </div>
                <div className="servies-items">
                  <ul className="servies-items-inner">
                    {" "}
                    {item.list.map((list) => {
                      return (
                        <li>
                          {" "}
                          <a href="#"> {list}</a>{" "}
                        </li>
                      );
                    })}
                  </ul>
                  <i id={item.iconId} className={item.icon}></i>
                </div>
              </div>
            </Col>
          );
        })}
       
      </Row>
    </Container>
  );
}
