import React from "react";
import NavLink from "next/link";
import Button from "../button/button";
import { buttonClick } from "../functions/functions.js";

function Menu() {
  return (
    <>
      <div className="body">
      <NavLink    style={{ textDecoration: "none" }}
          // activeStyle={{ color: "red" }}
          // className="links"
          href="/" >
      <img src='https://i.ibb.co/NrP5ZDM/portfolio-Logo.png' alt='logo' 
      style={{ width: '6rem', height: '4.5rem'}} ></img>
    {/* <Image  src='https://i.ibb.co/T2SqB7f/logo-color.png' width={90} height={70}/> */}
    </NavLink>
        <label>
          <input type="checkbox" />
          <span class="menu">
            {" "}
            <span class="hamburger"></span>{" "}
          </span>
          {/* <ul>
            <li>
              {" "}
              <a href="#">Home</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">About</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Contact</a>{" "}
            </li>
          </ul> */}
          <ul>
          <>
            <NavLink
              style={{ textDecoration: "none" }}
              activeclassname="active"
              className="links Menu-items"
              href="/about"

            >
              About
            </NavLink>
            </>
            <>

            
            <NavLink
              style={{ textDecoration: "none" }}
              activeclassname="active"
              className="links Menu-items"
              href="/projects"
            >
              Projects
            </NavLink>
            </>
            <>
            <NavLink
              style={{ textDecoration: "none" }}
              activeclassname="active"
              className="links Menu-items"
              href="/contact"
            >
              Contacts
            </NavLink>
            </>
            <>
            <Button className="links Menu-items"  handleClick={buttonClick}/>
            </>
         
          </ul>
        </label>
        {/* <h1>Morphing Fullscreen Hamburger Menu Demo</h1> */}
      </div>
    </>
  );
  {
    /* // <div className={`Menu ${isOpen && "open"}`}>
    //   <span */
  }
  {
    /* //     className="material-icons btn-close"
    //     onClick={() => onChange(false)}
    //   >
    //     close
    //   </span>
    //   <div className="Menu-items"> */
  }
  //     {/* {items.map((item, index) => (
  //       <a href={item.itemLink} key={index}>
  //         {item.itemText}
  //       </a>
  //     ))} */}
  //     <NavLink
  //       style={{ textDecoration: "none" }}
  //       activeclassname="active"
  //       className="links Menu-items"
  //       href="/about"
  //     >
  //       About
  //     </NavLink>
  //     <NavLink
  //       style={{ textDecoration: "none" }}
  //       activeclassname="active"
  //       className="links Menu-items"
  //       href="/projects"
  //     >
  //       Projects
  //     </NavLink>
  //     <NavLink
  //       style={{ textDecoration: "none" }}
  //       activeclassname="active"
  //       className="links Menu-items"
  //       href="/contact"
  //     >
  //       Contacts
  //     </NavLink>
  //   </div>
  // </div>
  // );
}

export default Menu;
