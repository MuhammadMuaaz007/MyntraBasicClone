import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("orders");
  const wishlistItems = useSelector((store) => store.wishlist);
  const bagItems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);

  const [user, setUser] = useState({
    name: "Muhammad Muaaz",
    email: "muaaz@example.com",
    avatar: "/images/my.jpg",
    phone: "+91 9876543210",
    address: "123 Main Street, City, State 12345",
  });

  const [editMode, setEditMode] = useState(false);
  const [editedName, setEditedName] = useState(user.name);
  const [editedEmail, setEditedEmail] = useState(user.email);
  const [editedPhone, setEditedPhone] = useState(user.phone);
  const [editedAddress, setEditedAddress] = useState(user.address);

  // Get actual wishlist items
  const wishlistItemsData = items.filter((item) => wishlistItems.includes(item.id));

  // Mock orders based on bag items
  const orders = bagItems.length > 0
    ? bagItems.slice(0, 5).map((itemId, index) => {
        const item = items.find((i) => i.id === itemId);
        return {
          id: index + 1,
          item: item ? item.item_name : "Product",
          status: index % 2 === 0 ? "Delivered" : "In Transit",
          date: index % 2 === 0 ? "2 July 2024" : "Expected: 10 July 2024",
          itemId: itemId,
        };
      })
    : [
        { id: 1, item: "No orders yet", status: "N/A", date: "Start shopping to see orders here" },
      ];

  const saveProfile = () => {
    setUser((prev) => ({
      ...prev,
      name: editedName,
      email: editedEmail,
      phone: editedPhone,
      address: editedAddress,
    }));
    setEditMode(false);
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      // In a real app, you would clear auth tokens, etc.
      navigate("/");
    }
  };

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <img src={user.avatar} alt="Avatar" className="profile-avatar" />

        {editMode ? (
          <div className="profile-edit-form">
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="profile-input"
              placeholder="Full Name"
            />
            <input
              type="email"
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
              className="profile-input"
              placeholder="Email"
            />
            <input
              type="tel"
              value={editedPhone}
              onChange={(e) => setEditedPhone(e.target.value)}
              className="profile-input"
              placeholder="Phone Number"
            />
            <textarea
              value={editedAddress}
              onChange={(e) => setEditedAddress(e.target.value)}
              className="profile-input profile-textarea"
              placeholder="Address"
              rows="3"
            />
            <div className="profile-edit-buttons">
              <button onClick={saveProfile}>Save</button>
              <button onClick={() => setEditMode(false)}>Cancel</button>
            </div>
          </div>
        ) : (
          <div className="profile-info">
            <div className="profile-name">{user.name}</div>
            <div className="profile-email">{user.email}</div>
            <div className="profile-phone">{user.phone}</div>
            <div className="profile-address">{user.address}</div>
            <button className="edit-btn" onClick={() => setEditMode(true)}>
              ✏️ Edit Profile
            </button>
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="profile-stats">
        <div className="stat-item">
          <div className="stat-value">{bagItems.length}</div>
          <div className="stat-label">Items in Bag</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{wishlistItems.length}</div>
          <div className="stat-label">Wishlist Items</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{orders.length}</div>
          <div className="stat-label">Total Orders</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="profile-tabs">
        {["orders", "wishlist", "settings"].map((tab) => (
          <div
            key={tab}
            className={`profile-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="profile-tab-content">
        {activeTab === "orders" && (
          <div>
            <div className="section-title">Your Orders</div>
            {orders.length === 0 || (orders.length === 1 && orders[0].item === "No orders yet") ? (
              <div className="empty-state">
                <p className="empty-text">No orders yet</p>
                <Link to="/" className="btn-shop-now">Start Shopping</Link>
              </div>
            ) : (
              orders.map((order) => (
                <div key={order.id} className="order-item">
                  <div>
                    <div className="order-item-name">{order.item}</div>
                    <div className="order-item-date">{order.date}</div>
                  </div>
                  <span
                    className={`order-status ${
                      order.status === "Delivered" ? "status-delivered" : "status-in-transit"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === "wishlist" && (
          <div>
            <div className="section-title">Wishlist Items ({wishlistItemsData.length})</div>
            {wishlistItemsData.length === 0 ? (
              <div className="empty-state">
                <p className="empty-text">Your wishlist is empty</p>
                <Link to="/" className="btn-shop-now">Start Shopping</Link>
              </div>
            ) : (
              <div className="profile-wishlist-grid">
                {wishlistItemsData.map((item) => (
                  <Link key={item.id} to={`/product/${item.id}`} className="profile-wishlist-item">
                    <img src={item.image} alt={item.item_name} />
                    <div className="profile-wishlist-info">
                      <div className="profile-wishlist-name">{item.item_name}</div>
                      <div className="profile-wishlist-price">Rs {item.current_price}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "settings" && (
          <div>
            <div className="section-title">Account Settings</div>
            <div className="settings-buttons">
              <button>Change Password</button>
              <button>Update Email</button>
              <button>Manage Addresses</button>
              <button>Payment Methods</button>
              <button className="logout" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
