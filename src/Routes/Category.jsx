import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useMemo } from "react";
import HomeItem from "../components/HomeItem";
import FilterBar from "../components/FilterBar";

const Category = () => {
  const { category } = useParams();
  const allItems = useSelector((store) => store.items);
  const [filters, setFilters] = useState({ price: "", rating: "" });
  const [sortBy, setSortBy] = useState("");

  const categoryMap = {
    men: ["Men", "Nike", "ADIDAS", "The  Garage Co", "Nivea"],
    women: ["Women", "CUKOO", "NUEVOSDAMAS", "Carlton London"],
    kids: ["Kids"],
    "home-living": ["Home", "Living"],
    beauty: ["Beauty", "Nivea"],
    "gift-card": [],
    insider: [],
    studio: []
  };

  const categoryKeywords = categoryMap[category] || [];
  
  const categoryItems = categoryKeywords.length > 0
    ? allItems.filter((item) =>
        categoryKeywords.some((keyword) =>
          item.company.toLowerCase().includes(keyword.toLowerCase()) ||
          item.item_name.toLowerCase().includes(keyword.toLowerCase())
        )
      )
    : allItems;

  const filteredAndSortedItems = useMemo(() => {
    let filtered = [...categoryItems];

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
  }, [categoryItems, filters, sortBy]);

  const categoryTitles = {
    men: "Men's Fashion",
    women: "Women's Fashion",
    kids: "Kids' Fashion",
    "home-living": "Home & Living",
    beauty: "Beauty",
    "gift-card": "Gift Cards",
    insider: "Myntra Insider",
    studio: "Studio"
  };

  const title = categoryTitles[category] || "Category";

  return (
    <main>
      <div className="category-page">
        <div className="section-header">
          <h2 className="category-heading">{title}</h2>
        </div>
        
        <FilterBar 
          onFilterChange={setFilters}
          onSortChange={setSortBy}
          totalItems={filteredAndSortedItems.length}
        />

        {filteredAndSortedItems.length === 0 ? (
          <div className="empty-state">
            <p className="empty-text">No products found in this category</p>
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

export default Category;

