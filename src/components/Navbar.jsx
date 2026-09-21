import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/skills", "Skills"],
  ["/projects", "Projects"],
  ["/resume", "Resume"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-wrap">
      <nav className="navbar">

        {/* Logo */}
        <Link
          to="/"
          className="brand"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark">B</span>
          <span>
            Bhavani<span className="brand-dot">.</span>
          </span>
        </Link>

        {/* Mobile Menu */}
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <div className={`nav-links ${open ? "open" : ""}`}>

          {links.map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              {label}
            </NavLink>
          ))}

          {/* LET'S TALK → CONTACT */}
          <Link
            to="/contact"
            className="nav-cta"
            onClick={() => setOpen(false)}
          >
            Let's Talk <span>↗</span>
          </Link>

        </div>
      </nav>
    </header>
  );
}