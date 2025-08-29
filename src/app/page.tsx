import { getContentSections } from '@/lib/yaml-loader'

export default function Home() {
  const content = getContentSections()
  
  return (
    <>
      {/*Start Main Slider */}
      <section className="main-slider main-slider-one">
        <div className="swiper-container main-slider-one__carousel">
          <div className="swiper-wrapper">
            {/*Start Main Slider One*/}
            <div className="swiper-slide">
              <div className="image-layer" style={{backgroundImage: 'url(/assets/images/slides/slider-v1-bg.jpg)'}}>
              </div>
              <div className="auto-container">
                <div className="main-slider-one__single">
                  <div className="main-slider-one__img">
                    <img src="/assets/images/slides/slider-v1-img1.jpg" alt="#" />
                  </div>
                  <div className="main-slider-one__content">
                    <ul className="social-links">
                      <li><a href="#">Fb.</a></li>
                      <li><a href="#">Tw.</a></li>
                      <li><a href="#">In.</a></li>
                      <li><a href="#">Be.</a></li>
                    </ul>

                    <div className="title">
                      <h2>
                        Things <br />
                        <span className="icon-right-arrow-1"></span> creative <br />
                        everyday
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End Main Slider One*/}
          </div>
          <div className="project-one__control-wrap">
            <div className="swiper-counter">
              <div id="current2">01</div>
              <div id="total2"></div>
            </div>
          </div>

          <div className="scroll-pagination">
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
      {/*End Main Slider*/}

      {/*Start Brand One */}
      <section className="brand-one">
        <div className="auto-container">
          <div className="brand-one__inner">
            <ul>
              {content.sections.brands.brands.map((brand) => (
                <li key={brand.id}>
                  <a href={brand.url}>
                    <img src={brand.logo} alt={brand.name} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/*End Brand One */}

      {/*Start About One */}
      <section className="about-one">
        <div className="big-title1 wow slideInLeft" data-wow-delay="500ms" data-wow-duration="2500ms">
          <h2>About</h2>
        </div>
        <div className="big-title2 wow slideInRight" data-wow-delay="500ms" data-wow-duration="2500ms">
          <h2>Creative</h2>
        </div>
        <div className="container">
          <div className="about-one__inner">
            <div className="sec-title text-center tg-heading-subheading animation-style2">
              <div className="sec-title__tagline">
                <p className="tg-element-title">{content.sections.about.tagline}</p>
                <div className="border-box"></div>
              </div>
              <h2 className="sec-title__title tg-element-title" dangerouslySetInnerHTML={{
                __html: content.sections.about.title.replace(/&/g, '&<br />')
              }} />
            </div>
            <div className="btn-box">
              <a className="thm-btn" href={content.sections.about.cta.url}>
                <span className="txt">{content.sections.about.cta.text}</span>
                <span className="bdrl"></span>
                <span className="bdrr"></span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*End About One */}
    </>
  );
}