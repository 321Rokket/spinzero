export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg" style={{backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)'}}>
        </div>
        <div className="container">
          <div className="page-header__inner">
            <h2 className="wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">About us</h2>
            <ul className="thm-breadcrumb wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
              <li><a href="/">Home</a></li>
              <li><span>-</span></li>
              <li>About us</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Brand One */}
      <section className="brand-one brand-one--two about">
        <div className="auto-container">
          <div className="brand-one__inner">
            <ul>
              <li><a href="#"><img src="/assets/images/brand/brand-1-1.png" alt="#" /></a></li>
              <li><a href="#"><img src="/assets/images/brand/brand-1-2.png" alt="#" /></a></li>
              <li><a href="#"><img src="/assets/images/brand/brand-1-3.png" alt="#" /></a></li>
              <li><a href="#"><img src="/assets/images/brand/brand-1-4.png" alt="#" /></a></li>
              <li><a href="#"><img src="/assets/images/brand/brand-1-5.png" alt="#" /></a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Advantages One */}
      <section className="advantages-one">
        <div className="container">
          <div className="advantages-one__inner">
            <ul className="row">
              <li className="col-xl-4">
                <div className="advantages-one__single">
                  <div className="advantages-one__single-img">
                    <div className="btn-box">
                      <a href="#">Show all More</a>
                      <div className="border-box"></div>
                    </div>
                    <div className="inner">
                      <img src="/assets/images/resources/advantages-v1-img3.jpg" alt="#" />
                    </div>
                  </div>
                </div>
              </li>

              <li className="col-xl-4">
                <div className="advantages-one__single">
                  <div className="advantages-one__single-content">
                    <div className="tagline">
                      <a href="#">advantages</a>
                      <div className="border-box"></div>
                    </div>

                    <div className="title-box">
                      <h2>Design <br />
                        <span>Creatively</span> <br />
                        Beauty</h2>
                    </div>

                    <p>Mestib ulligula. remove the politices for this projects
                      marketing reserch abusiness high levels process
                      we try to best consultations</p>

                    <div className="btn-box">
                      <a className="thm-btn" href="/contact">
                        <span className="txt">View More</span>
                        <span className="bdrl"></span>
                        <span className="bdrr"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              <li className="col-xl-4">
                <div className="advantages-one__single">
                  <div className="advantages-one__single-img">
                    <div className="btn-box">
                      <a href="#">Show all More</a>
                      <div className="border-box"></div>
                    </div>
                    <div className="inner">
                      <img src="/assets/images/resources/advantages-v1-img4.jpg" alt="#" />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Awards One */}
      <section className="awards-one">
        <div className="container">
          <div className="awards-one__box">
            <div className="border-box2"></div>

            <div className="sec-title tg-heading-subheading animation-style2">
              <div className="sec-title__tagline">
                <p className="tg-element-title">we proud that</p>
                <div className="border-box"></div>
              </div>
              <h2 className="sec-title__title tg-element-title">Discover Our Awards</h2>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="awards-one__inner">
                  <div className="owl-carousel owl-theme thm-owl__carousel awards-one__carousel"
                    data-owl-options='{
                      "loop": true,
                      "autoplay": true,
                      "margin": 30,
                      "nav": true,
                      "dots": false,
                      "smartSpeed": 500,
                      "autoplayTimeout": 10000,
                      "navText": ["<span className=\"icon-right-arrow-1\"></span>","<span className=\"icon-right-arrow-1\"></span>"],
                      "responsive": {
                        "0": {
                          "items": 1
                        },
                        "768": {
                          "items": 2
                        },
                        "992": {
                          "items": 2
                        },
                        "1200": {
                          "items": 3
                        }
                      }
                    }'>
                    
                    {/* Awards One Single */}
                    <div className="awards-one__single text-center">
                      <div className="awards-one__single-top">
                        <div className="awards-one__single-icon">
                          <span className="icon-dribbble-1"></span>
                        </div>
                        <div className="awards-one__single-content">
                          <span>2012-2023</span>
                          <h2>Best Development Awards 2022</h2>
                          <p>Dribble Awards-</p>
                        </div>
                      </div>

                      <div className="awards-one__single-counter">
                        <h3>01</h3>
                      </div>

                      <div className="awards-one__single-bottom">
                        <div className="awards-one__single-content">
                          <span>2012-2023</span>
                          <h2>Best Development Awards 2022</h2>
                          <p>Dribble Awards-</p>
                        </div>
                        <div className="overlay-icon">
                          <span className="icon-dribbble-1"></span>
                        </div>
                      </div>
                    </div>

                    {/* Awards One Single */}
                    <div className="awards-one__single text-center">
                      <div className="awards-one__single-top">
                        <div className="awards-one__single-icon">
                          <span className="icon-medal"></span>
                        </div>
                        <div className="awards-one__single-content">
                          <span>2015-2018</span>
                          <h2>Mobile of the Month, July 2014</h2>
                          <p>Awards Inc-</p>
                        </div>
                      </div>

                      <div className="awards-one__single-counter">
                        <h3>02</h3>
                      </div>

                      <div className="awards-one__single-bottom">
                        <div className="awards-one__single-content">
                          <span>2015-2018</span>
                          <h2>Mobile of the Month, July 2014</h2>
                          <p>Awards Inc-</p>
                        </div>
                        <div className="overlay-icon">
                          <span className="icon-medal"></span>
                        </div>
                      </div>
                    </div>

                    {/* Awards One Single */}
                    <div className="awards-one__single text-center">
                      <div className="awards-one__single-top">
                        <div className="awards-one__single-icon">
                          <span className="icon-social"></span>
                        </div>
                        <div className="awards-one__single-content">
                          <span>2012-2013</span>
                          <h2>Year Best Interective Awards</h2>
                          <p>Behance Award-</p>
                        </div>
                      </div>

                      <div className="awards-one__single-counter">
                        <h3>03</h3>
                      </div>
                      <div className="awards-one__single-bottom">
                        <div className="awards-one__single-content">
                          <span>2012-2013</span>
                          <h2>Year Best Interective Awards</h2>
                          <p>Behance Award-</p>
                        </div>
                        <div className="overlay-icon">
                          <span className="icon-social"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team One */}
      <section className="team-one team-one--about">
        <div className="container">
          {/* Team One Top */}
          <div className="team-one__top">
            <div className="container">
              <div className="team-one__top-inner">
                <div className="sec-title tg-heading-subheading animation-style2">
                  <div className="sec-title__tagline">
                    <p className="tg-element-title">our professionals</p>
                    <div className="border-box"></div>
                  </div>
                  <h2 className="sec-title__title tg-element-title">Dedicated Our Team</h2>
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

          <div className="team-one__bottom">
            <div className="container filter-layout masonary-layout">
              <div className="row">
                {/* Team One Single */}
                <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
                  <div className="team-one__single">
                    <div className="team-one__single-img">
                      <div className="inner">
                        <img src="/assets/images/team/team-v1-img1.jpg" alt="#" />
                        <div className="overlay-content">
                          <h2><a href="#">Tomas Whites</a></h2>
                          <p>Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team One Single */}
                <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.3s">
                  <div className="team-one__single mt40">
                    <div className="team-one__single-img">
                      <div className="inner">
                        <img src="/assets/images/team/team-v1-img2.jpg" alt="#" />
                        <div className="overlay-content">
                          <h2><a href="#">Tomas Whites</a></h2>
                          <p>Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team One Single */}
                <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.5s">
                  <div className="team-one__single mt80">
                    <div className="team-one__single-img">
                      <div className="inner">
                        <img src="/assets/images/team/team-v1-img3.jpg" alt="#" />
                        <div className="overlay-content">
                          <h2><a href="#">Tomas Whites</a></h2>
                          <p>Designer</p>
                        </div>
                      </div>
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