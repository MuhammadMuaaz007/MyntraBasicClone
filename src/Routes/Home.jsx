import HomeItem from "../components/HomeItem";
import FilterBar from "../components/FilterBar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";


const Home = () => {
  const allItems = useSelector((store) => store.items);
  const [filters, setFilters] = useState({ price: "", rating: "" });
  const [sortBy, setSortBy] = useState("");

  const filteredAndSortedItems = useMemo(() => {
    let filtered = [...allItems];

    // Apply price filter
    if (filters.price) {
      const [min, max] = filters.price.split("-").map(Number);
      if (filters.price.includes("+")) {
        filtered = filtered.filter(item => item.current_price >= 2000);
      } else {
        filtered = filtered.filter(item => 
          item.current_price >= min && item.current_price <= max
        );
      }
    }

    // Apply rating filter
    if (filters.rating) {
      filtered = filtered.filter(item => item.rating.stars >= parseFloat(filters.rating));
    }

    // Apply sorting
    if (sortBy) {
      filtered.sort((a, b) => {
        switch (sortBy) {
          case "price-low":
            return a.current_price - b.current_price;
          case "price-high":
            return b.current_price - a.current_price;
          case "rating":
            return b.rating.stars - a.rating.stars;
          case "discount":
            return b.discount_percentage - a.discount_percentage;
          default:
            return 0;
        }
      });
    }

    return filtered;
  }, [allItems, filters, sortBy]);

  return (
    <main className="home-page">
      {/* Hero Banner Section */}
      <div className="banner_container">
        <div className="hero-banner">
          <div className="hero-content">
            <h1 className="hero-title">Fashion for Everyone</h1>
            <p className="hero-subtitle">Discover the latest trends and styles</p>
            <Link to="/category/men" className="btn-hero">Shop Now</Link>
          </div>
        </div>
      </div>

      {/* Category Quick Links */}
      <div className="category-quick-links">
        <Link to="/category/men" className="category-link">
          <div className="category-link-icon">👔</div>
          <span>Men</span>
        </Link>
        <Link to="/category/women" className="category-link">
          <div className="category-link-icon">👗</div>
          <span>Women</span>
        </Link>
        <Link to="/category/kids" className="category-link">
          <div className="category-link-icon">👶</div>
          <span>Kids</span>
        </Link>
        <Link to="/category/beauty" className="category-link">
          <div className="category-link-icon">💄</div>
          <span>Beauty</span>
        </Link>
      </div>

      {/* Products Section */}
      <div className="products-section">
        <div className="section-header">
          <h2 className="category_heading">All Products</h2>
        </div>
        
        <FilterBar 
          onFilterChange={setFilters}
          onSortChange={setSortBy}
          totalItems={filteredAndSortedItems.length}
        />

        {filteredAndSortedItems.length === 0 ? (
          <div className="no-products">
            <p className="empty-text">No products found matching your filters</p>
            <button 
              className="btn-clear-all"
              onClick={() => {
                setFilters({ price: "", rating: "" });
                setSortBy("");
              }}
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="items-container">
            {filteredAndSortedItems.map((item) => (
              <HomeItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;

