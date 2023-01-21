import NavLink from "next/link";
import Button from "../button/button.js";
import { buttonClick } from "../functions/functions.js";
import Image from 'next/image'

export default function Layout() {
  return (
    <div className="navbar">
    <NavLink    style={{ textDecoration: "none" }}
          // activeStyle={{ color: "red" }}
          // className="links"
          href="/" >
      <img src='https://i.ibb.co/NrP5ZDM/portfolio-Logo.png' alt='logo' 
      style={{ width: '6rem', height: '4.5rem'}} ></img>
    {/* <Image  src='https://i.ibb.co/T2SqB7f/logo-color.png' width={90} height={70}/> */}
    </NavLink>
   
      <div className="navbar-elements">
        {/* <NavLink
          style={{ textDecoration: "none" }}
          // activeStyle={{ color: "red" }}
          className="links"
          href="/"
        >
          Home
        </NavLink> */}
        <NavLink
          style={{ textDecoration: "none" }}
          activeclassname="active"
          className="links Menu-items"
          href="/about"
        >
          About
        </NavLink>
        <NavLink
          style={{ textDecoration: "none" }}
          activeclassname="active"
          className="links Menu-items"
          href="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          style={{ textDecoration: "none" }}
          activeclassname="active"
          className="links Menu-items"
          href="/contact"
        >
          Contacts
        </NavLink>
        <Button className="download"  handleClick={buttonClick}/>
      </div>
    </div>
  );
}
// style={{ textDecoration: "none" }} 