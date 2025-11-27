import { useDispatch, useSelector } from "react-redux";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { bagActions } from "../store/BagSlice";
import { wishlistActions } from "../store/wishlistSlice";
import { Link } from "react-router-dom";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const wishlistItems = useSelector((store) => store.wishlist);
  const elementFound = bagItems.indexOf(item.id) >= 0;
  const inWishlist = wishlistItems.includes(item.id);

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      dispatch(wishlistActions.removeFromWishlist(item.id));
    } else {
      dispatch(wishlistActions.addToWishlist(item.id));
    }
  };

  return (
    <div className="item-container">
      <Link to={`/product/${item.id}`} className="item-link">
        <div className="item-image-wrapper">
          <img className="item-image" src={item.image} alt="item image" />
          <button 
            className={`wishlist-btn ${inWishlist ? 'active' : ''}`}
            onClick={handleWishlistToggle}
            aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            {inWishlist ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
      </Link>
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <Link to={`/product/${item.id}`} className="item-link">
        <div className="item-name">{item.item_name}</div>
      </Link>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        {item.original_price > item.current_price && (
          <>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount">({item.discount_percentage}% OFF)</span>
          </>
        )}
      </div>

      {elementFound ? (
        <button
          type="button"
          className="btn btn-add-bag btn-danger"
          onClick={handleRemove}
        >
          <AiFillDelete /> Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-add-bag btn-success"
          onClick={handleAddToBag}
        >
          <GrAddCircle /> Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;