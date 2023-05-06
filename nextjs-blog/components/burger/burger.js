// import { useState } from 'react';

// function HamburgerMenu() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="hamburger-menu">
//       <button className="hamburger-button" onClick={toggleMenu}>
//         <span className="hamburger-icon"></span>
//       </button>
//       <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
//         <ul>
//           <li><a href="#">Menu item 1</a></li>
//           <li><a href="#">Menu item 2</a></li>
//           <li><a href="#">Menu item 3</a></li>
//           <li><a href="#">Menu item 4</a></li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default HamburgerMenu;
import Link from 'next/link';
import { useState } from 'react';

function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="hamburger-menu">
      <button className={`hamburger-button ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="hamburger-icon">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </span>
      </button>
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className='links-list' style={{listStyleType: 'none'}}>
          <li><Link className='links' href="index" style={{textDecoration: 'none'}}>Home</Link></li>
          <li><Link className='links' href="about" style={{textDecoration: 'none'}}>About me</Link></li>
          <li><Link className='links' href="projects" style={{textDecoration: 'none'}}>Projects</Link></li>
          <li><Link className='links' href="contact" style={{textDecoration: 'none'}}>Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default HamburgerMenu;

