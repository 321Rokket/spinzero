import Link from 'next/link'
import { getSiteStructure } from '@/lib/yaml-loader'

export default function Footer() {
  const siteData = getSiteStructure()
  
  return (
    <footer className="footer-one">
      <div className="footer">
        <div className="container">
          <div className="footer-one__inner">
            <div className="logo-box text-center">
              <Link href="/">
                <img src="/assets/images/resources/logo-1.png" alt="SpinZero" />
              </Link>
            </div>

            <div className="footer-one__contact">
              <div 
                className="footer-one__contact-bdr"
                style={{backgroundImage: 'url(/assets/images/footer/footer-v1-img1.png)'}}
              ></div>
              <ul>
                <li>
                  <div className="icon-box">
                    <span className="icon-ringing"></span>
                  </div>
                  <div className="text-box">
                    <p>Call anytime</p>
                    <h3>
                      <a href={`tel:${siteData.company_info.footer_phone.replace(/\s/g, '')}`}>
                        {siteData.company_info.footer_phone}
                      </a>
                    </h3>
                  </div>
                </li>

                <li>
                  <div className="icon-box">
                    <span className="icon-message"></span>
                  </div>
                  <div className="text-box">
                    <p>Send email</p>
                    <h3>
                      <a href={`mailto:${siteData.company_info.footer_email}`}>
                        {siteData.company_info.footer_email}
                      </a>
                    </h3>
                  </div>
                </li>

                <li>
                  <div className="icon-box">
                    <span className="icon-placeholder"></span>
                  </div>
                  <div className="text-box">
                    <p>Visit Office</p>
                    <h3>{siteData.company_info.footer_address}</h3>
                  </div>
                </li>
              </ul>
            </div>

            <div className="footer-one__menu">
              <ul>
                {siteData.footer.menu.map((item, index) => (
                  <li key={index}>
                    <Link href={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-one__social-links">
              <ul>
                {siteData.footer.social_links.map((social, index) => (
                  <li key={index}>
                    <a href={social.url}>
                      <span className={social.icon}></span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="border-box"></div>
            </div>

            <div className="footer-one__copyright">
              <p>{siteData.company_info.copyright}</p>
            </div>

            <div className="scroll-to-top-box">
              <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
                Back to Top
              </a>
              <div className="border-box"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}