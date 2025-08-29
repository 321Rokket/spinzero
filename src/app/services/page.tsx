export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg" style={{backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)'}}>
        </div>
        <div className="container">
          <div className="page-header__inner">
            <h2 className="wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">Our Services</h2>
            <ul className="thm-breadcrumb wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
              <li><a href="/">Home</a></li>
              <li><span>-</span></li>
              <li>Our Services</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Two */}
      <section className="services-two">
        <div className="container">
          <div className="sec-title tg-heading-subheading animation-style2">
            <div className="sec-title__tagline">
              <p className="tg-element-title">our services</p>
              <div className="border-box"></div>
            </div>
            <h2 className="sec-title__title tg-element-title">What We Offer</h2>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="services-two__inner">
                <div className="services-two__middle-content">
                  <div className="img-box float-bob-y">
                    <img src="/assets/images/resources/services-v2-img2.jpg" alt="" />
                  </div>

                  <div className="services-two__video">
                    <div className="video-box">
                      <a className="video-popup" title="Video Gallery"
                        href="https://www.youtube.com/watch?v=p25gICT63ek"
                        style={{visibility: 'visible'}}>
                        <i className="icon-play-button-1" aria-hidden="true"></i>
                        <span className="ripple"></span>
                      </a>
                    </div>

                    <div className="title-box">
                      <h3>Watch Video</h3>
                    </div>
                  </div>
                </div>

                <ul className="services-two__list">
                  <li className="services-two__list-item wow fadeInLeft" data-wow-delay="100ms"
                    data-wow-duration="1000ms">
                    <div className="icon-box">
                      <span className="icon-project-management"></span>
                    </div>

                    <div className="content-box">
                      <h2><a href="#">Develope</a></h2>
                      <p>Mestib removes the completed
                        marketing reserch abusiness high
                        consultations..</p>
                    </div>
                  </li>

                  <li className="services-two__list-item style2 wow fadeInRight" data-wow-delay="0ms"
                    data-wow-duration="1000ms">
                    <div className="icon-box">
                      <span className="icon-creative-idea"></span>
                    </div>

                    <div className="content-box">
                      <h2><a href="#">Creative</a></h2>
                      <p>Mestib removes the completed
                        marketing reserch abusiness high
                        consultations..</p>
                    </div>
                  </li>
                </ul>

                <ul className="services-two__list style2">
                  <li className="services-two__list-item wow fadeInLeft" data-wow-delay="100ms"
                    data-wow-duration="1000ms">
                    <div className="icon-box">
                      <span className="icon-promotion"></span>
                    </div>

                    <div className="content-box">
                      <h2><a href="#">Marketing</a></h2>
                      <p>Mestib removes the completed
                        marketing reserch abusiness high
                        consultations..</p>
                    </div>
                  </li>

                  <li className="services-two__list-item style2 wow fadeInRight" data-wow-delay="0ms"
                    data-wow-duration="1000ms">
                    <div className="icon-box">
                      <span className="icon-interior-design"></span>
                    </div>

                    <div className="content-box">
                      <h2><a href="#">Designing</a></h2>
                      <p>Mestib removes the completed
                        marketing reserch abusiness high
                        consultations..</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand One */}
      <section className="brand-one brand-one--two">
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

      {/* Services One */}
      <section className="services-one services-one--about">
        <div className="container">
          <div className="row">
            {/* Services One Left Content */}
            <div className="col-xl-5">
              <div className="services-one__left-content">
                <div className="sec-title tg-heading-subheading animation-style2">
                  <div className="sec-title__tagline">
                    <p className="tg-element-title">what we do</p>
                    <div className="border-box"></div>
                  </div>
                  <h2 className="sec-title__title tg-element-title">Agency Services <br />
                    We Provide
                  </h2>
                </div>

                <div className="services-one__left-content-text">
                  <p>Mestib ulligula remove the politices project completed
                    marketing reserch abusiness high level process
                    consultation for business.</p>
                </div>
              </div>
            </div>

            {/* Services One Right Content */}
            <div className="col-xl-7">
              <div className="services-one__right-content">
                <ul>
                  <li className="wow animated fadeInRight" data-wow-delay="0.1s">
                    <div className="outer-box">
                      <div className="inner">
                        <div className="left-content">
                          <div className="icon-box">
                            <span className="icon-writing"></span>
                          </div>
                          <div className="title-box">
                            <h2>Content Writings <br />
                              & Marketing</h2>
                          </div>
                        </div>

                        <div className="right-content">
                          <p>Mestib ulligula remov project complete <br />
                            marketing reserch to abusiness high process </p>
                        </div>
                      </div>

                      <div className="overlay-content">
                        <div className="left-content">
                          <div className="number-box">
                            01
                          </div>

                          <div className="title-box2">
                            <h2>Content Writings <br />
                              & Marketing</h2>
                          </div>
                        </div>

                        <div className="right-content">
                          <div className="btn-box">
                            <a href="#">View Details <span className="icon-chevron"></span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="wow animated fadeInRight" data-wow-delay="0.3s">
                    <div className="outer-box">
                      <div className="inner">
                        <div className="left-content">
                          <div className="icon-box">
                            <span className="icon-web-design"></span>
                          </div>
                          <div className="title-box">
                            <h2>Graphic & Sketches <br />
                              Designing</h2>
                          </div>
                        </div>

                        <div className="right-content">
                          <p>Mestib ulligula remov project complete <br />
                            marketing reserch to abusiness high process </p>
                        </div>
                      </div>

                      <div className="overlay-content">
                        <div className="left-content">
                          <div className="number-box">
                            02
                          </div>

                          <div className="title-box2">
                            <h2>Graphic & Sketches <br />
                              Designing</h2>
                          </div>
                        </div>

                        <div className="right-content">
                          <div className="btn-box">
                            <a href="#">View Details <span className="icon-chevron"></span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="wow animated fadeInRight" data-wow-delay="0.5s">
                    <div className="outer-box">
                      <div className="inner">
                        <div className="left-content">
                          <div className="icon-box">
                            <span className="icon-development"></span>
                          </div>
                          <div className="title-box">
                            <h2>Website Design And <br />
                              Development</h2>
                          </div>
                        </div>

                        <div className="right-content">
                          <p>Mestib ulligula remov project complete <br />
                            marketing reserch to abusiness high process </p>
                        </div>
                      </div>

                      <div className="overlay-content">
                        <div className="left-content">
                          <div className="number-box">
                            03
                          </div>

                          <div className="title-box2">
                            <h2>Website Design And <br />
                              Development</h2>
                          </div>
                        </div>

                        <div className="right-content">
                          <div className="btn-box">
                            <a href="#">View Details <span className="icon-chevron"></span></a>
                          </div>
                        </div>
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