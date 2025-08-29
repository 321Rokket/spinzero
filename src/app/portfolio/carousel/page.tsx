export default function PortfolioCarouselPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg" style={{backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)'}}>
        </div>
        <div className="container">
          <div className="page-header__inner">
            <h2 className="wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">Portfolio Carousel</h2>
            <ul className="thm-breadcrumb wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
              <li><a href="/">Home</a></li>
              <li><span>-</span></li>
              <li>Portfolio Carousel</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Portfolio Carousel Page */}
      <section className="portfolio-carousel-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="portfolio-carousel-page__inner">
                <div className="owl-carousel owl-theme thm-owl__carousel portfolio-carousel-page__carousel"
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
                        "items": 2
                      },
                      "1200": {
                        "items": 3
                      }
                    }
                  }'>

                  {/* Gallery Item 1 */}
                  <div className="gallery-two__single">
                    <div className="gallery-two__single-img">
                      <div className="inner">
                        <img src="/assets/images/gallery/gallery-v2-img5.jpg" alt="Creative Design Project" />
                        <div className="overlay-content">
                          <p>Creative Design</p>
                          <h2><a href="/portfolio/details">Modern Website Design</a></h2>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gallery Item 2 */}
                  <div className="gallery-two__single">
                    <div className="gallery-two__single-img">
                      <div className="inner">
                        <img src="/assets/images/gallery/gallery-v2-img8.jpg" alt="Brand Identity Project" />
                        <div className="overlay-content">
                          <p>Brand Identity</p>
                          <h2><a href="/portfolio/details">Corporate Branding</a></h2>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gallery Item 3 */}
                  <div className="gallery-two__single">
                    <div className="gallery-two__single-img">
                      <div className="inner">
                        <img src="/assets/images/gallery/gallery-v2-img7.jpg" alt="Digital Marketing Project" />
                        <div className="overlay-content">
                          <p>Digital Marketing</p>
                          <h2><a href="/portfolio/details">Social Media Campaign</a></h2>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gallery Item 4 */}
                  <div className="gallery-two__single">
                    <div className="gallery-two__single-img">
                      <div className="inner">
                        <img src="/assets/images/gallery/gallery-v2-img6.jpg" alt="E-commerce Project" />
                        <div className="overlay-content">
                          <p>E-commerce</p>
                          <h2><a href="/portfolio/details">Online Store Development</a></h2>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gallery Item 5 */}
                  <div className="gallery-two__single">
                    <div className="gallery-two__single-img">
                      <div className="inner">
                        <img src="/assets/images/gallery/gallery-v2-img9.jpg" alt="Mobile App Project" />
                        <div className="overlay-content">
                          <p>Mobile App</p>
                          <h2><a href="/portfolio/details">iOS & Android App</a></h2>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gallery Item 6 */}
                  <div className="gallery-two__single">
                    <div className="gallery-two__single-img">
                      <div className="inner">
                        <img src="/assets/images/gallery/gallery-v2-img10.jpg" alt="Print Design Project" />
                        <div className="overlay-content">
                          <p>Print Design</p>
                          <h2><a href="/portfolio/details">Marketing Materials</a></h2>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gallery Item 7 */}
                  <div className="gallery-two__single">
                    <div className="gallery-two__single-img">
                      <div className="inner">
                        <img src="/assets/images/gallery/gallery-v2-img1.jpg" alt="Photography Project" />
                        <div className="overlay-content">
                          <p>Photography</p>
                          <h2><a href="/portfolio/details">Product Photography</a></h2>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gallery Item 8 */}
                  <div className="gallery-two__single">
                    <div className="gallery-two__single-img">
                      <div className="inner">
                        <img src="/assets/images/gallery/gallery-v2-img2.jpg" alt="Video Production Project" />
                        <div className="overlay-content">
                          <p>Video Production</p>
                          <h2><a href="/portfolio/details">Corporate Video</a></h2>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gallery Item 9 */}
                  <div className="gallery-two__single">
                    <div className="gallery-two__single-img">
                      <div className="inner">
                        <img src="/assets/images/gallery/gallery-v2-img3.jpg" alt="Packaging Design Project" />
                        <div className="overlay-content">
                          <p>Packaging Design</p>
                          <h2><a href="/portfolio/details">Product Packaging</a></h2>
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