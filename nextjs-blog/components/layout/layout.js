import NavLink from "next/link";
import Link from "next/link";
import Button from "../button/button.js";
import { buttonClick } from "../functions/functions.js";
import Image from 'next/image'
// import Link from "next/link.js";

export default function Layout() {
  return (
    <div className="navbar">
    <Link    style={{ textDecoration: "none" }}
          // activeStyle={{ color: "red" }}
          // className="links"
          href="/" >
      <img src='https://i.ibb.co/NrP5ZDM/portfolio-Logo.png' alt='logo' 
      style={{ width: '6rem', height: '4.5rem'}} ></img>
    {/* <Image  src='https://i.ibb.co/T2SqB7f/logo-color.png' width={90} height={70}/> */}
    </Link>
   
      <div className="navbar-elements">
        {/* <NavLink
          style={{ textDecoration: "none" }}
          // activeStyle={{ color: "red" }}
          className="links"
          href="/"
        >
          Home
        </NavLink> */}
        <Link
          style={{ textDecoration: "none" }}
          activeClassName="active"
          className="links"
          href="/about"
        >
          About
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          activeClassName="active"
          className="links"
          href="/projects"
        >
          Projects
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          activeClassName="active"
          className="links"
          href="/contact"
        >
          Contacts
        </Link>
        <Button className="links"  handleClick={buttonClick}/>
      </div>
    </div>
  );
}
// style={{ textDecoration: "none" }} 