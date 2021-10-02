import React from "react"
import { FaAlignRight } from "react-icons/fa"
import pageLinks from "../constants/links"
import { Link } from "gatsby"

import logo from "../assets/images/logo.png"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="web dev" />
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <ul className="nav-links">
          {pageLinks.map(link => {
            return (
              <Link key={link.id} to={link.url} className={link.cName}>
                {link.text}
              </Link>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
