import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router";


const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const route = useRouter();

    return (
        <>
        <header>
        <div className="menu-btn" onClick={() => setShowMenu(!showMenu)}>
          <span className={`menu-btn__burger ${showMenu ? "open" : ""}`}></span>
        </div>

        <nav className={`nav ${showMenu ? "open" : ""}`}>
          <ul className={`menu-nav ${showMenu ? "open" : ""}`} onClick={() => setShowMenu(!showMenu)}>
            <li className={`menu-nav__item ${showMenu ? "open" : ""} ${route.pathname === '/' ? 'active' : ''}`}>
              <Link href="/">
              <a  className="menu-nav__link">
                Home
              </a>
              </Link>
            </li>
            <li className={`menu-nav__item ${showMenu ? "open" : ""} ${route.pathname === '/about' ? 'active' : ''}`}>
              <Link href="/about">
              <a  className="menu-nav__link">
                About Me
              </a>
              </Link>
            </li>
            <li className={`menu-nav__item ${showMenu ? "open" : ""} ${route.pathname === '/projects' ? 'active' : ''}`}>
              <Link href="/projects">
              <a  className="menu-nav__link">
                My Projects
              </a>
              </Link>
            </li>
            <li className={`menu-nav__item ${showMenu ? "open" : ""} ${route.pathname === '/contact' ? 'active' : ''}`}>
              <Link href="/contact">
              <a  className="menu-nav__link">
                Contact
              </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
        
    </>
    )
}

export default Nav
