import React, { useState } from "react";
import "./header.css";

const Menu = () => {
  return (
    <>
      <ul>
        <li>
          <a href="#modelS">Model S</a>
        </li>
        <li>
          <a href="#model3">Model 3</a>
        </li>
        <li>
          <a href="#modelX">Model X</a>
        </li>
        <li>
          <a href="#modelY">Model Y</a>
        </li>
        <li>
          <a href="#solarPanels">Solar Panels</a>
        </li>
        <li>
          <a href="#solarRoof">Solar Roof</a>
        </li>
      </ul>
    </>
  );
};
const Header = () => {
  const [sidetoggle, setsidetoggle] = useState(false);
  return (
    <div className="navbar">
      <img
        className=".navbar-logo"
        src="https://png.monster/wp-content/uploads/2021/03/Tesla_Inc.-Wordmark-Black-Logo.wine-6bbe293a-370x247.png"
        alt=""
      />
      <div className="nav-menu">
        <Menu />
      </div>
      <div className="leftside-menu">
        <ul>
          <div className="leftside-menu-extra">
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Account</a>
            </li>
          </div>
          {
            <li>
              <a onClick={()=>setsidetoggle(true)}>Menu</a>
            </li>
          }
        </ul>
      </div>

{ sidetoggle &&
      <div className="burgur-menu">
        <div className="closeBtn">
          <div className="closeBtn-hoverBorder">
            <i onClick={()=>setsidetoggle(false)} className="fas fa-times"></i>
          </div>
        </div>
        <div className="burgerNav-mobile-menu">
          <Menu/>
          <div className="burgerNav-mobile-menu-extra">
          <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Account</a>
            </li>
          </div>
          
        </div>
        <li>
          <a href="">Existing Inventory</a>
        </li>
        <li>
          <a href="">Used Inventory</a>
        </li>
        <li>
          <a href="">Trade-In</a>
        </li>
        <li>
          <a href="">Test Drive</a>
        </li>
        <li>
          <a href="">Cybertruck</a>
        </li>
        <li>
          <a href="">Roadster</a>
        </li>
      </div>
      }
    </div>
  );
};

export default Header;
