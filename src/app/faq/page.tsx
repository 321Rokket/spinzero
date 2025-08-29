export default function FAQPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg" style={{backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)'}}>
        </div>
        <div className="container">
          <div className="page-header__inner">
            <h2 className="wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">FAQ</h2>
            <ul className="thm-breadcrumb wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
              <li><a href="/">Home</a></li>
              <li><span>-</span></li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="faq-one__left">
                <div className="faq-one__left-img">
                  <img src="/assets/images/resources/faq-v1-img1.jpg" alt="FAQ" />
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="faq-one__right">
                <div className="sec-title tg-heading-subheading animation-style2">
                  <div className="sec-title__tagline">
                    <p className="tg-element-title">get answers</p>
                    <div className="border-box"></div>
                  </div>
                  <h2 className="sec-title__title tg-element-title">Frequently Asked Questions</h2>
                </div>

                <div className="faq-one__inner">
                  <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                    <div className="accrodion active">
                      <div className="accrodion-title">
                        <h4>What services does SpinZero offer?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>SpinZero offers comprehensive digital solutions including web development, mobile app development, digital marketing, brand strategy, graphic design, e-commerce solutions, and business consulting services.</p>
                        </div>
                      </div>
                    </div>

                    <div className="accrodion">
                      <div className="accrodion-title">
                        <h4>How long does a typical project take?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while complex web applications or mobile apps can take 3-6 months. We provide detailed timelines during the initial consultation.</p>
                        </div>
                      </div>
                    </div>

                    <div className="accrodion">
                      <div className="accrodion-title">
                        <h4>Do you work with small businesses?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>Absolutely! We work with businesses of all sizes, from startups and small businesses to large enterprises. We have flexible packages and solutions tailored to fit different budgets and requirements.</p>
                        </div>
                      </div>
                    </div>

                    <div className="accrodion">
                      <div className="accrodion-title">
                        <h4>What is your development process?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>Our process includes discovery and planning, design and prototyping, development and testing, deployment, and ongoing support. We use agile methodology with regular check-ins and updates throughout the project.</p>
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

      {/* More FAQ Section */}
      <section className="faq-two">
        <div className="container">
          <div className="sec-title tg-heading-subheading animation-style2 text-center">
            <div className="sec-title__tagline">
              <p className="tg-element-title">more questions</p>
              <div className="border-box"></div>
            </div>
            <h2 className="sec-title__title tg-element-title">Technical & Business Questions</h2>
          </div>

          <div className="row">
            <div className="col-xl-6">
              <div className="faq-two__single">
                <div className="accrodion-grp" data-grp-name="faq-two-accrodion">
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>What technologies do you use?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>We use modern technologies including React, Next.js, Node.js, Python, PHP, MongoDB, MySQL, AWS, and Docker. We choose the best technology stack based on project requirements and scalability needs.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>Do you provide ongoing support?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>Yes, we offer comprehensive support and maintenance packages including bug fixes, security updates, performance monitoring, content updates, and feature enhancements.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>Can you help with digital marketing?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>Absolutely! Our digital marketing services include SEO, PPC advertising, social media marketing, content marketing, email marketing, and comprehensive analytics and reporting.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>Do you offer custom integrations?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>Yes, we specialize in custom integrations including CRM systems, payment gateways, third-party APIs, inventory management systems, and other business-specific software solutions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="faq-two__single">
                <div className="accrodion-grp" data-grp-name="faq-two-accrodion-2">
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>How do you ensure project quality?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>We follow strict quality assurance processes including code reviews, automated testing, manual testing, performance optimization, and user acceptance testing before any project delivery.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>What are your payment terms?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>We typically require 50% upfront payment with the remainder due upon project completion. For larger projects, we offer milestone-based payment schedules. We accept various payment methods including bank transfers and credit cards.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>Do you sign NDAs?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>Yes, we're happy to sign Non-Disclosure Agreements to protect your confidential information and business ideas. We understand the importance of maintaining client confidentiality.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>Can you help with branding and design?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>Yes, our creative team specializes in brand strategy, logo design, visual identity, marketing materials, UI/UX design, and complete brand guideline development.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="cta-one cta-one--faq">
        <div className="container">
          <div className="cta-one__inner">
            <div className="cta-one__content">
              <h2>Still Have Questions?</h2>
              <p>Our team is here to help. Contact us for personalized assistance with your project requirements.</p>
            </div>
            <div className="cta-one__btn">
              <a className="thm-btn" href="/contact">
                <span className="txt">Get In Touch</span>
                <span className="bdrl"></span>
                <span className="bdrr"></span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}