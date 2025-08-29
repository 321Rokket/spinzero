export default function TeamDetailsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg" style={{backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)'}}>
        </div>
        <div className="container">
          <div className="page-header__inner">
            <h2 className="wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">Team Details</h2>
            <ul className="thm-breadcrumb wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
              <li><a href="/">Home</a></li>
              <li><span>-</span></li>
              <li>Team Details</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Details */}
      <section className="team-details">
        <div className="container">
          {/* Team Details Top */}
          <div className="team-details__top">
            <div className="row">
              {/* Team Details Top Left */}
              <div className="col-xl-5">
                <div className="team-details__top-left">
                  <div className="img-box">
                    <img src="/assets/images/team/team-details-img1.jpg" alt="Team Member" />
                    <div className="overlay-content">
                      <h3>Sarah Johnson</h3>
                      <p>Creative Director</p>
                    </div>
                  </div>
                  <div className="social-links">
                    <ul>
                      <li><a href="#"><span className="icon-facebook"></span></a></li>
                      <li><a href="#"><span className="icon-twitter"></span></a></li>
                      <li><a href="#"><span className="icon-instagram"></span></a></li>
                      <li><a href="#"><span className="icon-dribbble-1"></span></a></li>
                      <li><a href="#"><span className="icon-linkedin"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Team Details Top Content */}
              <div className="col-xl-7">
                <div className="team-details__top-content">
                  <div className="title-box">
                    <h2>Hello I am Sarah, Creative Director <br />
                      and Design Expert</h2>
                    <p>With over 8 years of experience in creative design and brand strategy, I lead our design team to create exceptional visual experiences. My passion lies in transforming ideas into compelling designs that resonate with audiences and drive business growth.</p>
                  </div>

                  <div className="team-details__top-content-text1">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="single-contact-info">
                          <ul>
                            <li>
                              <h3><span>Phone : </span><a href="tel:+1234567890">+1 (555) 123-4567</a></h3>
                            </li>

                            <li>
                              <h3><span>Email : </span><a href="mailto:sarah@spinzero.com">sarah@spinzero.com</a></h3>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="single-contact-info">
                          <ul>
                            <li>
                              <h3><span>Location : </span> New York, USA</h3>
                            </li>

                            <li>
                              <h3><span>Portfolio : </span><a href="https://sarahjohnson.design/">sarahjohnson.design</a></h3>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="team-details__top-content-text1-btn">
                      <a className="thm-btn" href="/contact">
                        <span className="txt">Contact Me</span>
                        <span className="bdrl"></span>
                        <span className="bdrr"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Details Bottom */}
          <div className="team-details__bottom">
            <div className="row">
              <div className="col-xl-12">
                <div className="team-details__bottom-content">
                  <div className="team-details__bottom-content-inner">
                    <div className="team-details__bottom-content-text1">
                      <h2>Professional Background</h2>
                      <p>Sarah brings a wealth of experience from leading design agencies and tech companies. She has worked with Fortune 500 companies to small startups, helping them create memorable brand experiences that drive engagement and growth.</p>
                      
                      <p>Her expertise spans across digital design, brand identity, user experience design, and creative strategy. Sarah believes that great design is not just about aesthetics, but about solving real problems and creating meaningful connections between brands and their audiences.</p>
                    </div>

                    <div className="team-details__bottom-content-text2">
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="team-details__bottom-content-text2-left">
                            <h3>Skills & Expertise</h3>
                            <ul>
                              <li>
                                <div className="icon-box">
                                  <span className="icon-checked"></span>
                                </div>
                                <p>Brand Identity & Visual Design</p>
                              </li>
                              <li>
                                <div className="icon-box">
                                  <span className="icon-checked"></span>
                                </div>
                                <p>User Experience (UX) Design</p>
                              </li>
                              <li>
                                <div className="icon-box">
                                  <span className="icon-checked"></span>
                                </div>
                                <p>Digital Marketing Design</p>
                              </li>
                              <li>
                                <div className="icon-box">
                                  <span className="icon-checked"></span>
                                </div>
                                <p>Creative Strategy & Consulting</p>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-xl-6">
                          <div className="team-details__bottom-content-text2-right">
                            <h3>Education & Certifications</h3>
                            <ul>
                              <li>
                                <div className="icon-box">
                                  <span className="icon-checked"></span>
                                </div>
                                <p>BFA in Graphic Design - Parsons School of Design</p>
                              </li>
                              <li>
                                <div className="icon-box">
                                  <span className="icon-checked"></span>
                                </div>
                                <p>Certified UX Professional (CXL)</p>
                              </li>
                              <li>
                                <div className="icon-box">
                                  <span className="icon-checked"></span>
                                </div>
                                <p>Adobe Certified Expert (ACE)</p>
                              </li>
                              <li>
                                <div className="icon-box">
                                  <span className="icon-checked"></span>
                                </div>
                                <p>Google Design Certificate</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="team-details__bottom-content-img">
                      <img src="/assets/images/team/team-details-img2.jpg" alt="Sarah's Workspace" />
                    </div>

                    <div className="team-details__bottom-content-text3">
                      <h2>Leadership Philosophy</h2>
                      <p>As Creative Director, Sarah believes in fostering a collaborative environment where creativity thrives. She mentors young designers and encourages innovative thinking while maintaining high standards for design excellence.</p>
                      
                      <p>"Great design happens when you combine creativity with strategy, empathy with execution, and vision with attention to detail. My role is to inspire our team to create work that not only looks beautiful but also delivers real value to our clients and their customers."</p>
                    </div>

                    <div className="team-details__achievements">
                      <h3>Notable Achievements</h3>
                      <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6">
                          <div className="achievement-item">
                            <div className="icon-box">
                              <span className="icon-award"></span>
                            </div>
                            <h4>50+</h4>
                            <p>Design Awards</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                          <div className="achievement-item">
                            <div className="icon-box">
                              <span className="icon-project"></span>
                            </div>
                            <h4>200+</h4>
                            <p>Projects Completed</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                          <div className="achievement-item">
                            <div className="icon-box">
                              <span className="icon-client"></span>
                            </div>
                            <h4>150+</h4>
                            <p>Happy Clients</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                          <div className="achievement-item">
                            <div className="icon-box">
                              <span className="icon-experience"></span>
                            </div>
                            <h4>8+</h4>
                            <p>Years Experience</p>
                          </div>
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