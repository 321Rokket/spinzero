export default function DeliveryServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg" style={{backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)'}}>
        </div>
        <div className="container">
          <div className="page-header__inner">
            <h2 className="wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">Delivery Services</h2>
            <ul className="thm-breadcrumb wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
              <li><a href="/">Home</a></li>
              <li><span>-</span></li>
              <li>Delivery Services</li>
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
                    <img src="/assets/images/services/service-details-img1.jpg" alt="Delivery Services" />
                  </div>
                  <div className="icon-box">
                    <span className="icon-creative-idea"></span>
                  </div>
                </div>

                <div className="service-details__content-text1">
                  <h2>Delivery Services</h2>
                  <p>Our reliable delivery services ensure your packages and products reach their destination safely and on time. We offer comprehensive logistics solutions that cater to businesses of all sizes, from local deliveries to nationwide distribution networks.</p>

                  <p>With our advanced tracking systems and experienced delivery team, you can trust us to handle your most important shipments with care and professionalism. We understand the critical role that timely delivery plays in your business success.</p>
                </div>

                <div className="service-details__content-text2">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="img-box">
                        <img src="/assets/images/services/service-details-img2.jpg" alt="Delivery Process" />
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="content-box">
                        <h2>Why choose us?</h2>
                        <p>Fast, reliable, and secure delivery solutions tailored to your needs.</p>
                        <ul>
                          <li>
                            <div className="icon-box">
                              <span className="icon-checked"></span>
                            </div>
                            <p>Same-day and express delivery options</p>
                          </li>

                          <li>
                            <div className="icon-box">
                              <span className="icon-checked"></span>
                            </div>
                            <p>Real-time tracking and notifications</p>
                          </li>

                          <li>
                            <div className="icon-box">
                              <span className="icon-checked"></span>
                            </div>
                            <p>Secure handling and insurance coverage</p>
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
                          <h4>What delivery options do you offer?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>We offer same-day delivery, express delivery (1-2 days), standard delivery (3-5 days), and scheduled delivery options. Our services cover local, regional, and national routes with various size and weight accommodations.</p>
                          </div>
                        </div>
                      </div>

                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>How can I track my delivery?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>Once your package is dispatched, you'll receive a tracking number via email or SMS. You can track your delivery in real-time through our website or mobile app, with live updates at every stage of the journey.</p>
                          </div>
                        </div>
                      </div>

                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>Do you offer bulk delivery services?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>Yes, we provide specialized bulk delivery services for businesses with high-volume shipping needs. We offer competitive rates, dedicated account management, and customized logistics solutions for large orders.</p>
                          </div>
                        </div>
                      </div>

                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>What if my package is damaged or lost?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>All our deliveries are insured and we take full responsibility for packages in our care. In the rare event of damage or loss, we provide immediate compensation and work to resolve issues quickly through our dedicated support team.</p>
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
                    <li><a href="/services/graphic-design">Graphic Design <span
                          className="icon-arrow-right"></span></a></li>
                    <li><a className="active" href="#">Delivery services <span
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
                      <h2>Need fast <br />
                        delivery?</h2>
                    </div>
                    <div className="icon-box">
                      <span className="icon-phone-ringing"></span>
                      <div className="border-left"></div>
                      <div className="border-right"></div>
                    </div>
                    <div className="text-box">
                      <p>Get instant delivery quotes</p>
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