import { useState } from "react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("orders");

  const [user, setUser] = useState({
    name: "Muhammad Muaaz",
    email: "muaaz@example.com",
    avatar: "/images/my.jpg",
  });

  const [editMode, setEditMode] = useState(false);
  const [editedName, setEditedName] = useState(user.name);
  const [editedEmail, setEditedEmail] = useState(user.email);

  const orders = [
    { id: 1, item: "Running Shoes", status: "Delivered", date: "2 July 2025" },
    { id: 2, item: "Cotton T-shirt", status: "In Transit", date: "Expected: 10 July 2025" },
  ];

  const wishlist = [
    { id: 1, name: "Red Hoodie" },
    { id: 2, name: "Leather Wallet" },
  ];

  const saveProfile = () => {
    setUser((prev) => ({
      ...prev,
      name: editedName,
      email: editedEmail,
    }));
    setEditMode(false);
  };

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <img src={user.avatar} alt="Avatar" className="profile-avatar" />

        {editMode ? (
          <div>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="profile-input"
            />
            <input
              type="email"
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
              className="profile-input"
            />
            <div className="profile-edit-buttons">
              <button onClick={saveProfile}>Save</button>
              <button onClick={() => setEditMode(false)}>Cancel</button>
            </div>
          </div>
        ) : (
          <div>
            <div className="profile-name">{user.name}</div>
            <div className="profile-email">{user.email}</div>
            <button className="edit-btn" onClick={() => setEditMode(true)}>
              ✏️ Edit Profile
            </button>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="profile-tabs">
        {["orders", "wishlist", "settings"].map((tab) => (
          <div
            key={tab}
            className={`profile-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "orders" && (
          <div>
            <div className="section-title">Your Orders</div>
            {orders.map((order) => (
              <div key={order.id} className="order-item">
                <div>
                  <div>{order.item}</div>
                  <div style={{ color: "gray", fontSize: "14px" }}>{order.date}</div>
                </div>
                <span
                  className={`order-status ${
                    order.status === "Delivered" ? "status-delivered" : "status-in-transit"
                  }`}
                >
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "wishlist" && (
          <div>
            <div className="section-title">Wishlist Items</div>
            <ul className="wishlist-list">
              {wishlist.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "settings" && (
          <div>
            <div className="section-title">Account Settings</div>
            <div className="settings-buttons">
              <button>Change Password</button>
              <button>Update Email</button>
              <button className="logout">Logout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
