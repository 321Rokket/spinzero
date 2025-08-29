export default function FarmingProductsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg" style={{backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)'}}>
        </div>
        <div className="container">
          <div className="page-header__inner">
            <h2 className="wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">Farming Products</h2>
            <ul className="thm-breadcrumb wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
              <li><a href="/">Home</a></li>
              <li><span>-</span></li>
              <li>Farming Products</li>
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
                    <img src="/assets/images/services/service-details-img1.jpg" alt="Farming Products" />
                  </div>
                  <div className="icon-box">
                    <span className="icon-creative-idea"></span>
                  </div>
                </div>

                <div className="service-details__content-text1">
                  <h2>Farming Products</h2>
                  <p>We provide high-quality farming products and agricultural supplies to support modern farming operations. Our comprehensive range includes seeds, fertilizers, pesticides, farming equipment, and organic solutions designed to maximize crop yield and sustainability.</p>

                  <p>Our products are sourced from trusted manufacturers and undergo rigorous quality testing to ensure they meet the highest standards. We work closely with farmers to understand their specific needs and provide tailored solutions that enhance productivity while protecting the environment.</p>
                </div>

                <div className="service-details__content-text2">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="img-box">
                        <img src="/assets/images/services/service-details-img2.jpg" alt="Quality Products" />
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="content-box">
                        <h2>Why choose us?</h2>
                        <p>Premium quality farming products backed by expert agricultural knowledge.</p>
                        <ul>
                          <li>
                            <div className="icon-box">
                              <span className="icon-checked"></span>
                            </div>
                            <p>Certified organic and conventional products</p>
                          </li>

                          <li>
                            <div className="icon-box">
                              <span className="icon-checked"></span>
                            </div>
                            <p>Expert agricultural consultation included</p>
                          </li>

                          <li>
                            <div className="icon-box">
                              <span className="icon-checked"></span>
                            </div>
                            <p>Bulk purchasing with competitive pricing</p>
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
                          <h4>What types of farming products do you offer?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>We offer a complete range of farming products including premium seeds, organic and synthetic fertilizers, crop protection products, soil conditioners, farming tools and equipment, irrigation supplies, and specialized organic farming solutions.</p>
                          </div>
                        </div>
                      </div>

                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>Do you provide organic farming products?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>Yes, we have an extensive range of certified organic products including organic fertilizers, bio-pesticides, organic seeds, and natural soil amendments. All our organic products are certified by recognized organic certification bodies.</p>
                          </div>
                        </div>
                      </div>

                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>Can you provide technical support for product usage?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>Absolutely! Our team includes qualified agronomists and agricultural experts who provide free consultation on product selection, application methods, timing, and dosage recommendations to optimize your farming results.</p>
                          </div>
                        </div>
                      </div>

                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>Do you offer bulk purchase discounts?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>Yes, we offer attractive volume discounts for bulk purchases. We also provide seasonal offers, loyalty programs for regular customers, and flexible payment terms for large orders to support your farming business growth.</p>
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
                    <li><a href="/services/delivery">Delivery services <span
                          className="icon-arrow-right"></span></a></li>
                    <li><a className="active" href="#">Farming products <span
                          className="icon-arrow-right"></span></a></li>
                  </ul>
                </div>

                {/* Contact Sidebar */}
                <div className="sidebar__single sidebar__contact"
                  style={{backgroundImage: 'url(/assets/images/sidebar/sidebar-img1.jpg)'}}>
                  <div className="sidebar__contact-inner text-center">
                    <div className="title-box">
                      <h2>Quality farming <br />
                        products</h2>
                    </div>
                    <div className="icon-box">
                      <span className="icon-phone-ringing"></span>
                      <div className="border-left"></div>
                      <div className="border-right"></div>
                    </div>
                    <div className="text-box">
                      <p>Get expert product recommendations</p>
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