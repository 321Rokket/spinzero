export default function BlogCarouselPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg" style={{backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)'}}>
        </div>
        <div className="container">
          <div className="page-header__inner">
            <h2 className="wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">Blog Carousel</h2>
            <ul className="thm-breadcrumb wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
              <li><a href="/">Home</a></li>
              <li><span>-</span></li>
              <li>Blog Carousel</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Blog Page Carousel */}
      <section className="blog-page-carousel">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="blog-page-carousel__inner">
                <div className="owl-carousel owl-theme thm-owl__carousel blog-page__carousel" data-owl-options='{
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

                  {/* Blog Post 1 */}
                  <div className="blog-two__single">
                    <div className="blog-two__single-img">
                      <img src="/assets/images/blog/blog-v2-img1.jpg" alt="Digital Marketing Trends" />
                      <img src="/assets/images/blog/blog-v2-img1.jpg" alt="Digital Marketing Trends" />
                    </div>

                    <div className="blog-two__single-content">
                      <p>March 15, 2024</p>
                      <h3><a href="/blog/sample-post">Digital Marketing Trends <br />
                          That Will Shape 2024</a></h3>
                    </div>
                  </div>

                  {/* Blog Post 2 */}
                  <div className="blog-two__single">
                    <div className="blog-two__single-img">
                      <img src="/assets/images/blog/blog-v2-img2.jpg" alt="Web Design Best Practices" />
                      <img src="/assets/images/blog/blog-v2-img2.jpg" alt="Web Design Best Practices" />
                    </div>

                    <div className="blog-two__single-content">
                      <p>March 10, 2024</p>
                      <h3><a href="/blog/sample-post">Modern Web Design <br />
                          Best Practices Guide</a></h3>
                    </div>
                  </div>

                  {/* Blog Post 3 */}
                  <div className="blog-two__single">
                    <div className="blog-two__single-img">
                      <img src="/assets/images/blog/blog-v2-img3.jpg" alt="Brand Strategy" />
                      <img src="/assets/images/blog/blog-v2-img3.jpg" alt="Brand Strategy" />
                    </div>

                    <div className="blog-two__single-content">
                      <p>March 05, 2024</p>
                      <h3><a href="/blog/sample-post">Building a Strong Brand <br />
                          Identity from Scratch</a></h3>
                    </div>
                  </div>

                  {/* Blog Post 4 */}
                  <div className="blog-two__single">
                    <div className="blog-two__single-img">
                      <img src="/assets/images/blog/blog-v1-img1.jpg" alt="UX Design" />
                      <img src="/assets/images/blog/blog-v1-img1.jpg" alt="UX Design" />
                    </div>

                    <div className="blog-two__single-content">
                      <p>February 28, 2024</p>
                      <h3><a href="/blog/sample-post">User Experience Design <br />
                          Principles Every Designer Should Know</a></h3>
                    </div>
                  </div>

                  {/* Blog Post 5 */}
                  <div className="blog-two__single">
                    <div className="blog-two__single-img">
                      <img src="/assets/images/blog/blog-v1-img2.jpg" alt="E-commerce Growth" />
                      <img src="/assets/images/blog/blog-v1-img2.jpg" alt="E-commerce Growth" />
                    </div>

                    <div className="blog-two__single-content">
                      <p>February 20, 2024</p>
                      <h3><a href="/blog/sample-post">E-commerce Growth <br />
                          Strategies for Small Business</a></h3>
                    </div>
                  </div>

                  {/* Blog Post 6 */}
                  <div className="blog-two__single">
                    <div className="blog-two__single-img">
                      <img src="/assets/images/blog/blog-v1-img3.jpg" alt="Social Media Marketing" />
                      <img src="/assets/images/blog/blog-v1-img3.jpg" alt="Social Media Marketing" />
                    </div>

                    <div className="blog-two__single-content">
                      <p>February 15, 2024</p>
                      <h3><a href="/blog/sample-post">Social Media Marketing <br />
                          Tips for Maximum Engagement</a></h3>
                    </div>
                  </div>

                  {/* Blog Post 7 */}
                  <div className="blog-two__single">
                    <div className="blog-two__single-img">
                      <img src="/assets/images/blog/blog-details-img1.jpg" alt="Content Marketing" />
                      <img src="/assets/images/blog/blog-details-img1.jpg" alt="Content Marketing" />
                    </div>

                    <div className="blog-two__single-content">
                      <p>February 10, 2024</p>
                      <h3><a href="/blog/sample-post">Content Marketing <br />
                          Strategies That Actually Work</a></h3>
                    </div>
                  </div>

                  {/* Blog Post 8 */}
                  <div className="blog-two__single">
                    <div className="blog-two__single-img">
                      <img src="/assets/images/blog/blog-details-img2.jpg" alt="Mobile App Development" />
                      <img src="/assets/images/blog/blog-details-img2.jpg" alt="Mobile App Development" />
                    </div>

                    <div className="blog-two__single-content">
                      <p>February 05, 2024</p>
                      <h3><a href="/blog/sample-post">Mobile App Development <br />
                          Trends and Technologies</a></h3>
                    </div>
                  </div>

                  {/* Blog Post 9 */}
                  <div className="blog-two__single">
                    <div className="blog-two__single-img">
                      <img src="/assets/images/blog/blog-list-img1.jpg" alt="SEO Optimization" />
                      <img src="/assets/images/blog/blog-list-img1.jpg" alt="SEO Optimization" />
                    </div>

                    <div className="blog-two__single-content">
                      <p>January 30, 2024</p>
                      <h3><a href="/blog/sample-post">SEO Optimization <br />
                          Complete Guide for Beginners</a></h3>
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