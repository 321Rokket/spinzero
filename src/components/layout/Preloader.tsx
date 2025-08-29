'use client'

export default function Preloader() {
  return (
    <div className="loader-wrap">
      <div className="preloader">
        <div className="preloader-close">x</div>
        <div id="handle-preloader" className="handle-preloader">
          <div className="animation-preloader">
            <div className="spinner"></div>
            <div className="txt-loading">
              <span data-text-preloader="b" className="letters-loading"> b </span>
              <span data-text-preloader="a" className="letters-loading"> a </span>
              <span data-text-preloader="o" className="letters-loading"> o </span>
              <span data-text-preloader="s" className="letters-loading"> s </span>
              <span data-text-preloader="h" className="letters-loading"> h </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}