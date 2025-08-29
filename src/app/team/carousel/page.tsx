export default function TeamCarouselPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg" style={{backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)'}}>
        </div>
        <div className="container">
          <div className="page-header__inner">
            <h2 className="wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">Team Carousel</h2>
            <ul className="thm-breadcrumb wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
              <li><a href="/">Home</a></li>
              <li><span>-</span></li>
              <li>Team Carousel</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Carousel Page */}
      <section className="team-carousel-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="team-carousel-page__inner">
                <div className="owl-carousel owl-theme thm-owl__carousel team-carousel-page__carousel"
                  data-owl-options='{
                    "loop": true,
                    "autoplay": true,
                    "margin": 30,
                    "nav": false,
                    "dots": true,
                    "smartSpeed": 500,
                    "autoplayTimeout": 10000,
                    "navText": ["<span className=\"icon-arrow-right\"></span>","<span className=\"icon-arrow-left\"></span>"],
                    "responsive": {
                      "0": {
                        "items": 1
                      },
                      "768": {
                        "items": 2
                      },
                      "992": {
                        "items": 3
                      },
                      "1200": {
                        "items": 4
                      }
                    }
                  }'>

                  {/* Team Member 1 */}
                  <div className="team-two__single">
                    <div className="team-two__single-img">
                      <div className="inner">
                        <img src="/assets/images/team/team-v2-img1.jpg" alt="Team Member" />
                        <ul className="social-links">
                          <li><a href="#"><span className="icon-facebook"></span></a></li>
                          <li><a href="#"><span className="icon-twitter"></span></a></li>
                          <li><a href="#"><span className="icon-instagram"></span></a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="team-two__single-content">
                      <h2><a href="/team/details">Sarah Johnson</a></h2>
                      <p>Creative Director</p>
                    </div>
                  </div>

                  {/* Team Member 2 */}
                  <div className="team-two__single">
                    <div className="team-two__single-img">
                      <div className="inner">
                        <img src="/assets/images/team/team-v2-img2.jpg" alt="Team Member" />
                        <ul className="social-links">
                          <li><a href="#"><span className="icon-facebook"></span></a></li>
                          <li><a href="#"><span className="icon-twitter"></span></a></li>
                          <li><a href="#"><span className="icon-instagram"></span></a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="team-two__single-content">
                      <h2><a href="/team/details">Michael Chen</a></h2>
                      <p>Lead Developer</p>
                    </div>
                  </div>

                  {/* Team Member 3 */}
                  <div className="team-two__single">
                    <div className="team-two__single-img">
                      <div className="inner">
                        <img src="/assets/images/team/team-v2-img3.jpg" alt="Team Member" />
                        <ul className="social-links">
                          <li><a href="#"><span className="icon-facebook"></span></a></li>
                          <li><a href="#"><span className="icon-twitter"></span></a></li>
                          <li><a href="#"><span className="icon-instagram"></span></a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="team-two__single-content">
                      <h2><a href="/team/details">Emily Davis</a></h2>
                      <p>Project Manager</p>
                    </div>
                  </div>

                  {/* Team Member 4 */}
                  <div className="team-two__single">
                    <div className="team-two__single-img">
                      <div className="inner">
                        <img src="/assets/images/team/team-v2-img4.jpg" alt="Team Member" />
                        <ul className="social-links">
                          <li><a href="#"><span className="icon-facebook"></span></a></li>
                          <li><a href="#"><span className="icon-twitter"></span></a></li>
                          <li><a href="#"><span className="icon-instagram"></span></a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="team-two__single-content">
                      <h2><a href="/team/details">David Rodriguez</a></h2>
                      <p>UX/UI Designer</p>
                    </div>
                  </div>

                  {/* Team Member 5 */}
                  <div className="team-two__single">
                    <div className="team-two__single-img">
                      <div className="inner">
                        <img src="/assets/images/team/team-v1-img1.jpg" alt="Team Member" />
                        <ul className="social-links">
                          <li><a href="#"><span className="icon-facebook"></span></a></li>
                          <li><a href="#"><span className="icon-twitter"></span></a></li>
                          <li><a href="#"><span className="icon-linkedin"></span></a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="team-two__single-content">
                      <h2><a href="/team/details">Jennifer Wilson</a></h2>
                      <p>Marketing Specialist</p>
                    </div>
                  </div>

                  {/* Team Member 6 */}
                  <div className="team-two__single">
                    <div className="team-two__single-img">
                      <div className="inner">
                        <img src="/assets/images/team/team-v1-img2.jpg" alt="Team Member" />
                        <ul className="social-links">
                          <li><a href="#"><span className="icon-facebook"></span></a></li>
                          <li><a href="#"><span className="icon-twitter"></span></a></li>
                          <li><a href="#"><span className="icon-linkedin"></span></a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="team-two__single-content">
                      <h2><a href="/team/details">Alex Thompson</a></h2>
                      <p>Business Analyst</p>
                    </div>
                  </div>

                  {/* Team Member 7 */}
                  <div className="team-two__single">
                    <div className="team-two__single-img">
                      <div className="inner">
                        <img src="/assets/images/team/team-v1-img3.jpg" alt="Team Member" />
                        <ul className="social-links">
                          <li><a href="#"><span className="icon-facebook"></span></a></li>
                          <li><a href="#"><span className="icon-twitter"></span></a></li>
                          <li><a href="#"><span className="icon-linkedin"></span></a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="team-two__single-content">
                      <h2><a href="/team/details">Maria Garcia</a></h2>
                      <p>Quality Assurance</p>
                    </div>
                  </div>

                  {/* Team Member 8 */}
                  <div className="team-two__single">
                    <div className="team-two__single-img">
                      <div className="inner">
                        <img src="/assets/images/team/team-v2-img1.jpg" alt="Team Member" />
                        <ul className="social-links">
                          <li><a href="#"><span className="icon-facebook"></span></a></li>
                          <li><a href="#"><span className="icon-twitter"></span></a></li>
                          <li><a href="#"><span className="icon-instagram"></span></a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="team-two__single-content">
                      <h2><a href="/team/details">James Miller</a></h2>
                      <p>Backend Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}