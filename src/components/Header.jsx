import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { BsFillPersonFill } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaSearch, FaShippingFast, FaUndoAlt, FaHeadset } from "react-icons/fa";
import { FaFaceGrinHearts, FaBagShopping, FaUserPlus } from "react-icons/fa6";

const Header = () => {
  const bag = useSelector((store) => store.bag);
  const wishlist = useSelector((store) => store.wishlist);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track screen width so React re-renders on resize
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { label: "Men", path: "/category/men" },
    { label: "Women", path: "/category/women" },
    { label: "Kids", path: "/category/kids" },
    { label: "Home & Living", path: "/category/home-living" },
    { label: "Beauty", path: "/category/beauty" },
    { label: "Studio", path: "/category/studio", badge: "New" },
  ];

  // Scrolled header effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`main-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="header-main-row">
          {/* Logo */}
          <div className="logo_container">
            <Link to="/" className="logo-link">
              <img
                className="myntra_home"
                src="/images/myntra_logo.webp"
                alt="Myntra Home"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <span className="logo-text" style={{ display: "none" }}>
                MYNTRA
              </span>
            </Link>
          </div>

          {/* Desktop Nav (show only if > 765px) */}
          {screenWidth > 765 && (
            <nav className="nav_bar">
              {navLinks.map(({ label, path, badge }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  <span>{label}</span>
                  {badge && <sup className="new-badge">{badge}</sup>}
                </NavLink>
              ))}
            </nav>
          )}

          {/* Action Icons */}
          <div className="action_bar">
            <Link to="/login" className="action_link">
              <div className="action_container">
                <BsFillPersonFill className="action_icon" />
                <span className="action_name">Login</span>
              </div>
            </Link>

            <Link to="/signup" className="action_link">
              <div className="action_container">
                <FaUserPlus className="action_icon" />
                <span className="action_name">Sign Up</span>
              </div>
            </Link>

            <Link to="/wishlist" className="action_link">
              <div className="action_container">
                <FaFaceGrinHearts className="action_icon" />
                <span className="action_name">Wishlist</span>
                {wishlist.length > 0 && (
                  <span className="badge-count wishlist-badge">
                    {wishlist.length}
                  </span>
                )}
              </div>
            </Link>

            <Link to="/bag" className="action_link">
              <div className="action_container">
                <FaBagShopping className="action_icon" />
                <span className="action_name">Bag</span>
                {bag.length > 0 && (
                  <span className="badge-count bag-badge">{bag.length}</span>
                )}
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button (hamburger) */}
          {screenWidth <= 765 && !isMenuOpen && (
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              style={{
                position: "absolute",
                right: 16,
                top: 16,
                background: "none",
                border: "none",
                fontSize: "2rem",
                cursor: "pointer",
                zIndex: 2000,
              }}
            >
              <FaBars />
            </button>
          )}
        </div>

        {/* Sidebar for Mobile Nav */}
        {isMenuOpen && screenWidth <= 765 && (
          <div
            className="sidebar-nav"
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: screenWidth <= 460 ? "100vw" : "320px",
              height: "100vh",
              background: "#fff",
              boxShadow: "-2px 0 12px rgba(0,0,0,0.12)",
              zIndex: 999,
              display: "flex",
              flexDirection: "column",
              padding: "32px 24px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                onClick={() => setIsMenuOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "2rem",
                  cursor: "pointer",
                }}
              >
                <FaTimes />
              </button>
            </div>

            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                marginTop: "32px",
              }}
            >
              {navLinks.map(({ label, path, badge }) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    fontWeight: 500,
                    fontSize: "1.2rem",
                    color: "#282c3f",
                    padding: "10px 0",
                    borderBottom: "1px solid #eee",
                    textDecoration: "none",
                  }}
                >
                  {label}
                  {badge && (
                    <sup
                      style={{
                        color: "#ff4081",
                        fontWeight: 700,
                        marginLeft: 4,
                      }}
                    >
                      {badge}
                    </sup>
                  )}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
