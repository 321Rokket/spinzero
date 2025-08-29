export default function TeamPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg" style={{backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)'}}>
        </div>
        <div className="container">
          <div className="page-header__inner">
            <h2 className="wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">Our Team</h2>
            <ul className="thm-breadcrumb wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
              <li><a href="/">Home</a></li>
              <li><span>-</span></li>
              <li>Our Team</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Two */}
      <section className="team-two">
        <div className="container">
          {/* Team Two Top */}
          <div className="team-two__top">
            <div className="container">
              <div className="team-two__top-inner">
                <div className="sec-title tg-heading-subheading animation-style2">
                  <div className="sec-title__tagline">
                    <p className="tg-element-title">professionals</p>
                    <div className="border-box"></div>
                  </div>
                  <h2 className="sec-title__title tg-element-title">Meet Our Experts</h2>
                </div>

                <div className="btn-box">
                  <a className="thm-btn" href="/contact">
                    <span className="txt">View More Details</span>
                    <span className="bdrl"></span>
                    <span className="bdrr"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="team-two__bottom">
            <div className="container">
              <div className="row">
                {/* Team Two Single */}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                  <div className="team-two__single">
                    <div className="team-two__single-img">
                      <div className="inner">
                        <img src="/assets/images/team/team-v2-img1.jpg" alt="#" />
                        <ul className="social-links">
                          <li><a href="#"><span className="icon-facebook"></span></a></li>
                          <li><a href="#"><span className="icon-twitter"></span></a></li>
                          <li><a href="#"><span className="icon-instagram"></span></a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="team-two__single-content">
                      <h2><a href="#">Alrans Mit</a></h2>
                      <p>Designer</p>
                    </div>
                  </div>
                </div>

                {/* Team Two Single */}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-delay=".3s">
                  <div className="team-two__single">
                    <div className="team-two__single-img">
                      <div className="inner">
                        <img src="/assets/images/team/team-v2-img2.jpg" alt="#" />
                        <ul className="social-links">
                          <li><a href="#"><span className="icon-facebook"></span></a></li>
                          <li><a href="#"><span className="icon-twitter"></span></a></li>
                          <li><a href="#"><span className="icon-instagram"></span></a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="team-two__single-content">
                      <h2><a href="#">Delon Singh</a></h2>
                      <p>founder</p>
                    </div>
                  </div>
                </div>

                {/* Team Two Single */}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                  <div className="team-two__single">
                    <div className="team-two__single-img">
                      <div className="inner">
                        <img src="/assets/images/team/team-v2-img3.jpg" alt="#" />
                        <ul className="social-links">
                          <li><a href="#"><span className="icon-facebook"></span></a></li>
                          <li><a href="#"><span className="icon-twitter"></span></a></li>
                          <li><a href="#"><span className="icon-instagram"></span></a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="team-two__single-content">
                      <h2><a href="#">Manira Roy</a></h2>
                      <p>Manager</p>
                    </div>
                  </div>
                </div>

                {/* Team Two Single */}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-delay=".3s">
                  <div className="team-two__single">
                    <div className="team-two__single-img">
                      <div className="inner">
                        <img src="/assets/images/team/team-v2-img4.jpg" alt="#" />
                        <ul className="social-links">
                          <li><a href="#"><span className="icon-facebook"></span></a></li>
                          <li><a href="#"><span className="icon-twitter"></span></a></li>
                          <li><a href="#"><span className="icon-instagram"></span></a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="team-two__single-content">
                      <h2><a href="#">Ravico Lacok</a></h2>
                      <p>Co-founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing One */}
      <section className="pricing-one">
        <div className="container">
          <div className="pricing-one__top">
            <div className="sec-title tg-heading-subheading animation-style2">
              <div className="sec-title__tagline">
                <p className="tg-element-title">pricing plan</p>
                <div className="border-box"></div>
              </div>
              <h2 className="sec-title__title tg-element-title">Explore Our Digital <br />
                Pricing
              </h2>
            </div>

            <div className="text-box">
              <p>Mestib removes the completed market reserches our
                abusiness high consultations we are prouds of the
                work hards for business..</p>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="pricing-one__bottom">
                <ul className="pricing-one__box">
                  <li className="pricing-one__single wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1000ms">
                    <div className="big-title">
                      Pricing plan
                    </div>
                    <div className="pricing-one__single-left">
                      <div className="pricing-box">
                        <h2>$150 <span>/ monthly</span></h2>
                        <h3>Standard</h3>
                      </div>

                      <div className="content-box">
                        <h4>Up to 100 keyphrases optimized</h4>
                        <p>Mestib removes the completed markete reserches our
                          work hards for business.. </p>
                      </div>
                    </div>

                    <div className="pricing-one__single-right">
                      <div className="btn-box">
                        <a className="thm-btn" href="/contact">
                          <span className="txt">Choose Your Plan</span>
                          <span className="bdrl"></span>
                          <span className="bdrr"></span>
                        </a>
                      </div>
                    </div>
                  </li>

                  <li className="pricing-one__single wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1000ms">
                    <div className="big-title">
                      Pricing plan
                    </div>
                    <div className="pricing-one__single-left">
                      <div className="pricing-box">
                        <h2>$170 <span>/ monthly</span></h2>
                        <h3>Premium</h3>
                      </div>

                      <div className="content-box">
                        <h4>Content marketing assets:4</h4>
                        <p>Mestib removes the completed markete reserches our
                          work hards for business.. </p>
                      </div>
                    </div>

                    <div className="pricing-one__single-right">
                      <div className="btn-box">
                        <a className="thm-btn" href="/contact">
                          <span className="txt">Choose Your Plan</span>
                          <span className="bdrl"></span>
                          <span className="bdrr"></span>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}