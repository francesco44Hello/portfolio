import Head from 'next/head';
import Image from 'next/image';
// import utilStyles from '../styles/utils.module.css';
import NavLink from 'next/link';
import DownloadButton from '../DownloadButton';

const name = 'Francesco';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div className="navbar">
    <div className="navbar-elements">
      <NavLink style={{ textDecoration: 'none' }} activeStyle={{fontWeight: "bold"}} className="links" href="/home/home">Home</NavLink>
      <NavLink style={{ textDecoration: 'none' }} activeClassName="active" className="links" href="/about/about">About</NavLink>
      <NavLink style={{ textDecoration: 'none' }} activeClassName="active" className="links" href="/projects/projects">Projects</NavLink>
      <NavLink style={{ textDecoration: 'none' }} activeClassName="active" className="links" href="/contact/contact">Contact me</NavLink>
      <DownloadButton style={{ textDecoration: 'none' }} className="links"/>
    </div>
   {/* <footer>
    <div><h1>footer</h1></div>
   </footer> */}
  </div>
  )}