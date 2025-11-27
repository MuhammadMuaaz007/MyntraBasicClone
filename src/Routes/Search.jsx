import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const items = useSelector((store) => store.items);

  const filteredItems = items.filter((item) => {
    const searchTerm = query.toLowerCase();
    return (
      item.item_name.toLowerCase().includes(searchTerm) ||
      item.company.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <main>
      <div className="search-results-container">
        <h2 className="search-results-title">
          {query ? `Search Results for "${query}"` : "Search Products"}
        </h2>
        {query && (
          <p className="search-results-count">
            {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"} found
          </p>
        )}
        {filteredItems.length === 0 ? (
          <div className="no-results">
            <p className="empty-text">No products found matching "{query}"</p>
            <p className="empty-text-sub">Try searching with different keywords</p>
          </div>
        ) : (
          <div className="items-container">
            {filteredItems.map((item) => (
              <HomeItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Search;

