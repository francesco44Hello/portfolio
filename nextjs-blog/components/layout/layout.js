import NavLink from "next/link";
import Link from "next/link";
import Button from "../button/button.js";
import { buttonClick } from "../functions/functions.js";
import Image from 'next/image'
// import Link from "next/link.js";

export default function Layout() {
  return (
    <div className="navbar">
    <Link    style={{ textDecoration: "none", marginLeft: '30px' }}
          href="/" >
      <Image src='/portfolio_Logo.png' width={1000} height={1000} className='logo-image' alt="Francesco Longo logo"></Image>
    </Link>
   
      <div className="navbar-elements">
        <Link
          style={{ textDecoration: "none" }}
          // activeClassName="active"
          className="links"
          href="/about"
        >
          About
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          // activeClassName="active"
          className="links"
          href="/projects"
        >
          Projects
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          // activeClassName="active"
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
