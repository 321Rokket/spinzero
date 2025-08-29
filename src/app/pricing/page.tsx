export default function PricingPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg" style={{backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)'}}>
        </div>
        <div className="container">
          <div className="page-header__inner">
            <h2 className="wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">Pricing Plans</h2>
            <ul className="thm-breadcrumb wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
              <li><a href="/">Home</a></li>
              <li><span>-</span></li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-one">
        <div className="container">
          <div className="sec-title tg-heading-subheading animation-style2 text-center">
            <div className="sec-title__tagline">
              <p className="tg-element-title">flexible pricing</p>
              <div className="border-box"></div>
            </div>
            <h2 className="sec-title__title tg-element-title">Choose Your Perfect Plan</h2>
          </div>

          <div className="row">
            {/* Basic Plan */}
            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
              <div className="pricing-one__single">
                <div className="pricing-one__single-inner">
                  <div className="pricing-one__single-title">
                    <h3>Starter</h3>
                    <p>Perfect for small businesses</p>
                  </div>
                  <div className="pricing-one__single-price">
                    <h2>$299<span>/month</span></h2>
                  </div>
                  <div className="pricing-one__single-content">
                    <ul>
                      <li>
                        <div className="icon">
                          <span className="icon-checked"></span>
                        </div>
                        <p>Brand Identity Design</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-checked"></span>
                        </div>
                        <p>Basic Website Development</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-checked"></span>
                        </div>
                        <p>Social Media Setup</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-checked"></span>
                        </div>
                        <p>SEO Optimization</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-checked"></span>
                        </div>
                        <p>Monthly Performance Reports</p>
                      </li>
                      <li className="not-available">
                        <div className="icon">
                          <span className="icon-close"></span>
                        </div>
                        <p>E-commerce Integration</p>
                      </li>
                      <li className="not-available">
                        <div className="icon">
                          <span className="icon-close"></span>
                        </div>
                        <p>Advanced Analytics</p>
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-one__single-btn">
                    <a className="thm-btn" href="/contact">
                      <span className="txt">Get Started</span>
                      <span className="bdrl"></span>
                      <span className="bdrr"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Plan */}
            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
              <div className="pricing-one__single pricing-one__single--popular">
                <div className="popular-badge">Most Popular</div>
                <div className="pricing-one__single-inner">
                  <div className="pricing-one__single-title">
                    <h3>Professional</h3>
                    <p>Ideal for growing businesses</p>
                  </div>
                  <div className="pricing-one__single-price">
                    <h2>$599<span>/month</span></h2>
                  </div>
                  <div className="pricing-one__single-content">
                    <ul>
                      <li>
                        <div className="icon">
                          <span className="icon-checked"></span>
                        </div>
                        <p>Complete Brand Strategy</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-checked"></span>
                        </div>
                        <p>Advanced Website Development</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-checked"></span>
                        </div>
                        <p>Social Media Management</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-checked"></span>
                        </div>
                        <p>Advanced SEO & Content Marketing</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-checked"></span>
                        </div>
                        <p>E-commerce Integration</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-checked"></span>
                        </div>
                        <p>Bi-weekly Strategy Sessions</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-checked"></span>
                        </div>
                        <p>Advanced Analytics Dashboard</p>
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-one__single-btn">
                    <a className="thm-btn" href="/contact">
                      <span className="txt">Get Started</span>
                      <span className="bdrl"></span>
                      <span className="bdrr"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
              <div className="pricing-one__single">
                <div className="pricing-one__single-inner">
                  <div className="pricing-one__single-title">
                    <h3>Enterprise</h3>
                    <p>For large scale operations</p>
                  </div>
                  <div className="pricing-one__single-price">
                    <h2>$999<span>/month</span></h2>
                  </div>
                  <div className="pricing-one__single-content">
                    <ul>
                      <li>
                        <div className="icon">
                          <span className="icon-checked"></span>
                        </div>
                        <p>Comprehensive Digital Strategy</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-checked"></span>
                        </div>
                        <p>Custom Platform Development</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-checked"></span>
                        </div>
                        <p>Multi-channel Marketing</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-checked"></span>
                        </div>
                        <p>Enterprise SEO & PPC Management</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-checked"></span>
                        </div>
                        <p>Advanced E-commerce Solutions</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-checked"></span>
                        </div>
                        <p>Dedicated Account Manager</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-checked"></span>
                        </div>
                        <p>24/7 Priority Support</p>
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-one__single-btn">
                    <a className="thm-btn" href="/contact">
                      <span className="txt">Get Started</span>
                      <span className="bdrl"></span>
                      <span className="bdrr"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="pricing-one__bottom-text">
            <p>All plans include free consultation, project management, and initial setup. Custom packages available for specific requirements.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-one faq-one--pricing">
        <div className="container">
          <div className="sec-title tg-heading-subheading animation-style2 text-center">
            <div className="sec-title__tagline">
              <p className="tg-element-title">common questions</p>
              <div className="border-box"></div>
            </div>
            <h2 className="sec-title__title tg-element-title">Frequently Asked Questions</h2>
          </div>

          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="faq-one__inner">
                <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                  <div className="accrodion active">
                    <div className="accrodion-title">
                      <h4>Can I change my plan at any time?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the beginning of your next billing cycle, and we'll prorate any differences in pricing.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>Do you offer custom packages?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>Absolutely! We understand that every business has unique needs. Contact us to discuss a custom package tailored specifically to your requirements and budget.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>What's included in the setup process?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>Setup includes initial consultation, strategy planning, account configuration, and onboarding. We'll work closely with you to ensure everything is properly configured before launch.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>Is there a minimum contract period?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>Our standard plans have a 3-month minimum commitment to ensure we can deliver meaningful results. However, we offer flexible terms for enterprise clients based on project scope.</p>
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