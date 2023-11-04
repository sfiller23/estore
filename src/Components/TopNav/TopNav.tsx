import "./_top-nav.scss";

const TopNav = () => {
  return (
    <div>
      <div className="header bd-dark">
        <div className="row top-nav-row">
          <div className="brand my-1">
            <h1> eStore </h1>
          </div>
          <div className="inp-container">
            <div className="dropdown m-0 p-0">
              <select className="select-btn"></select>
            </div>
            <input className="form-control" placeholder="Search..." />
            <button>
              <i className="fa fa-search" />
            </button>
          </div>
          <div className="login-container p-0">
            <i className="fa fa-user-circle user-icon" />
            <h5>Login</h5>
            <h5>Register</h5>
          </div>
          <div className="cart-wishlist">
            <ul>
              <li className="list-icon "></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
