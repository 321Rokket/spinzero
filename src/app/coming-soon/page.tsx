export default function ComingSoonPage() {
  return (
    <div className="coming-soon-page">
      <div className="coming-soon-page__bg" style={{backgroundImage: 'url(/assets/images/backgrounds/coming-soon-page-style1-bg.jpg)'}}>
        <div className="container">
          <div className="coming-soon-page__inner">
            <div className="coming-soon-page__logo">
              <a href="/">
                <img src="/assets/images/resources/logo-1.png" alt="SpinZero" />
              </a>
            </div>

            <div className="coming-soon-page__content">
              <h1>Something Amazing is Coming Soon</h1>
              <p>We're working hard to bring you something incredible. Stay tuned for our exciting new features and updates!</p>

              <div className="coming-soon-page__countdown">
                <div className="countdown-timer" data-countdown="2024/12/31">
                  <div className="countdown-item">
                    <span className="countdown-number days">365</span>
                    <span className="countdown-text">Days</span>
                  </div>
                  <div className="countdown-item">
                    <span className="countdown-number hours">24</span>
                    <span className="countdown-text">Hours</span>
                  </div>
                  <div className="countdown-item">
                    <span className="countdown-number minutes">60</span>
                    <span className="countdown-text">Minutes</span>
                  </div>
                  <div className="countdown-item">
                    <span className="countdown-number seconds">60</span>
                    <span className="countdown-text">Seconds</span>
                  </div>
                </div>
              </div>

              <div className="coming-soon-page__newsletter">
                <h3>Get Notified When We Launch</h3>
                <p>Be the first to know when we go live. Subscribe to our newsletter for updates.</p>
                <form className="coming-soon-page__newsletter-form" action="#" method="POST">
                  <div className="form-group">
                    <input type="email" name="email" placeholder="Enter your email address" required />
                    <button type="submit" className="thm-btn">
                      <span className="txt">Notify Me</span>
                      <span className="bdrl"></span>
                      <span className="bdrr"></span>
                    </button>
                  </div>
                </form>
              </div>

              <div className="coming-soon-page__social">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#"><span className="icon-facebook"></span></a>
                  <a href="#"><span className="icon-twitter"></span></a>
                  <a href="#"><span className="icon-instagram"></span></a>
                  <a href="#"><span className="icon-linkedin"></span></a>
                </div>
              </div>

              <div className="coming-soon-page__back-link">
                <a href="/" className="back-to-home">
                  <span className="icon-arrow-left"></span>
                  Back to Homepage
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}