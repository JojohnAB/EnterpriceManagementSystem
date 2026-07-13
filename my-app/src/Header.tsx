import "./Header.css";

function Header() {
  return (
    <header className="header">

      <div className="logo">
        ☁️ CloudSphere
      </div>

      <div className="title">
        <h2>Enterprise Management System</h2>
        <p>Frontend • Cloud • Project Management</p>
      </div>

      <div className="profile">

        <button className="notification">
          🔔
        </button>

        <img
          src="https://static.vecteezy.com/system/resources/previews/046/409/821/non_2x/avatar-profile-icon-in-flat-style-male-user-profile-illustration-on-isolated-background-man-profile-sign-business-concept-vector.jpg"
          alt="profile"
        />

        <div>
          <h5>Admin</h5>
          <span>Administrator</span>
        </div>

      </div>

    </header>
  );
}

export default Header;