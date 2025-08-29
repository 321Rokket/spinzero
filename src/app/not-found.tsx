export default function NotFound() {
  return (
    <div className="error-page">
      <div className="container">
        <div className="error-page__inner">
          <div className="error-page__content">
            <div className="error-page__404">
              <h1>404</h1>
            </div>

            <div className="error-page__text">
              <h2>Oops! Page Not Found</h2>
              <p>The page you are looking for doesn't exist or has been moved. Don't worry, it happens to the best of us.</p>
            </div>

            <div className="error-page__search">
              <form className="error-page__search-form" action="/" method="GET">
                <div className="form-group">
                  <input type="search" name="s" placeholder="Search here..." />
                  <button type="submit">
                    <span className="icon-magnifying-glass"></span>
                  </button>
                </div>
              </form>
            </div>

            <div className="error-page__btn">
              <a className="thm-btn" href="/">
                <span className="txt">Back to Homepage</span>
                <span className="bdrl"></span>
                <span className="bdrr"></span>
              </a>
            </div>

            <div className="error-page__links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Our Services</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div className="error-page__image">
            <div className="error-illustration">
              <div className="error-icon">
                <span className="icon-cross-out"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}