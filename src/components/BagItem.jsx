import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa";
import { bagActions } from "../store/BagSlice";
import { useState } from "react";

const BagItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const [quantity, setQuantity] = useState(1);

  const handleRemoveItem = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveItem();
      return;
    }
    if (newQuantity > 10) {
      return;
    }
    setQuantity(newQuantity);
    // In a real app, you'd update the quantity in the store
  };

  return (
    <div className="bag-item-container">
      <div className="item-left-part">
        <img className="bag-item-img" src={item.image} />
      </div>
      <div className="item-right-part">
        <div className="company">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price-container">
          <span className="current-price">Rs {item.current_price * quantity}</span>
          <span className="original-price">Rs {item.original_price * quantity}</span>
          <span className="discount-percentage">
            ({item.discount_percentage}% OFF)
          </span>
        </div>
        <div className="quantity-selector">
          <span className="quantity-label">Quantity:</span>
          <div className="quantity-controls">
            <button 
              className="quantity-btn"
              onClick={() => handleQuantityChange(quantity - 1)}
            >
              <FaMinus />
            </button>
            <span className="quantity-value">{quantity}</span>
            <button 
              className="quantity-btn"
              onClick={() => handleQuantityChange(quantity + 1)}
            >
              <FaPlus />
            </button>
          </div>
        </div>
        <div className="return-period">
          <span className="return-period-days">{item.return_period} days</span>{" "}
          return available
        </div>
        {item.delivery_date && (
          <div className="delivery-details">
            Delivery by
            <span className="delivery-details-days">{item.delivery_date}</span>
          </div>
        )}
      </div>

      <div className="remove-from-cart" onClick={handleRemoveItem}>
        <RiDeleteBin5Fill />
      </div>
    </div>
  );
};

export default BagItem;