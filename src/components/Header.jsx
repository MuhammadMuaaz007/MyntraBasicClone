import { BsFillPersonFill } from "react-icons/bs";
import { FaFaceGrinHearts, FaBagShopping, FaSearch } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const bag = useSelector((store) => store.bag);
  const wishlist = useSelector((store) => store.wishlist);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigate = useNavigate();

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

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-top-bar">
        <div className="header-top-content">
          <p className="header-offer">🎉 Free Shipping on orders above PKR 999 | Use code: MYNTRA10</p>
        </div>
      </div>
      <div className="header-container">
        <div className="logo_container">
          <Link to="/" className="logo-link">
            <img
              className="myntra_home"
              src="/images/myntra_logo.webp"
              alt="Myntra Home"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span className="logo-text" style={{display: 'none'}}>MYNTRA</span>
          </Link>
        </div>

        <nav className={`nav_bar ${isMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/category/men" onClick={() => setIsMenuOpen(false)} className="nav-link">
            <span>Men</span>
          </Link>
          <Link to="/category/women" onClick={() => setIsMenuOpen(false)} className="nav-link">
            <span>Women</span>
          </Link>
          <Link to="/category/kids" onClick={() => setIsMenuOpen(false)} className="nav-link">
            <span>Kids</span>
          </Link>
          <Link to="/category/home-living" onClick={() => setIsMenuOpen(false)} className="nav-link">
            <span>Home & Living</span>
          </Link>
          <Link to="/category/beauty" onClick={() => setIsMenuOpen(false)} className="nav-link">
            <span>Beauty</span>
          </Link>
          <Link to="/category/studio" onClick={() => setIsMenuOpen(false)} className="nav-link">
            <span>Studio</span>
            <sup className="new-badge">New</sup>
          </Link>
        </nav>

        <form 
          className={`search_bar ${isSearchFocused ? 'focused' : ''}`} 
          onSubmit={handleSearch}
        >
          <FaSearch className="search_icon" />
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
        </form>
        
        <div className="action_bar">
          <Link to="/profile" className="action_link">
            <div className="action_container">
              <BsFillPersonFill className="action_icon" />
              <span className="action_name">Profile</span>
            </div>
          </Link>
          <Link to="/wishlist" className="action_link">
            <div className="action_container">
              <FaFaceGrinHearts className="action_icon" />
              <span className="action_name">Wishlist</span>
              {wishlist.length > 0 && (
                <span className="badge-count wishlist-badge">{wishlist.length}</span>
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
    </header>
  );
};

export default Header;
