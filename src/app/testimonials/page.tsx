export default function TestimonialsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg" style={{backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)'}}>
        </div>
        <div className="container">
          <div className="page-header__inner">
            <h2 className="wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">Testimonials</h2>
            <ul className="thm-breadcrumb wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
              <li><a href="/">Home</a></li>
              <li><span>-</span></li>
              <li>Testimonials</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-one testimonials-one--testimonials">
        <div className="container">
          <div className="sec-title tg-heading-subheading animation-style2 text-center">
            <div className="sec-title__tagline">
              <p className="tg-element-title">client reviews</p>
              <div className="border-box"></div>
            </div>
            <h2 className="sec-title__title tg-element-title">What Our Clients Say</h2>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="testimonials-one__inner">
                <div className="owl-carousel owl-theme thm-owl__carousel testimonials-one__carousel"
                  data-owl-options='{
                    "loop": true,
                    "autoplay": true,
                    "margin": 30,
                    "nav": false,
                    "dots": true,
                    "smartSpeed": 500,
                    "autoplayTimeout": 10000,
                    "navText": ["<span className=\"icon-arrow-left\"></span>","<span className=\"icon-arrow-right\"></span>"],
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

                  {/* Testimonial 1 */}
                  <div className="testimonials-one__single">
                    <div className="testimonials-one__single-inner">
                      <div className="testimonials-one__single-img">
                        <img src="/assets/images/testimonial/testimonials-v1-img1.jpg" alt="Client" />
                        <div className="quote-icon">
                          <span className="icon-quote"></span>
                        </div>
                      </div>
                      <div className="testimonials-one__single-content">
                        <p>"SpinZero delivered exceptional results for our brand redesign project. Their creative approach and attention to detail exceeded our expectations. The team was professional, responsive, and truly understood our vision."</p>
                        <div className="client-info">
                          <h3>Sarah Mitchell</h3>
                          <span>CEO, TechStart Inc.</span>
                        </div>
                        <div className="rating">
                          <span className="icon-star"></span>
                          <span className="icon-star"></span>
                          <span className="icon-star"></span>
                          <span className="icon-star"></span>
                          <span className="icon-star"></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="testimonials-one__single">
                    <div className="testimonials-one__single-inner">
                      <div className="testimonials-one__single-img">
                        <img src="/assets/images/testimonial/testimonials-v1-img2.jpg" alt="Client" />
                        <div className="quote-icon">
                          <span className="icon-quote"></span>
                        </div>
                      </div>
                      <div className="testimonials-one__single-content">
                        <p>"Working with SpinZero was a game-changer for our digital marketing strategy. Their innovative approach increased our online engagement by 200% within just three months. Highly recommended!"</p>
                        <div className="client-info">
                          <h3>Michael Rodriguez</h3>
                          <span>Marketing Director, GrowthCo</span>
                        </div>
                        <div className="rating">
                          <span className="icon-star"></span>
                          <span className="icon-star"></span>
                          <span className="icon-star"></span>
                          <span className="icon-star"></span>
                          <span className="icon-star"></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 3 */}
                  <div className="testimonials-one__single">
                    <div className="testimonials-one__single-inner">
                      <div className="testimonials-one__single-img">
                        <img src="/assets/images/testimonial/testimonials-v1-img3.jpg" alt="Client" />
                        <div className="quote-icon">
                          <span className="icon-quote"></span>
                        </div>
                      </div>
                      <div className="testimonials-one__single-content">
                        <p>"The e-commerce platform SpinZero built for us has transformed our business. Sales have increased by 150% and the user experience is phenomenal. Their development team is top-notch."</p>
                        <div className="client-info">
                          <h3>Emily Chen</h3>
                          <span>Founder, Fashion Forward</span>
                        </div>
                        <div className="rating">
                          <span className="icon-star"></span>
                          <span className="icon-star"></span>
                          <span className="icon-star"></span>
                          <span className="icon-star"></span>
                          <span className="icon-star"></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 4 */}
                  <div className="testimonials-one__single">
                    <div className="testimonials-one__single-inner">
                      <div className="testimonials-one__single-img">
                        <img src="/assets/images/testimonial/testimonials-v2-img1.png" alt="Client" />
                        <div className="quote-icon">
                          <span className="icon-quote"></span>
                        </div>
                      </div>
                      <div className="testimonials-one__single-content">
                        <p>"SpinZero's consulting services helped us streamline our operations and improve efficiency by 40%. Their strategic insights and implementation support were invaluable to our success."</p>
                        <div className="client-info">
                          <h3>David Thompson</h3>
                          <span>Operations Manager, LogiCorp</span>
                        </div>
                        <div className="rating">
                          <span className="icon-star"></span>
                          <span className="icon-star"></span>
                          <span className="icon-star"></span>
                          <span className="icon-star"></span>
                          <span className="icon-star"></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 5 */}
                  <div className="testimonials-one__single">
                    <div className="testimonials-one__single-inner">
                      <div className="testimonials-one__single-img">
                        <img src="/assets/images/team/team-v1-img1.jpg" alt="Client" />
                        <div className="quote-icon">
                          <span className="icon-quote"></span>
                        </div>
                      </div>
                      <div className="testimonials-one__single-content">
                        <p>"The mobile app development project was executed flawlessly. SpinZero delivered on time, within budget, and the app has received excellent user reviews. We couldn't be happier with the results."</p>
                        <div className="client-info">
                          <h3>Jennifer Williams</h3>
                          <span>Product Manager, InnovateTech</span>
                        </div>
                        <div className="rating">
                          <span className="icon-star"></span>
                          <span className="icon-star"></span>
                          <span className="icon-star"></span>
                          <span className="icon-star"></span>
                          <span className="icon-star"></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 6 */}
                  <div className="testimonials-one__single">
                    <div className="testimonials-one__single-inner">
                      <div className="testimonials-one__single-img">
                        <img src="/assets/images/team/team-v1-img2.jpg" alt="Client" />
                        <div className="quote-icon">
                          <span className="icon-quote"></span>
                        </div>
                      </div>
                      <div className="testimonials-one__single-content">
                        <p>"SpinZero's SEO services have dramatically improved our search engine rankings. We're now on the first page for all our target keywords, and organic traffic has increased by 300%."</p>
                        <div className="client-info">
                          <h3>Robert Brown</h3>
                          <span>Digital Marketing Lead, SearchPro</span>
                        </div>
                        <div className="rating">
                          <span className="icon-star"></span>
                          <span className="icon-star"></span>
                          <span className="icon-star"></span>
                          <span className="icon-star"></span>
                          <span className="icon-star"></span>
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

      {/* Call to Action */}
      <section className="cta-one cta-one--testimonials">
        <div className="container">
          <div className="cta-one__inner">
            <div className="cta-one__content">
              <h2>Ready to Join Our Happy Clients?</h2>
              <p>Let's discuss how we can help transform your business with our proven solutions.</p>
            </div>
            <div className="cta-one__btn">
              <a className="thm-btn" href="/contact">
                <span className="txt">Get Started Today</span>
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