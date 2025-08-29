import Scripts from '@/components/Scripts'

export default function Home() {
  return (
    <>
      {/* Start Preloader */}
      <div className="loader-wrap">
        <div className="preloader">
          <div className="preloader-close">x</div>
          <div id="handle-preloader" className="handle-preloader">
            <div className="animation-preloader">
              <div className="spinner"></div>
              <div className="txt-loading">
                <span data-text-preloader="b" className="letters-loading"> b </span>
                <span data-text-preloader="a" className="letters-loading"> a </span>
                <span data-text-preloader="o" className="letters-loading"> o </span>
                <span data-text-preloader="s" className="letters-loading"> s </span>
                <span data-text-preloader="h" className="letters-loading"> h </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Preloader */}

      <div className="page-wrapper">
        {/* Start sidebar widget content */}
        <div className="xs-sidebar-group info-group info-sidebar">
          <div className="xs-overlay xs-bg-black"></div>
          <div className="xs-sidebar-widget">
            <div className="sidebar-widget-container">
              <div className="widget-heading">
                <a href="#" className="close-side-widget">X</a>
              </div>
              <div className="sidebar-textwidget">
                <div className="sidebar-info-contents">
                  <div className="content-inner">
                    <div className="logo">
                      <a href="index.html"><img src="/assets/images/resources/logo-1.png" alt="" /></a>
                    </div>
                    <div className="content-box">
                      <h4>About Us</h4>
                      <div className="inner-text">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                          roots in a piece of classical Latin literature from 45 BC, making it over
                          2000 years old.
                        </p>
                      </div>
                    </div>

                    <div className="form-inner">
                      <h4>Get a free quote</h4>
                      <form action="index.html" method="post">
                        <div className="form-group">
                          <input type="text" name="name" placeholder="Name" required />
                        </div>
                        <div className="form-group">
                          <input type="email" name="email" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                          <textarea name="message" placeholder="Message..."></textarea>
                        </div>
                        <div className="form-group message-btn">
                          <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                            <span className="txt">Submit Now</span>
                            <span className="bdrl"></span>
                            <span className="bdrr"></span>
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="sidebar-contact-info">
                      <h4>Contact Info</h4>
                      <ul>
                        <li>
                          <span className="icon-placeholder-1"></span> 88 broklyn street, New York
                        </li>
                        <li>
                          <span className="icon-phone-ringing"></span>
                          <a href="tel:123456789">+1 555-9990-153</a>
                        </li>
                        <li>
                          <span className="fa fa-envelope"></span>
                          <a href="mailto:info@example.com">info@example.com</a>
                        </li>
                      </ul>
                    </div>
                    <div className="thm-social-link1">
                      <ul className="social-box">
                        <li className="facebook">
                          <a href="#"><i className="icon-facebook" aria-hidden="true"></i></a>
                        </li>
                        <li className="twitter">
                          <a href="#"><i className="icon-twitter" aria-hidden="true"></i></a>
                        </li>
                        <li className="linkedin">
                          <a href="#"><i className="icon-instagram" aria-hidden="true"></i></a>
                        </li>
                        <li className="gplus">
                          <a href="#"><i className="icon-pinterest" aria-hidden="true"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End sidebar widget content */}

        {/*Start Main Header One*/}
        <header className="main-header main-header-one">
          <div className="main-header-one__inner">
            <nav className="main-menu main-menu-one">
              <div className="main-menu__wrapper clearfix">
                <div className="auto-container">
                  <div className="main-menu__wrapper-inner">
                    <div className="main-menu-box">
                      <a href="#" className="mobile-nav__toggler">
                        <i className="fa fa-bars"></i>
                      </a>

                      <ul className="main-menu__list">
                        <li className="dropdown current">
                          <a href="index.html">Home</a>
                          <ul>
                            <li>
                              <a href="index.html">Home One</a>
                            </li>
                            <li><a href="index-2.html">Home Two</a></li>
                            <li className="dropdown">
                              <a href="#">One Pages</a>
                              <ul>
                                <li><a href="index-one-page.html">One Page Style1</a></li>
                                <li>
                                  <a href="index2-one-page.html">One Page Style2</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a href="about.html">About</a>
                        </li>

                        <li className="dropdown">
                          <a href="#">Services</a>
                          <ul>
                            <li><a href="services.html">Services</a></li>
                            <li>
                              <a href="agriculture-services.html">Agriculture Services</a>
                            </li>
                            <li>
                              <a href="graphic-design.html">Graphic Design</a>
                            </li>
                            <li>
                              <a href="delivery-services.html">Delivery Services</a>
                            </li>
                            <li>
                              <a href="farming-products.html">Farming Products</a>
                            </li>
                          </ul>
                        </li>

                        <li className="dropdown">
                          <a href="#">Pages</a>
                          <ul>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="portfolio-carousel.html">Portfolio Carousel</a></li>
                            <li>
                              <a href="portfolio-details.html">Portfolio Details</a>
                            </li>
                            <li><a href="team.html">Team</a></li>
                            <li><a href="team-carousel.html">Team Carousel</a></li>
                            <li><a href="team-details.html">Team Details</a></li>
                            <li><a href="testimonial.html">Testimonial</a></li>
                            <li><a href="pricing.html">Pricing</a></li>
                            <li><a href="faq.html">Faq</a></li>
                            <li><a href="404.html">404 Error</a></li>
                            <li><a href="coming-soon.html">Coming Soon Page</a></li>
                          </ul>
                        </li>

                        <li className="dropdown">
                          <a href="#">Blog</a>
                          <ul>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="blog-carousel.html">Blog Carousel</a></li>
                            <li><a href="blog-list.html">Blog List</a></li>
                            <li><a href="blog-details.html">Blog Details</a></li>
                          </ul>
                        </li>

                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </div>

                    <div className="main-header-one__middle">
                      <div className="logo-box-one">
                        <a href="index.html">
                          <img src="/assets/images/resources/logo-1.png" alt="Awesome Logo" title="" />
                        </a>
                      </div>
                    </div>

                    <div className="main-header-one__right">
                      <ul className="Reg-login-box">
                        <li>
                          <a href="#">Register</a>
                        </li>
                        <li>
                          <a href="#">Login</a>
                        </li>
                      </ul>

                      <div className="header-search-box">
                        <a href="#"
                          className="main-menu__search search-toggler icon-search-interface-symbol">
                        </a>
                      </div>

                      <div className="header-cart-box">
                        <a href="#">
                          <i className="icon-bag"></i>
                          <span className="count">3</span>
                        </a>
                      </div>

                      <div className="side-content-button-box">
                        <div className="side-content-button">
                          <a className="navSidebar-button" href="#">
                            <span className="icon-menu"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        {/*End Main Header One*/}

        <div className="stricky-header stricky-header--one stricked-menu main-menu">
          <div className="sticky-header__content"></div>
        </div>

        {/*Start Main Slider */}
        <section className="main-slider main-slider-one">
          <div className="swiper-container main-slider-one__carousel">
            <div className="swiper-wrapper">
              {/*Start Main Slider One*/}
              <div className="swiper-slide">
                <div className="image-layer" style={{backgroundImage: 'url(/assets/images/slides/slider-v1-bg.jpg)'}}>
                </div>
                <div className="auto-container">
                  <div className="main-slider-one__single">
                    <div className="main-slider-one__img">
                      <img src="/assets/images/slides/slider-v1-img1.jpg" alt="#" />
                    </div>
                    <div className="main-slider-one__content">
                      <ul className="social-links">
                        <li><a href="#">Fb.</a></li>
                        <li><a href="#">Tw.</a></li>
                        <li><a href="#">In.</a></li>
                        <li><a href="#">Be.</a></li>
                      </ul>

                      <div className="title">
                        <h2>
                          Things <br />
                          <span className="icon-right-arrow-1"></span> creative <br />
                          everyday
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Main Slider One*/}
            </div>
            <div className="project-one__control-wrap">
              <div className="swiper-counter">
                <div id="current2">01</div>
                <div id="total2"></div>
              </div>
            </div>

            <div className="scroll-pagination">
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>
        {/*End Main Slider*/}

        {/*Start Brand One */}
        <section className="brand-one">
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
        {/*End Brand One */}

        {/*Start About One */}
        <section className="about-one">
          <div className="big-title1 wow slideInLeft" data-wow-delay="500ms" data-wow-duration="2500ms">
            <h2>About</h2>
          </div>
          <div className="big-title2 wow slideInRight" data-wow-delay="500ms" data-wow-duration="2500ms">
            <h2>Creative</h2>
          </div>
          <div className="container">
            <div className="about-one__inner">
              <div className="sec-title text-center tg-heading-subheading animation-style2">
                <div className="sec-title__tagline">
                  <p className="tg-element-title">about us</p>
                  <div className="border-box"></div>
                </div>
                <h2 className="sec-title__title tg-element-title">We creative best high services <br />
                  & bold solutions for your <br /> business <span>growth</span></h2>
              </div>
              <div className="btn-box">
                <a className="thm-btn" href="contact.html">
                  <span className="txt">Explore More</span>
                  <span className="bdrl"></span>
                  <span className="bdrr"></span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*End About One */}

        {/* Mobile Navigation */}
        <div className="mobile-nav__wrapper">
          <div className="mobile-nav__overlay mobile-nav__toggler"></div>
          <div className="mobile-nav__content">
            <span className="mobile-nav__close mobile-nav__toggler">
              <i className="icon-plus"></i>
            </span>
            <div className="logo-box">
              <a href="index.html" aria-label="logo image">
                <img src="/assets/images/resources/logo-1.png" alt="" />
              </a>
            </div>
            <div className="mobile-nav__container"></div>
            <ul className="mobile-nav__contact list-unstyled">
              <li>
                <i className="fa fa-envelope"></i>
                <a href="mailto:info@example.com">info@example.com</a>
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                <a href="tel:123456789">444 000 777 66</a>
              </li>
            </ul>
            <div className="mobile-nav__social">
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-facebook-square"></a>
              <a href="#" className="fab fa-pinterest-p"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
          </div>
        </div>

        {/* Search Popup */}
        <div className="search-popup">
          <div className="search-popup__overlay search-toggler"></div>
          <div className="search-popup__content">
            <form action="#">
              <label htmlFor="search" className="sr-only">search here</label>
              <input type="text" id="search" placeholder="Search Here..." />
              <button type="submit" aria-label="search submit" className="thm-btn">
                <i className="icon-search-interface-symbol"></i>
              </button>
            </form>
          </div>
        </div>

        {/*Start Footer One */}
        <footer className="footer-one">
          <div className="footer">
            <div className="container">
              <div className="footer-one__inner">
                <div className="logo-box text-center">
                  <a href="index.html"><img src="/assets/images/resources/logo-1.png" alt="#" /></a>
                </div>

                <div className="footer-one__contact">
                  <div className="footer-one__contact-bdr"
                    style={{backgroundImage: 'url(/assets/images/footer/footer-v1-img1.png)'}}></div>
                  <ul>
                    <li>
                      <div className="icon-box">
                        <span className="icon-ringing"></span>
                      </div>

                      <div className="text-box">
                        <p>Call anytime</p>
                        <h3><a href="tel:98210009630">+ 9821 (000) - 9630</a></h3>
                      </div>
                    </li>

                    <li>
                      <div className="icon-box">
                        <span className="icon-message"></span>
                      </div>

                      <div className="text-box">
                        <p>Send email</p>
                        <h3><a href="mailto:yourmail@email.com">baosh@company.com</a></h3>
                      </div>
                    </li>

                    <li>
                      <div className="icon-box">
                        <span className="icon-placeholder"></span>
                      </div>

                      <div className="text-box">
                        <p>Visit Office</p>
                        <h3>27 Division St, New York</h3>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="footer-one__menu">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Home</a></li>
                  </ul>
                </div>

                <div className="footer-one__social-links">
                  <ul>
                    <li><a href="#"><span className="icon-twitter"></span></a></li>
                    <li><a href="#"><span className="icon-facebook"></span></a></li>
                    <li><a href="#"><span className="icon-google-plus-logo"></span></a></li>
                    <li><a href="#"><span className="icon-pinterest"></span></a></li>
                    <li><a href="#"><span className="icon-wifi"></span></a></li>
                  </ul>
                  <div className="border-box"></div>
                </div>

                <div className="footer-one__copyright">
                  <p>Copyright © 2023 all rights reserved.</p>
                </div>

                <div className="scroll-to-top-box">
                  <a href="#" data-target="html" className="scroll-to-target scroll-to-top">Back to Top</a>
                  <div className="border-box"></div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*End Footer One*/}
      </div>
      <Scripts />
    </>
  );
}