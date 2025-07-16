
const wishlistItems = [
  {
    id: 1,
    name: "Red Hoodie",
    brand: "Roadster",
    price: 1299,
    image: "/images/hoodie.jpg",
  },
  {
    id: 2,
    name: "White Sneakers",
    brand: "HRX",
    price: 2499,
    image: "/images/sneakers.jpg",
  },
];

const Wishlist = () => {
  return (
    <div className="wishlist-container">
      <h2 className="wishlist-title">My Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <p className="empty-text">Your wishlist is empty 😢</p>
      ) : (
        <div className="wishlist-grid">
          {wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-card">
              <img src={item.image} alt={item.name} className="wishlist-img" />
              <div className="wishlist-info">
                <h4>{item.name}</h4>
                <p>{item.brand}</p>
                <p className="price">Rs {item.price}</p>
                <button className="btn-move-to-cart">Move to Bag</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
