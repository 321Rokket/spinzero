export default function BlogPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg" style={{backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)'}}>
        </div>
        <div className="container">
          <div className="page-header__inner">
            <h2 className="wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">Blog</h2>
            <ul className="thm-breadcrumb wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
              <li><a href="/">Home</a></li>
              <li><span>-</span></li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Blog One */}
      <section className="blog-one blog-one--blog">
        <div className="container">
          <div className="row">
            {/* Blog One Content Left */}
            <div className="col-xl-4">
              <div className="blog-one__content-left">
                <div className="sec-title tg-heading-subheading animation-style2">
                  <div className="sec-title__tagline">
                    <p className="tg-element-title">our insights</p>
                    <div className="border-box"></div>
                  </div>
                  <h2 className="sec-title__title tg-element-title">Our Latest <br />
                    Article & New <br />
                    Updates
                  </h2>
                </div>
                <div className="blog-one__content-text">
                  <p>Mestib ulligulia remove projects completed
                    the marketing reserch to abusiness high process
                    our work in high level. </p>
                </div>
              </div>
            </div>

            {/* Blog One Content Right */}
            <div className="col-xl-8">
              <div className="blog-one__content-right">
                <ul className="blog-one__content-right-list">
                  <li className="wow animated fadeInRight" data-wow-delay="0.1s">
                    <div className="left-content">
                      <div className="date-box">
                        <p>Oct 2023</p>
                      </div>
                      <div className="text-box">
                        <h2><a href="#">Worldwides annual spends on <br />
                          digital advertising</a></h2>
                        <h3>Digital Agency <span>By Rason Toy</span></h3>
                      </div>
                    </div>
                    <div className="icon-box">
                      <a href="#"><span className="icon-right-arrow-1"></span></a>
                    </div>
                  </li>

                  <li className="wow animated fadeInRight" data-wow-delay="0.3s">
                    <div className="left-content">
                      <div className="date-box">
                        <p>Nov 2023</p>
                      </div>
                      <div className="text-box">
                        <h2><a href="#">The secret of change is to focus <br />
                          all your energy</a></h2>
                        <h3>Agency/business <span>By Rason Toy</span></h3>
                      </div>
                    </div>
                    <div className="icon-box">
                      <a href="#"><span className="icon-right-arrow-1"></span></a>
                    </div>
                  </li>

                  <li className="wow animated fadeInRight" data-wow-delay="0.5s">
                    <div className="left-content">
                      <div className="date-box">
                        <p>Sep 2023</p>
                      </div>
                      <div className="text-box">
                        <h2><a href="#">A Simple Social Media Marketing <br />
                          Checklist</a></h2>
                        <h3>Digital Agency <span>By Rason Toy</span></h3>
                      </div>
                    </div>
                    <div className="icon-box">
                      <a href="#"><span className="icon-right-arrow-1"></span></a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Two */}
      <section className="blog-two blog-two--blog">
        <div className="container">
          <div className="blog-two__bottom">
            <div className="row">
              {/* Blog Two Single */}
              <div className="col-xl-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="blog-two__single">
                  <div className="blog-two__single-img">
                    <img src="/assets/images/blog/blog-v2-img3.jpg" alt="#" />
                    <img src="/assets/images/blog/blog-v2-img3.jpg" alt="#" />
                  </div>

                  <div className="blog-two__single-content">
                    <p>June 21 . 2023</p>
                    <h3><a href="#">The quality of life insurance in <br />
                      the company</a></h3>
                  </div>
                </div>
              </div>

              {/* Blog Two Single */}
              <div className="col-xl-4 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                <div className="blog-two__single">
                  <div className="blog-two__single-img">
                    <img src="/assets/images/blog/blog-v2-img1.jpg" alt="#" />
                    <img src="/assets/images/blog/blog-v2-img1.jpg" alt="#" />
                  </div>

                  <div className="blog-two__single-content">
                    <p>June 21 . 2023</p>
                    <h3><a href="#">Bring the tables win survival <br />
                      strategies</a></h3>
                  </div>
                </div>
              </div>

              {/* Blog Two Single */}
              <div className="col-xl-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="blog-two__single">
                  <div className="blog-two__single-img">
                    <img src="/assets/images/blog/blog-v2-img2.jpg" alt="#" />
                    <img src="/assets/images/blog/blog-v2-img2.jpg" alt="#" />
                  </div>

                  <div className="blog-two__single-content">
                    <p>may 17 . 2023</p>
                    <h3><a href="#">The quality of life insurance in <br />
                      the company</a></h3>
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