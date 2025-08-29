export default function AgricultureServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg" style={{backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)'}}>
        </div>
        <div className="container">
          <div className="page-header__inner">
            <h2 className="wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">Agriculture services</h2>
            <ul className="thm-breadcrumb wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
              <li><a href="/">Home</a></li>
              <li><span>-</span></li>
              <li>Agriculture services</li>
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
                    <img src="/assets/images/services/service-details-img1.jpg" alt="Agriculture Services" />
                  </div>
                  <div className="icon-box">
                    <span className="icon-creative-idea"></span>
                  </div>
                </div>

                <div className="service-details__content-text1">
                  <h2>Agriculture services</h2>
                  <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui
                    dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit
                    amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book.</p>

                  <p>When an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.</p>
                </div>

                <div className="service-details__content-text2">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="img-box">
                        <img src="/assets/images/services/service-details-img2.jpg" alt="Why choose us" />
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="content-box">
                        <h2>Why choose?</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                        <ul>
                          <li>
                            <div className="icon-box">
                              <span className="icon-checked"></span>
                            </div>
                            <p>Refresing to get such a touch</p>
                          </li>

                          <li>
                            <div className="icon-box">
                              <span className="icon-checked"></span>
                            </div>
                            <p>Duis aute irure dolor in in voluptate</p>
                          </li>

                          <li>
                            <div className="icon-box">
                              <span className="icon-checked"></span>
                            </div>
                            <p>Velit esse cillum eu fugiat pariatur</p>
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
                          <h4>How can we help your business?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>There are many variations of passages the majority have suffered
                              alteration in some fo injected humour, or randomised words
                              believable type and scrambled it to make a type spec book. It
                              has survived not only five centuries.</p>
                          </div>
                        </div>
                      </div>

                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>What are the advantages of Baosh?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>It is a long established fact that a reader will be distracted by
                              the readable content of a page when looking at its layout.
                              The point of using Lorem Ipsum is that it has a more-or-less
                              normal distribution of letters Residential Cleaning</p>
                          </div>
                        </div>
                      </div>

                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>How It Consultancy experts work?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>It is a long established fact that a reader will be distracted by
                              the readable content of a page when looking at its layout.
                              The point of using Lorem Ipsum is that it has a more-or-less
                              normal distribution of letters Residential Cleaning</p>
                          </div>
                        </div>
                      </div>

                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>Let's find an office near you?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>It is a long established fact that a reader will be distracted by
                              the readable content of a page when looking at its layout.
                              The point of using Lorem Ipsum is that it has a more-or-less
                              normal distribution of letters Residential Cleaning</p>
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
                    <li><a className="active" href="#">Agriculture services <span
                          className="icon-arrow-right"></span></a></li>
                    <li><a href="/services/graphic-design">Graphic Design <span
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
                      <h2>We're selling <br />
                        Zxiran products</h2>
                    </div>
                    <div className="icon-box">
                      <span className="icon-phone-ringing"></span>
                      <div className="border-left"></div>
                      <div className="border-right"></div>
                    </div>
                    <div className="text-box">
                      <p>Lorem ipsum dolor sit am cons sid</p>
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