export default function GraphicDesignPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg" style={{backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)'}}>
        </div>
        <div className="container">
          <div className="page-header__inner">
            <h2 className="wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">Graphic Design</h2>
            <ul className="thm-breadcrumb wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
              <li><a href="/">Home</a></li>
              <li><span>-</span></li>
              <li>Graphic Design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="service-details">
        <div className="container">
          <div className="row">
            {/* Service Details Content */}
            <div className="col-xl-8">
              <div className="service-details__content">
                <div className="service-details__content-img1">
                  <div className="inner">
                    <img src="/assets/images/services/service-details-img1.jpg" alt="Graphic Design Services" />
                  </div>
                  <div className="icon-box">
                    <span className="icon-creative-idea"></span>
                  </div>
                </div>

                <div className="service-details__content-text1">
                  <h2>Graphic Design</h2>
                  <p>Our graphic design services combine creativity with strategic thinking to deliver visual solutions that communicate your brand message effectively. We specialize in creating compelling designs that capture attention and drive engagement across all platforms.</p>

                  <p>From logo design to complete brand identity systems, our experienced designers work closely with clients to understand their vision and translate it into stunning visual communications that resonate with target audiences.</p>
                </div>

                <div className="service-details__content-text2">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="img-box">
                        <img src="/assets/images/services/service-details-img2.jpg" alt="Design Process" />
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="content-box">
                        <h2>Why choose us?</h2>
                        <p>Our design philosophy centers on creating impactful visual experiences that tell your story.</p>
                        <ul>
                          <li>
                            <div className="icon-box">
                              <span className="icon-checked"></span>
                            </div>
                            <p>Creative and original design concepts</p>
                          </li>

                          <li>
                            <div className="icon-box">
                              <span className="icon-checked"></span>
                            </div>
                            <p>Strategic brand positioning approach</p>
                          </li>

                          <li>
                            <div className="icon-box">
                              <span className="icon-checked"></span>
                            </div>
                            <p>Multi-platform design optimization</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="service-details__faq">
                  <div className="service-details__faq-inner">
                    <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                      <div className="accrodion active">
                        <div className="accrodion-title">
                          <h4>What design services do you offer?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>We offer comprehensive design services including logo design, brand identity, print materials, digital graphics, web design elements, and marketing collateral. Our team handles projects from concept to final delivery.</p>
                          </div>
                        </div>
                      </div>

                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>How long does a typical design project take?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>Project timelines vary based on complexity and scope. A simple logo might take 1-2 weeks, while a complete brand identity system could take 4-6 weeks. We'll provide detailed timelines during our initial consultation.</p>
                          </div>
                        </div>
                      </div>

                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>Do you provide revisions?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>Yes, we include multiple revision rounds in our design packages. We believe collaboration is key to achieving the perfect design that meets your vision and business objectives.</p>
                          </div>
                        </div>
                      </div>

                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>Can you work with our existing brand guidelines?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>Absolutely! We can work within your existing brand guidelines or help you evolve and refine them. Our designers are experienced in maintaining brand consistency across all design elements.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xl-4">
              <div className="sidebar">
                {/* Services List */}
                <div className="sidebar__single sidebar__services">
                  <ul className="sidebar__services-list">
                    <li><a href="/services/agriculture">Agriculture services <span
                          className="icon-arrow-right"></span></a></li>
                    <li><a className="active" href="#">Graphic Design <span
                          className="icon-arrow-right"></span></a></li>
                    <li><a href="/services/delivery">Delivery services <span
                          className="icon-arrow-right"></span></a></li>
                    <li><a href="/services/farming-products">Farming products <span
                          className="icon-arrow-right"></span></a></li>
                  </ul>
                </div>

                {/* Contact Sidebar */}
                <div className="sidebar__single sidebar__contact"
                  style={{backgroundImage: 'url(/assets/images/sidebar/sidebar-img1.jpg)'}}>
                  <div className="sidebar__contact-inner text-center">
                    <div className="title-box">
                      <h2>Ready to elevate <br />
                        your brand?</h2>
                    </div>
                    <div className="icon-box">
                      <span className="icon-phone-ringing"></span>
                      <div className="border-left"></div>
                      <div className="border-right"></div>
                    </div>
                    <div className="text-box">
                      <p>Let's discuss your design project</p>
                      <h3><a href="tel:+923076806860">+ 92 (307)68 - 06860</a></h3>
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