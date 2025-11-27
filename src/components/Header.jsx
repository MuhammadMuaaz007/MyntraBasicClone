import { BsFillPersonFill } from "react-icons/bs";
// import { FaFaceGrinHearts, FaBagShopping, FaSearch } from "react-icons/fa";
import { FaSearch, FaShippingFast, FaUndoAlt, FaHeadset } from "react-icons/fa";
import { FaFaceGrinHearts, FaBagShopping, FaUserPlus } from "react-icons/fa6";

import { FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const bag = useSelector((store) => store.bag);
  const wishlist = useSelector((store) => store.wishlist);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: "Men", path: "/category/men" },
    { label: "Women", path: "/category/women" },
    { label: "Kids", path: "/category/kids" },
    { label: "Home & Living", path: "/category/home-living" },
    { label: "Beauty", path: "/category/beauty" },
    { label: "Studio", path: "/category/studio", badge: "New" },
  ];

  const quickSearches = [
    "New Arrivals",
    "Casual Wear",
    "Sneakers",
    "Kids Essentials",
    "Home Decor",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  const handleQuickSearch = (term) => {
    navigate(`/search?q=${encodeURIComponent(term)}`);
    setIsMenuOpen(false);
  };

  return (
    <header className={`main-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="header-main-row">
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

          <nav className={`nav_bar ${isMenuOpen ? "mobile-open" : ""}`}>
            {navLinks.map(({ label, path, badge }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                <span>{label}</span>
                {badge && <sup className="new-badge">{badge}</sup>}
              </NavLink>
            ))}
          </nav>

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

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="header-bottom-row">
          <form
            className={`search_bar ${isSearchFocused ? "focused" : ""}`}
            onSubmit={handleSearch}
          >
            <FaSearch className="search_icon" />
            <input
              className="search_input"
              placeholder="Search for products, brands and more"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </form>

          <div className="header-quick-links">
            {quickSearches.map((term) => (
              <button
                key={term}
                type="button"
                className="quick-link-chip"
                onClick={() => handleQuickSearch(term)}
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
