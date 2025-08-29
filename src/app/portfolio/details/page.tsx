export default function PortfolioDetailsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg" style={{backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)'}}>
        </div>
        <div className="container">
          <div className="page-header__inner">
            <h2 className="wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">Portfolio Details</h2>
            <ul className="thm-breadcrumb wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
              <li><a href="/">Home</a></li>
              <li><span>-</span></li>
              <li>Portfolio Details</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Portfolio Details */}
      <div className="portfolio-details">
        <div className="container">
          <div className="portfolio-details__inner">
            <div className="portfolio-details__img1">
              <img src="/assets/images/project/portfolio-details-img1.jpg" alt="Project Overview" />
            </div>

            <div className="portfolio-details__text1">
              <div className="row">
                <div className="col-xl-8">
                  <div className="content-box">
                    <h2>Projects Overview</h2>
                    <p>This comprehensive project showcases our ability to deliver innovative digital solutions that drive business growth and user engagement. Our team collaborated closely with the client to understand their unique requirements and develop a tailored solution that exceeds expectations.</p>
                    
                    <p>The project involved extensive research, strategic planning, and careful execution across multiple phases. We utilized cutting-edge technologies and industry best practices to ensure optimal performance, scalability, and user experience. The result is a robust solution that not only meets current needs but is also future-ready.</p>

                    <ul>
                      <li>
                        <div className="icon-box">
                          <span className="icon-checked"></span>
                        </div>
                        <p>Comprehensive market research and competitor analysis conducted</p>
                      </li>
                      <li>
                        <div className="icon-box">
                          <span className="icon-checked"></span>
                        </div>
                        <p>User-centered design approach with extensive testing and validation</p>
                      </li>
                      <li>
                        <div className="icon-box">
                          <span className="icon-checked"></span>
                        </div>
                        <p>Scalable architecture designed for future growth and expansion</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-xl-4">
                  <div className="sidebar-box">
                    <div className="sidebar-box-bg"
                      style={{backgroundImage: 'url(/assets/images/project/portfolio-details-img2.jpg)'}}>
                    </div>
                    <ul className="sidebar-box-list">
                      <li>
                        <h2>Client:</h2>
                        <h3>TechCorp Solutions</h3>
                      </li>

                      <li>
                        <h2>Category:</h2>
                        <h3>Web Development, Design</h3>
                      </li>

                      <li>
                        <h2>Date:</h2>
                        <h3>March 2024</h3>
                      </li>

                      <li>
                        <h2>Duration:</h2>
                        <h3>3 Months</h3>
                      </li>

                      <li>
                        <h2>Technology:</h2>
                        <h3>React, Node.js, MongoDB</h3>
                      </li>

                      <li>
                        <h2>Status:</h2>
                        <h3>Completed</h3>
                      </li>

                      <li className="last">
                        <div className="btn-box">
                          <a className="thm-btn" href="/contact">
                            <span className="txt">Start Project</span>
                            <span className="bdrl"></span>
                            <span className="bdrr"></span>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio-details__text2">
              <h2>Project Challenges & Solutions</h2>
              <p>Every project comes with unique challenges that require creative problem-solving and innovative approaches. This particular project presented several complex requirements that our team successfully addressed through strategic planning and technical expertise.</p>

              <div className="row">
                <div className="col-xl-6">
                  <div className="portfolio-details__text2-content">
                    <h3>Key Challenges:</h3>
                    <ul>
                      <li>
                        <div className="icon-box">
                          <span className="icon-arrow-right"></span>
                        </div>
                        <p>Complex integration requirements with existing systems</p>
                      </li>
                      <li>
                        <div className="icon-box">
                          <span className="icon-arrow-right"></span>
                        </div>
                        <p>Tight timeline with multiple stakeholders involved</p>
                      </li>
                      <li>
                        <div className="icon-box">
                          <span className="icon-arrow-right"></span>
                        </div>
                        <p>Scalability requirements for future growth</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-xl-6">
                  <div className="portfolio-details__text2-content">
                    <h3>Our Solutions:</h3>
                    <ul>
                      <li>
                        <div className="icon-box">
                          <span className="icon-arrow-right"></span>
                        </div>
                        <p>Developed custom APIs for seamless integration</p>
                      </li>
                      <li>
                        <div className="icon-box">
                          <span className="icon-arrow-right"></span>
                        </div>
                        <p>Implemented agile methodology with weekly sprints</p>
                      </li>
                      <li>
                        <div className="icon-box">
                          <span className="icon-arrow-right"></span>
                        </div>
                        <p>Designed modular architecture for easy scaling</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio-details__results">
              <h2>Project Results</h2>
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="portfolio-details__results-single">
                    <div className="icon-box">
                      <span className="icon-growth"></span>
                    </div>
                    <div className="content-box">
                      <h3>150%</h3>
                      <p>Increase in User Engagement</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="portfolio-details__results-single">
                    <div className="icon-box">
                      <span className="icon-speed"></span>
                    </div>
                    <div className="content-box">
                      <h3>40%</h3>
                      <p>Faster Loading Times</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="portfolio-details__results-single">
                    <div className="icon-box">
                      <span className="icon-conversion"></span>
                    </div>
                    <div className="content-box">
                      <h3>85%</h3>
                      <p>Higher Conversion Rate</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="portfolio-details__results-single">
                    <div className="icon-box">
                      <span className="icon-satisfaction"></span>
                    </div>
                    <div className="content-box">
                      <h3>98%</h3>
                      <p>Client Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}