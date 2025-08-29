export default function PortfolioPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg" style={{backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)'}}>
        </div>
        <div className="container">
          <div className="page-header__inner">
            <h2 className="wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">Our Portfolio</h2>
            <ul className="thm-breadcrumb wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
              <li><a href="/">Home</a></li>
              <li><span>-</span></li>
              <li>Our Portfolio</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Two */}
      <section className="gallery-two gallery-two--portfolio">
        <div className="container">
          <div className="sec-title text-center tg-heading-subheading animation-style2">
            <div className="sec-title__tagline">
              <p className="tg-element-title">latest projects</p>
              <div className="border-box"></div>
            </div>
            <h2 className="sec-title__title tg-element-title">Our Working Gallery</h2>
          </div>

          <div className="row">
            {/* Gallery Two Single */}
            <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
              <div className="gallery-two__single">
                <div className="gallery-two__single-img">
                  <div className="inner">
                    <img src="/assets/images/gallery/gallery-v2-img5.jpg" alt="#" />
                    <div className="overlay-content">
                      <p>Business Idea</p>
                      <h2><a href="#">Super Experince</a></h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Two Single */}
            <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.2s">
              <div className="gallery-two__single">
                <div className="gallery-two__single-img">
                  <div className="inner">
                    <img src="/assets/images/gallery/gallery-v2-img6.jpg" alt="#" />
                    <div className="overlay-content">
                      <p>Business Idea</p>
                      <h2><a href="#">Super Experince</a></h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Two Single */}
            <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
              <div className="gallery-two__single">
                <div className="gallery-two__single-img">
                  <div className="inner">
                    <img src="/assets/images/gallery/gallery-v2-img7.jpg" alt="#" />
                    <div className="overlay-content">
                      <p>Business Idea</p>
                      <h2><a href="#">Super Experince</a></h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Two Single */}
            <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
              <div className="gallery-two__single">
                <div className="gallery-two__single-img">
                  <div className="inner">
                    <img src="/assets/images/gallery/gallery-v2-img8.jpg" alt="#" />
                    <div className="overlay-content">
                      <p>Business Idea</p>
                      <h2><a href="#">Super Experince</a></h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Two Single */}
            <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.2s">
              <div className="gallery-two__single">
                <div className="gallery-two__single-img">
                  <div className="inner">
                    <img src="/assets/images/gallery/gallery-v2-img9.jpg" alt="#" />
                    <div className="overlay-content">
                      <p>Business Idea</p>
                      <h2><a href="#">Super Experince</a></h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Two Single */}
            <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
              <div className="gallery-two__single">
                <div className="gallery-two__single-img">
                  <div className="inner">
                    <img src="/assets/images/gallery/gallery-v2-img10.jpg" alt="#" />
                    <div className="overlay-content">
                      <p>Business Idea</p>
                      <h2><a href="#">Super Experince</a></h2>
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