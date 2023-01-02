import NavLink from "next/link";
import Button from "../button/button.js";

export default function Layout() {
  return (
    <div className="navbar">
      <div className="navbar-elements">
        <NavLink
          style={{ textDecoration: "none" }}
          activeStyle={{ color: "red" }}
          className="links"
          href="/home/home"
        >
          Home
        </NavLink>
        <NavLink
          style={{ textDecoration: "none" }}
          activeclassname="active"
          className="links"
          href="/about/about"
        >
          About
        </NavLink>
        <NavLink
          style={{ textDecoration: "none" }}
          activeclassname="active"
          className="links"
          href="/projects/projects"
        >
          Projects
        </NavLink>
        <NavLink
          style={{ textDecoration: "none" }}
          activeclassname="active"
          className="links"
          href="/contact/contact"
        >
          Contact me
        </NavLink>
        <Button style={{ textDecoration: "none" }} className="links" />
      </div>
    </div>
  );
}
