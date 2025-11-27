import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Bag = () => {
  const bagItems = useSelector(state => state.bag);
  const items = useSelector(state => state.items);
  const finalItems = items.filter(item => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <div>
      <main>
        <div className="bag-page">
          {finalItems.length === 0 ? (
            <div className="empty-bag-container">
              <div className="empty-bag-content">
                <div className="empty-bag-icon">🛍️</div>
                <h2 className="empty-bag-title">Hey, it feels so light!</h2>
                <p className="empty-bag-text">There is nothing in your bag. Let's add some items.</p>
                <Link to="/" className="btn-shop-now">Start Shopping</Link>
              </div>
            </div>
          ) : (
            <>
              <div className="bag-items-container">
                <h2 className="bag-page-title">My Shopping Bag ({finalItems.length})</h2>
                {finalItems.map(item => <BagItem key={item.id} item={item} />)}
              </div>
              <BagSummary />
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Bag;
