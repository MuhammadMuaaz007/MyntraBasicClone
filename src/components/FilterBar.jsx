import { useState } from "react";
import { FaFilter, FaSort } from "react-icons/fa";

const FilterBar = ({ onFilterChange, onSortChange, totalItems }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handlePriceFilter = (priceRange) => {
    setSelectedPrice(priceRange);
    onFilterChange({ price: priceRange, rating: selectedRating });
  };

  const handleRatingFilter = (rating) => {
    setSelectedRating(rating);
    onFilterChange({ price: selectedPrice, rating: rating });
  };

  const handleSort = (sortType) => {
    setSortBy(sortType);
    onSortChange(sortType);
  };

  const clearFilters = () => {
    setSelectedPrice("");
    setSelectedRating("");
    setSortBy("");
    onFilterChange({ price: "", rating: "" });
    onSortChange("");
  };

  return (
    <div className="filter-bar-container">
      <div className="filter-bar-header">
        <div className="filter-info">
          <span className="total-items">{totalItems} items</span>
        </div>
        <div className="filter-actions">
          <button 
            className="filter-toggle-btn"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FaFilter /> Filters
          </button>
          <div className="sort-dropdown">
            <FaSort className="sort-icon" />
            <select 
              value={sortBy} 
              onChange={(e) => handleSort(e.target.value)}
              className="sort-select"
            >
              <option value="">Sort By</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating: High to Low</option>
              <option value="discount">Discount: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {showFilters && (
        <div className="filter-panel">
          <div className="filter-section">
            <h4>Price Range</h4>
            <div className="filter-options">
              <button 
                className={`filter-btn ${selectedPrice === "0-500" ? "active" : ""}`}
                onClick={() => handlePriceFilter("0-500")}
              >
                Under PKR 500
              </button>
              <button 
                className={`filter-btn ${selectedPrice === "500-1000" ? "active" : ""}`}
                onClick={() => handlePriceFilter("500-1000")}
              >
                PKR 500 - PKR 1000
              </button>
              <button 
                className={`filter-btn ${selectedPrice === "1000-2000" ? "active" : ""}`}
                onClick={() => handlePriceFilter("1000-2000")}
              >
                PKR 1000 - PKR 2000
              </button>
              <button 
                className={`filter-btn ${selectedPrice === "2000+" ? "active" : ""}`}
                onClick={() => handlePriceFilter("2000+")}
              >
                Above PKR 2000
              </button>
            </div>
          </div>

          <div className="filter-section">
            <h4>Rating</h4>
            <div className="filter-options">
              <button 
                className={`filter-btn ${selectedRating === "4" ? "active" : ""}`}
                onClick={() => handleRatingFilter("4")}
              >
                4+ ⭐
              </button>
              <button 
                className={`filter-btn ${selectedRating === "3" ? "active" : ""}`}
                onClick={() => handleRatingFilter("3")}
              >
                3+ ⭐
              </button>
              <button 
                className={`filter-btn ${selectedRating === "2" ? "active" : ""}`}
                onClick={() => handleRatingFilter("2")}
              >
                2+ ⭐
              </button>
            </div>
          </div>

          {(selectedPrice || selectedRating) && (
            <button className="clear-filters-btn" onClick={clearFilters}>
              Clear Filters
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterBar;

