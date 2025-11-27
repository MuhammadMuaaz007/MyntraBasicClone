import { useSelector, useDispatch } from "react-redux";
import { wishlistActions } from "../store/wishlistSlice";
import { bagActions } from "../store/BagSlice";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { GrAddCircle } from "react-icons/gr";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItemIds = useSelector((store) => store.wishlist);
  const items = useSelector((store) => store.items);
  
  const wishlistItems = items.filter((item) => {
    return wishlistItemIds.includes(item.id);
  });

  const handleMoveToBag = (itemId) => {
    dispatch(bagActions.addToBag(itemId));
    dispatch(wishlistActions.removeFromWishlist(itemId));
  };

  const handleRemoveFromWishlist = (itemId) => {
    dispatch(wishlistActions.removeFromWishlist(itemId));
  };

  return (
    <div className="wishlist-container">
      <h2 className="wishlist-title">My Wishlist ({wishlistItems.length})</h2>

      {wishlistItems.length === 0 ? (
        <div className="empty-state">
          <p className="empty-text">Your wishlist is empty 😢</p>
          <Link to="/" className="btn-shop-now">Start Shopping</Link>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-card">
              <Link to={`/product/${item.id}`} className="wishlist-link">
                <img src={item.image} alt={item.item_name} className="wishlist-img" />
              </Link>
              <div className="wishlist-info">
                <Link to={`/product/${item.id}`} className="wishlist-link">
                  <h4>{item.item_name}</h4>
                  <p className="wishlist-brand">{item.company}</p>
                </Link>
                <div className="wishlist-price-container">
                  <span className="current-price">Rs {item.current_price}</span>
                  {item.original_price > item.current_price && (
                    <>
                      <span className="original-price">Rs {item.original_price}</span>
                      <span className="discount">({item.discount_percentage}% OFF)</span>
                    </>
                  )}
                </div>
                <div className="wishlist-rating">
                  {item.rating.stars} ⭐ | {item.rating.count}
                </div>
                <div className="wishlist-actions">
                  <button 
                    className="btn-move-to-cart" 
                    onClick={() => handleMoveToBag(item.id)}
                  >
                    <GrAddCircle /> Move to Bag
                  </button>
                  <button 
                    className="btn-remove-wishlist" 
                    onClick={() => handleRemoveFromWishlist(item.id)}
                  >
                    <RiDeleteBin5Fill /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
