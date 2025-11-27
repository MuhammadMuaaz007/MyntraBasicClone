import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bagActions } from "../store/BagSlice";
import { wishlistActions } from "../store/wishlistSlice";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((store) => store.items);
  const bagItems = useSelector((store) => store.bag);
  const wishlistItems = useSelector((store) => store.wishlist);
  
  const item = items.find((item) => item.id === id);

  if (!item) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <Link to="/" className="btn-shop-now">Go to Home</Link>
      </div>
    );
  }

  // Calculate delivery date (mock - in real app, this would be dynamic)
  const deliveryDate = item.delivery_date || "10 Oct 2024";

  const inBag = bagItems.includes(item.id);
  const inWishlist = wishlistItems.includes(item.id);

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  const handleWishlistToggle = () => {
    if (inWishlist) {
      dispatch(wishlistActions.removeFromWishlist(item.id));
    } else {
      dispatch(wishlistActions.addToWishlist(item.id));
    }
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail-content">
        <div className="product-detail-image-section">
          <img src={item.image} alt={item.item_name} className="product-detail-image" />
        </div>
        <div className="product-detail-info-section">
          <h1 className="product-detail-name">{item.item_name}</h1>
          <p className="product-detail-company">{item.company}</p>
          
          <div className="product-detail-rating">
            <span className="rating-stars">{item.rating.stars} ⭐</span>
            <span className="rating-count">({item.rating.count} ratings)</span>
          </div>

          <div className="product-detail-price-section">
            <span className="product-detail-current-price">Rs {item.current_price}</span>
            {item.original_price > item.current_price && (
              <>
                <span className="product-detail-original-price">Rs {item.original_price}</span>
                <span className="product-detail-discount">({item.discount_percentage}% OFF)</span>
              </>
            )}
          </div>

          {item.return_period && (
            <div className="product-detail-return">
              <span className="return-period-days">{item.return_period} days</span> return available
            </div>
          )}

          {deliveryDate && (
            <div className="product-detail-delivery">
              Delivery by <span className="delivery-details-days">{deliveryDate}</span>
            </div>
          )}

          <div className="product-detail-actions">
            <button
              className={`btn-product-action ${inBag ? 'btn-remove' : 'btn-add-bag'}`}
              onClick={inBag ? handleRemoveFromBag : handleAddToBag}
            >
              {inBag ? (
                <>
                  <AiFillDelete /> Remove from Bag
                </>
              ) : (
                <>
                  <GrAddCircle /> Add to Bag
                </>
              )}
            </button>
            <button
              className={`btn-product-action btn-wishlist ${inWishlist ? 'active' : ''}`}
              onClick={handleWishlistToggle}
            >
              {inWishlist ? (
                <>
                  <FaHeart /> Remove from Wishlist
                </>
              ) : (
                <>
                  <FaRegHeart /> Add to Wishlist
                </>
              )}
            </button>
          </div>

          <div className="product-detail-description">
            <h3>Product Details</h3>
            <p>High quality product from {item.company}. This item is carefully selected to meet our quality standards.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

