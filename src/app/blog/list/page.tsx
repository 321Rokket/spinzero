export default function BlogListPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg" style={{backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)'}}>
        </div>
        <div className="container">
          <div className="page-header__inner">
            <h2 className="wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">Blog List</h2>
            <ul className="thm-breadcrumb wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
              <li><a href="/">Home</a></li>
              <li><span>-</span></li>
              <li>Blog List</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Blog List */}
      <section className="blog-list">
        <div className="container">
          <div className="row">
            {/* Blog List Content */}
            <div className="col-xl-8">
              <div className="blog-list__content">
                {/* Blog Post 1 */}
                <div className="blog-list__single">
                  <div className="blog-list__single-img">
                    <img src="/assets/images/blog/blog-list-img1.jpg" alt="Digital Marketing" />
                    <div className="date-box">15<br />Mar</div>
                  </div>

                  <div className="blog-list__single-content">
                    <ul className="meta-info">
                      <li><span className="icon-profile-user"></span><a href="#">Sarah Johnson</a></li>
                      <li><span className="icon-comment"></span><a href="#">5 Comments</a></li>
                    </ul>
                    <h2><a href="/blog/sample-post">Digital Marketing Trends That Will Shape 2024</a></h2>
                    <p>Discover the latest digital marketing trends that are revolutionizing the way businesses connect with their audiences. From AI-powered personalization to voice search optimization, learn how to stay ahead of the competition and drive meaningful engagement in the digital landscape.</p>
                    <div className="btn-box">
                      <a href="/blog/sample-post">Read More <span className="icon-right-arrow-1"></span></a>
                    </div>
                  </div>
                </div>

                {/* Blog Post 2 */}
                <div className="blog-list__single">
                  <div className="blog-list__single-img">
                    <img src="/assets/images/blog/blog-list-img2.jpg" alt="Web Design" />
                    <div className="date-box">10<br />Mar</div>
                  </div>

                  <div className="blog-list__single-content">
                    <ul className="meta-info">
                      <li><span className="icon-profile-user"></span><a href="#">Michael Chen</a></li>
                      <li><span className="icon-comment"></span><a href="#">8 Comments</a></li>
                    </ul>
                    <h2><a href="/blog/sample-post">Modern Web Design Best Practices Guide</a></h2>
                    <p>Explore the fundamental principles of modern web design that create exceptional user experiences. Learn about responsive design, accessibility standards, performance optimization, and the latest design trends that make websites both beautiful and functional.</p>
                    <div className="btn-box">
                      <a href="/blog/sample-post">Read More <span className="icon-right-arrow-1"></span></a>
                    </div>
                  </div>
                </div>

                {/* Blog Post 3 */}
                <div className="blog-list__single">
                  <div className="blog-list__single-img">
                    <img src="/assets/images/blog/blog-list-img3.jpg" alt="Brand Strategy" />
                    <div className="date-box">05<br />Mar</div>
                  </div>

                  <div className="blog-list__single-content">
                    <ul className="meta-info">
                      <li><span className="icon-profile-user"></span><a href="#">Emily Davis</a></li>
                      <li><span className="icon-comment"></span><a href="#">3 Comments</a></li>
                    </ul>
                    <h2><a href="/blog/sample-post">Building a Strong Brand Identity from Scratch</a></h2>
                    <p>Learn how to create a compelling brand identity that resonates with your target audience and sets you apart from competitors. This comprehensive guide covers brand strategy, visual identity, messaging, and implementation across all touchpoints.</p>
                    <div className="btn-box">
                      <a href="/blog/sample-post">Read More <span className="icon-right-arrow-1"></span></a>
                    </div>
                  </div>
                </div>

                {/* Blog Post 4 */}
                <div className="blog-list__single">
                  <div className="blog-list__single-img">
                    <img src="/assets/images/blog/blog-details-img1.jpg" alt="UX Design" />
                    <div className="date-box">28<br />Feb</div>
                  </div>

                  <div className="blog-list__single-content">
                    <ul className="meta-info">
                      <li><span className="icon-profile-user"></span><a href="#">David Rodriguez</a></li>
                      <li><span className="icon-comment"></span><a href="#">12 Comments</a></li>
                    </ul>
                    <h2><a href="/blog/sample-post">User Experience Design Principles Every Designer Should Know</a></h2>
                    <p>Master the essential UX design principles that create intuitive and engaging user experiences. From user research and information architecture to prototyping and usability testing, discover the complete UX design process.</p>
                    <div className="btn-box">
                      <a href="/blog/sample-post">Read More <span className="icon-right-arrow-1"></span></a>
                    </div>
                  </div>
                </div>

                {/* Blog Post 5 */}
                <div className="blog-list__single">
                  <div className="blog-list__single-img">
                    <img src="/assets/images/blog/blog-details-img2.jpg" alt="E-commerce" />
                    <div className="date-box">20<br />Feb</div>
                  </div>

                  <div className="blog-list__single-content">
                    <ul className="meta-info">
                      <li><span className="icon-profile-user"></span><a href="#">Jennifer Wilson</a></li>
                      <li><span className="icon-comment"></span><a href="#">7 Comments</a></li>
                    </ul>
                    <h2><a href="/blog/sample-post">E-commerce Growth Strategies for Small Business</a></h2>
                    <p>Unlock the potential of your e-commerce business with proven growth strategies. Learn about conversion optimization, customer retention, inventory management, and scaling techniques that drive sustainable business growth.</p>
                    <div className="btn-box">
                      <a href="/blog/sample-post">Read More <span className="icon-right-arrow-1"></span></a>
                    </div>
                  </div>
                </div>

                {/* Pagination */}
                <div className="blog-list__pagination">
                  <ul className="pg-pagination list-unstyled">
                    <li className="count"><a href="#">1</a></li>
                    <li className="count"><a href="#">2</a></li>
                    <li className="count"><a href="#">3</a></li>
                    <li className="next">
                      <a href="#" aria-label="Next">
                        <span className="icon-right-arrow-1"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xl-4">
              <div className="sidebar">
                {/* Search Widget */}
                <div className="sidebar__single sidebar__search">
                  <form className="sidebar__search-form">
                    <input type="search" placeholder="Search here" />
                    <button type="submit"><span className="icon-magnifying-glass"></span></button>
                  </form>
                </div>

                {/* Recent Posts Widget */}
                <div className="sidebar__single sidebar__post">
                  <div className="sidebar-title">
                    <h3>Recent Posts</h3>
                  </div>
                  <ul className="sidebar__post-list">
                    <li>
                      <div className="sidebar__post-image">
                        <img src="/assets/images/blog/blog-v1-img1.jpg" alt="Recent Post" />
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          <span className="sidebar__post-content-meta">March 15, 2024</span>
                          <a href="/blog/sample-post">Digital Marketing Trends</a>
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__post-image">
                        <img src="/assets/images/blog/blog-v1-img2.jpg" alt="Recent Post" />
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          <span className="sidebar__post-content-meta">March 10, 2024</span>
                          <a href="/blog/sample-post">Web Design Best Practices</a>
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__post-image">
                        <img src="/assets/images/blog/blog-v1-img3.jpg" alt="Recent Post" />
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          <span className="sidebar__post-content-meta">March 5, 2024</span>
                          <a href="/blog/sample-post">Brand Identity Guide</a>
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Categories Widget */}
                <div className="sidebar__single sidebar__category">
                  <div className="sidebar-title">
                    <h3>Categories</h3>
                  </div>
                  <ul className="sidebar__category-list">
                    <li><a href="#">Web Design <span>(12)</span></a></li>
                    <li><a href="#">Digital Marketing <span>(8)</span></a></li>
                    <li><a href="#">Brand Strategy <span>(15)</span></a></li>
                    <li><a href="#">UX/UI Design <span>(6)</span></a></li>
                    <li><a href="#">E-commerce <span>(9)</span></a></li>
                    <li><a href="#">Development <span>(11)</span></a></li>
                  </ul>
                </div>

                {/* Tags Widget */}
                <div className="sidebar__single sidebar__tags">
                  <div className="sidebar-title">
                    <h3>Tags</h3>
                  </div>
                  <div className="sidebar__tags-list">
                    <a href="#">Design</a>
                    <a href="#">Marketing</a>
                    <a href="#">Brand</a>
                    <a href="#">Web</a>
                    <a href="#">Development</a>
                    <a href="#">UX</a>
                    <a href="#">SEO</a>
                    <a href="#">Strategy</a>
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