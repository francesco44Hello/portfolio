import Link from 'next/link';
import { useState } from 'react';

function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="hamburger-menu">
    {/* <h1>Francesco Longo</h1> */}
      <button className={`hamburger-button ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="burger">
        <span className="hamburger-icon">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </span>
      </button>
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className='links-list' style={{listStyleType: 'none'}}>
          <li><Link className='links' href="/" style={{textDecoration: 'none'}}>Home</Link></li>
          <li><Link className='links' href="about" style={{textDecoration: 'none'}}>About me</Link></li>
          <li><Link className='links' href="projects" style={{textDecoration: 'none'}}>Projects</Link></li>
          <li><Link className='links' href="contact" style={{textDecoration: 'none'}}>Contact</Link></li>
        </ul>
        
      </nav>
    </div>
  );
}

export default HamburgerMenu;

