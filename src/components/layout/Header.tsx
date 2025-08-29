import { getSiteStructure } from '@/lib/yaml-loader'
import Navigation from './Navigation'

export default function Header() {
  const siteData = getSiteStructure()
  
  return (
    <>
      <header className="main-header main-header-one">
        <div className="main-header-one__inner">
          <Navigation menuItems={siteData.navigation.main_menu} />
        </div>
      </header>

      <div className="stricky-header stricky-header--one stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>
    </>
  )
}