import "./_side-nav.scss";

const SideNav = () => {
  return (
    <div>
      <div className="section-title">
        <h3>Category</h3>
      </div>
      <div className="accordion">
        <div className="accordion-item individual-category">
          <div className="accordion-header">
            <button
              className="accordion-button"
              data-bs-target="#accordion-header-one"
              data-bs-toggle="collapse"
            >
              <div className="category-title">men</div>
            </button>
          </div>
          <div
            className="accordion-collapse collapse show"
            id="accordion-headeing-one"
          >
            <div className="accordion-body">
              <ul>
                <li className="sun-items">initial</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
