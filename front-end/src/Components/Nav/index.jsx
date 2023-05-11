import React from "react";

import "./style.scss";
import { FaRegClock } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import { FaSistrix } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { RiScales3Fill } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
// import { AiOutlineMenu } from "react-icons/ai";
import Apple from "../../Assets/Image/Apple.gif";

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="gif-container">
          <img src={Apple} alt="" />
        </div>

        <div className="first-nav">
          <div className="li-container">
            <div className="li-first">
              <ul>
                <li className="nav-link">Haqqımızda</li>
                <li className="nav-link">Ödəniş və Çatdırılma</li>
                <li className="nav-link">Mağazalarımız</li>
              </ul>
            </div>
            <div className="li-second">
              <ul>
                <li className="nav-link">Biznes Üçün</li>
                <li className="nav-link">Tax Free</li>
                <div className="lineV"></div>
              </ul>
            </div>
          </div>

          <div className="time-numbers">
            <i className="clock">
              {" "}
              <FaRegClock />{" "}
            </i>
            <span className="clock"> 09:00-21:00 (Be-B)</span>
            <i className="phone">
              {" "}
              <HiOutlinePhone />
            </i>
            <span className="numbers">
              {" "}
              +994(12) 310 15 44 <br />
              +994(50) 776 00 50{" "}
            </span>
          </div>

          <div className="nav-lang">
            <span>AZ</span>
            <div className="lineV"></div>
            <span>EN</span>
            <div className="lineV"></div>
            <span>RU</span>
          </div>

          <div className="nav-btn">
            <i>
              {" "}
              <FaRegUser />
            </i>
            <button> Şəxsi Kabinet</button>
          </div>
        </div>

        <div className="Second-nav">
          <div className="logo">
            <h1>ISpace</h1>
            {/* <AiOutlineMenu/> */}
            <div className="lineWhite"></div>
            <div className="icon">
              <FaApple />
              <p>
                Premium
                <br /> Reseller
              </p>
            </div>
          </div>
         <div className="second-navbar">

        
          <div className="products-services">
            <ul>
              <i className="icon">
                {" "}
                <FaSistrix />
              </i>

              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>Tv</li>
              <li>AirPods</li>
              <li>Audio</li>
              <li>Aksesuarlar</li>
              <li>Brendler</li>
              <div className="lineV"></div>
              <li>Xidmetler</li>
              <li>Servis</li>
              <li>Bloglar</li>
            </ul>
          </div>

          <div className="icons">
            <i className="icon">
              {" "}
              <RiScales3Fill />
            </i>
            <i className="icon">
              <AiOutlineHeart />
            </i>
            <i className="icon">
              {" "}
              <FaShoppingCart />
            </i>
          </div>

          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Nav;
