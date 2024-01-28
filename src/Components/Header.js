import React, { useState } from "react";
import "../App.css";

export default function Header({ data }) {
  
  const [menuMobile, setMenuMobile] = useState(false);

  const menuToggle = () => {
    setMenuMobile(!menuMobile);
  };
  return (
    <header>
      <div className="menu-box" id="menu">
        <i id="toggel" className="fa-solid fa-bars" onClick={menuToggle}></i>
      </div>
      <div className="logo">
        <i className="fa-brands fa-instagram"></i>
        <p>
          {" "}
          ایستافالور
          <br />
          <span className="logo-des"> مرجع خدمات اجتماعی</span>
        </p>
      </div>

      <ul
        className="main-ul"
        id="main-ul"
        style={{ display: menuMobile ? "flex" : "" }}
      >
        {data.Menu.map((item) => {
          return (
            <li key={item.id}>
              <a href="#">
                {" "}
                <i className={item.icon}></i> {item.title}{" "}
              </a>
              {item.dropDown && (
                <div className="sub-menu">
                  <ul className="sub-menu1">
                    {item.dropDown.map((list) => {
                      return (
                        <li className="submenu-li">
                          {" "}
                          <a href="#"> {list} </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
        <div className="header-btn-box">
        <button className="btn-header" type="button">
          {" "}
          پیگیری سفارشات
        </button>
        <button className="btn-header" type="button">
          {" "}
          پشتیبانی تلگرام
        </button>
        </div>
      </ul>
    </header>
  );
}
